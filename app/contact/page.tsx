import type { Metadata } from "next";
import { ContactCTA } from "@/components/home/contact-cta";

export const metadata: Metadata = {
  title: "Contact",
  description: "Book a call or send a message to Onesoftauto.",
};

export default function ContactPage() {
  return (
    <>
      <div className="ph">
        <h1>Contact</h1>
        <p>
          Book a free 30-minute call or send a message. We reply within 24 hours
          on weekdays.
        </p>
      </div>
      <ContactCTA />
    </>
  );
}
