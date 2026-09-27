import { getTestimonials } from "@/lib/data";
import type { Testimonial } from "@/types";

function initials(name: string) {
  return name
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0]?.toUpperCase() ?? "")
    .join("");
}

function stars(rating: number) {
  const n = Math.max(0, Math.min(5, Math.round(rating || 5)));
  return "★".repeat(n);
}

function TestimonialCard({
  t,
  hidden,
}: {
  t: Testimonial;
  hidden?: boolean;
}) {
  const caption = [t.role, t.company].filter(Boolean).join(", ");
  return (
    <figure
      className="tcard"
      aria-hidden={hidden ? true : undefined}
    >
      <span className="stars" aria-label={`${t.rating || 5} out of 5`}>
        {stars(t.rating || 5)}
      </span>
      <blockquote>“{t.quote.replace(/^["“]|["”]$/g, "")}”</blockquote>
      <figcaption>
        <span className="tav">{initials(t.author) || "+"}</span>
        <span>
          <b>{t.author}</b>
          <small>{caption}</small>
        </span>
      </figcaption>
    </figure>
  );
}

export async function TestimonialsSection() {
  const items = await getTestimonials();
  if (!items.length) return null;

  const featured = items[0];
  const featuredCaption = `${featured.author} · ${[featured.role, featured.company].filter(Boolean).join(", ")}`;

  // Duplicate for seamless marquee (CSS animates translateX -50%)
  const loop = [...items, ...items];

  return (
    <>
      <section id="testimonials" style={{ paddingTop: 0 }}>
        <div className="q2">
          <blockquote>
            “{featured.quote.replace(/^["“]|["”]$/g, "")}”
          </blockquote>
          <p>{featuredCaption}</p>
        </div>
      </section>
      <div className="tmq" aria-label="Client feedback">
        <div className="tmq-in">
          {loop.map((t, i) => (
            <TestimonialCard
              key={`${t.author}-${t.company}-${i}`}
              t={t}
              hidden={i >= items.length}
            />
          ))}
        </div>
      </div>
    </>
  );
}
