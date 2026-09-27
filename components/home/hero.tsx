import Link from "next/link";

const CALENDLY = "https://calendly.com/onesoftauto/30min";

export function Hero2({
  eyebrow = "Product studio · Dhaka",
  headline = "We build digital products that",
  headlineAccent = "transform businesses.",
  subcopy = "From stunning websites to AI-powered SaaS platforms, we craft software that drives growth and measurable results.",
  calendlyUrl = CALENDLY,
}: {
  eyebrow?: string;
  headline?: string;
  headlineAccent?: string;
  subcopy?: string;
  calendlyUrl?: string;
}) {
  return (
    <div className="hero2">
      <div>
        <p className="label" style={{ margin: "0 0 20px" }}>
          {eyebrow}
        </p>
        <h1>
          {headline} <span>{headlineAccent}</span>
        </h1>
        <p>{subcopy}</p>
        <div className="ctas">
          <a className="btn btn-primary" href={calendlyUrl}>
            Book a call <span className="arr">→</span>
          </a>
          <Link className="btn btn-ghost" href="#work">
            See work
          </Link>
        </div>
      </div>
      <div className="orb" aria-hidden="true">
        <div className="glow" />
        <div className="tilt">
          <svg viewBox="0 0 200 200" fill="none">
            <defs>
              <linearGradient id="og" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0" stopColor="#16D2E6" />
                <stop offset="1" stopColor="#2447FF" />
              </linearGradient>
            </defs>
            <circle
              cx="100"
              cy="100"
              r="96"
              stroke="url(#og)"
              strokeWidth="1.2"
              strokeDasharray="2 6"
            />
          </svg>
          <svg className="r2" viewBox="0 0 200 200" fill="none">
            <circle
              cx="100"
              cy="100"
              r="84"
              stroke="url(#og)"
              strokeWidth="1.5"
              strokeDasharray="120 408"
              strokeLinecap="round"
            />
          </svg>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/brand/orb.png" alt="" />
        </div>
      </div>
    </div>
  );
}
