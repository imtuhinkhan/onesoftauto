export function About2({
  lead = "We design, build and automate digital products for founders and growing businesses,",
  leadEm = "from the first sketch to launch and beyond.",
  points = [
    { title: "Based in Dhaka", body: "GMT+6, working across time zones" },
    { title: "Weekly demos", body: "Real progress you can click, every week" },
    {
      title: "You own everything",
      body: "Code, designs and accounts from day one",
    },
  ],
}: {
  lead?: string;
  leadEm?: string;
  points?: { title: string; body: string }[];
}) {
  return (
    <section className="about2" id="about" aria-label="About">
      <p className="lead2" suppressHydrationWarning>
        {lead} <em>{leadEm}</em>
      </p>
      <div className="pts">
        {points.map((p) => (
          <div key={p.title}>
            <b>{p.title}</b>
            <span>{p.body}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
