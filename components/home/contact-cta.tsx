"use client";

import Link from "next/link";
import { useState, type FormEvent } from "react";
import { submitContact } from "@/actions/contact";

const CALENDLY = "https://calendly.com/onesoftauto/30min";

export function ContactCTA({
  headline = "Have a project in mind?",
  subcopy = "Book a free 30-minute call or send a message. We reply within 24 hours on weekdays.",
  calendlyUrl = CALENDLY,
  email = "hello@onesoftauto.com",
  studio = "Dhaka · Mon–Fri, 9am–6pm GMT+6",
}: {
  headline?: string;
  subcopy?: string;
  calendlyUrl?: string;
  email?: string;
  studio?: string;
}) {
  const [note, setNote] = useState("");
  const [noteColor, setNoteColor] = useState("var(--good)");
  const [pending, setPending] = useState(false);

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const fd = new FormData(form);
    const name = String(fd.get("name") || "").trim();
    const emailVal = String(fd.get("email") || "").trim();
    const message = String(fd.get("message") || "").trim();

    if (!name || !/\S+@\S+\.\S+/.test(emailVal) || message.length < 10) {
      setNoteColor("var(--accent)");
      setNote(
        "Add your name, a valid email and a few words about the project."
      );
      return;
    }

    setPending(true);
    try {
      const result = await submitContact({}, fd);
      if (result?.error || result?.fieldErrors) {
        setNoteColor("var(--accent)");
        setNote(
          result.error ||
            Object.values(result.fieldErrors || {})[0]?.[0] ||
            "Please check the form and try again."
        );
      } else {
        setNoteColor("var(--good)");
        setNote(`Thanks, ${name.split(" ")[0]}. We'll get back to you soon.`);
        form.reset();
      }
    } catch {
      setNoteColor("var(--accent)");
      setNote("Something went wrong. Please try again or book a call.");
    } finally {
      setPending(false);
    }
  }

  return (
    <div className="ct2" id="contact">
      <div className="l">
        <h2>{headline}</h2>
        <p>{subcopy}</p>
        <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
          <a className="btn btn-primary" href={calendlyUrl}>
            Book a call <span className="arr">→</span>
          </a>
        </div>
        <div className="lines">
          <div>
            <span>Email</span>
            <b>{email}</b>
          </div>
          <div>
            <span>Studio</span>
            <b>{studio}</b>
          </div>
          <div>
            <span>Questions</span>
            <b>
              <Link
                href="/faq"
                style={{ color: "var(--accent)", textDecoration: "none" }}
              >
                Read the FAQ →
              </Link>
            </b>
          </div>
        </div>
      </div>
      <form id="form" noValidate onSubmit={onSubmit}>
        <div className="f">
          <label htmlFor="f-name">Name</label>
          <input
            id="f-name"
            name="name"
            autoComplete="name"
            placeholder="Your name"
          />
        </div>
        <div className="f">
          <label htmlFor="f-email">Email</label>
          <input
            id="f-email"
            name="email"
            type="email"
            autoComplete="email"
            placeholder="you@company.com"
          />
        </div>
        <div className="f full">
          <label htmlFor="f-budget">Budget</label>
          <select id="f-budget" name="budget" defaultValue="$2,000 – $10,000">
            <option>Under $2,000</option>
            <option>$2,000 – $10,000</option>
            <option>$10,000 – $30,000</option>
            <option>$30,000+</option>
            <option>Not sure yet</option>
          </select>
        </div>
        <div className="f full">
          <label htmlFor="f-msg">Project</label>
          <textarea
            id="f-msg"
            name="message"
            rows={4}
            placeholder="What are you building, and by when?"
          />
        </div>
        <div className="f full">
          <button
            className="btn btn-primary"
            type="submit"
            style={{ justifySelf: "start" }}
            disabled={pending}
          >
            {pending ? "Sending…" : "Send message"}{" "}
            <span className="arr">→</span>
          </button>
        </div>
        <p className="form-note" id="note" role="status" style={{ color: noteColor }}>
          {note}
        </p>
      </form>
    </div>
  );
}
