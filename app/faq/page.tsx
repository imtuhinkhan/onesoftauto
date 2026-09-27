import type { Metadata } from "next";
import { ContactCTA } from "@/components/home/contact-cta";
import { getFaqs } from "@/lib/data";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Working together, pricing, ownership, services and what happens after launch.",
};

export const revalidate = 60;

export default async function FaqPage() {
  const faqs = await getFaqs();
  const groups = Array.from(
    faqs.reduce((map, faq) => {
      const list = map.get(faq.group) ?? [];
      list.push(faq);
      map.set(faq.group, list);
      return map;
    }, new Map<string, typeof faqs>())
  );

  return (
    <>
      <div className="ph">
        <p className="crumb">
          <a href="/" style={{ color: "var(--muted)", textDecoration: "none" }}>
            Home
          </a>{" "}
          / FAQ
        </p>
        <h1>FAQ</h1>
        <p>
          Straight answers on how we work, what things cost, and what you own.
        </p>
      </div>
      {groups.map(([group, items]) => (
        <section className="faqg" key={group}>
          <div className="faqg-in">
            <h2>{group}</h2>
            <div className="faq faq2">
              {items.map((faq) => (
                <details key={faq.question}>
                  <summary>
                    {faq.question}
                    <i />
                  </summary>
                  <p>{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>
      ))}
      <ContactCTA />
    </>
  );
}
