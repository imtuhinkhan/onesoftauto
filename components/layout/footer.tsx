import Link from "next/link";

export function Footer() {
  return (
    <footer className="foot3">
      <div>
        <Link className="brand" href="/" aria-label="Onesoftauto home">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            className="logo-img logo-on-light"
            src="/brand/logo-light.png"
            alt="Onesoftauto"
            width={182}
            height={32}
          />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            className="logo-img logo-on-dark"
            src="/brand/logo-dark.png"
            alt="Onesoftauto"
            width={182}
            height={32}
          />
        </Link>
        <p>
          Product studio in Dhaka building web, SaaS, mobile and AI products.
        </p>
      </div>
      <div>
        <h4>Pages</h4>
        <ul>
          <li>
            <Link href="/work">Work</Link>
          </li>
          <li>
            <Link href="/#services">Services</Link>
          </li>
          <li>
            <Link href="/#process">Process</Link>
          </li>
          <li>
            <Link href="/blog">Blog</Link>
          </li>
          <li>
            <Link href="/faq">FAQ</Link>
          </li>
          <li>
            <Link href="/#contact">Contact</Link>
          </li>
        </ul>
      </div>
      <div>
        <h4>Case studies</h4>
        <ul>
          <li>
            <Link href="/case-studies/priyos-shop">Priyos Shop</Link>
          </li>
          <li>
            <Link href="/case-studies/englishence">Englishence</Link>
          </li>
          <li>
            <Link href="/case-studies/moochatai">MooChatAI</Link>
          </li>
          <li>
            <Link href="/case-studies/clokwork">Clokwork</Link>
          </li>
          <li>
            <Link href="/case-studies/color-n-shape">Color N Shape</Link>
          </li>
        </ul>
      </div>
      <div>
        <h4>Contact</h4>
        <ul>
          <li>
            <a href="https://calendly.com/onesoftauto/30min">Book a call</a>
          </li>
          <li>
            <Link href="/welcome-to-osa">WhatsApp</Link>
          </li>
          <li>
            <a href="https://linkedin.com" rel="noreferrer" target="_blank">
              LinkedIn
            </a>
          </li>
          <li>
            <a href="https://github.com" rel="noreferrer" target="_blank">
              GitHub
            </a>
          </li>
        </ul>
      </div>
      <small>
        <span>© {new Date().getFullYear()} Onesoftauto · Dhaka, Bangladesh</span>
        <span>Privacy · Terms</span>
      </small>
    </footer>
  );
}
