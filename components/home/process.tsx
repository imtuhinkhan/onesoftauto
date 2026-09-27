const DEFAULT_STEPS = [
  { n: "01", title: "Discover", body: "Your goals, users and market." },
  {
    n: "02",
    title: "Plan",
    body: "Roadmap, architecture and success metrics.",
  },
  {
    n: "03",
    title: "Design",
    body: "Wireframes to tested, polished screens.",
  },
  { n: "04", title: "Build", body: "Sprints with a demo every week." },
  { n: "05", title: "Launch", body: "Deploy, monitor and keep improving." },
];

export function ProcessSection({
  subcopy = "Five stages. A working demo every week from design onward.",
  steps = DEFAULT_STEPS,
}: {
  subcopy?: string;
  steps?: { n: string; title: string; body: string }[];
}) {
  return (
    <section id="process" style={{ paddingTop: 0 }}>
      <div className="sec-top">
        <h2>Process</h2>
        <p className="sub">{subcopy}</p>
      </div>
      <div className="steps">
        {steps.map((s) => (
          <div key={s.n}>
            <small>{s.n}</small>
            <h3>{s.title}</h3>
            <p>{s.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
