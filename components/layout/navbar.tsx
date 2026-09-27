"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { useSiteSettings } from "@/lib/site-settings-context";

const CALENDLY_FALLBACK = "https://calendly.com/onesoftauto/30min";

export function Navbar() {
  const pathname = usePathname();
  const { theme, setTheme, resolvedTheme } = useTheme();
  const settings = useSiteSettings();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const calendly = settings.calendlyUrl || CALENDLY_FALLBACK;
  const isHome = pathname === "/";
  const workHref = isHome ? "#work" : "/work";
  const servicesHref = isHome ? "#services" : "/#services";
  const contactHref = isHome ? "#contact" : "/#contact";
  const homeHref = isHome ? "#top" : "/";

  const isWork =
    pathname?.startsWith("/work") || pathname?.startsWith("/case-studies");
  const isBlog = pathname?.startsWith("/blog");

  return (
    <header className="nav" id="nav">
      <div className="nav-in">
        <Link className="brand" href={homeHref} aria-label="Onesoftauto home">
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
        <ul className="nav-links" id="links">
          <li>
            <Link href={workHref} aria-current={isWork ? "page" : undefined}>
              Work
            </Link>
          </li>
          <li>
            <Link href={servicesHref}>Services</Link>
          </li>
          <li>
            <Link href="/blog" aria-current={isBlog ? "page" : undefined}>
              Blog
            </Link>
          </li>
          <li>
            <Link href={contactHref}>Contact</Link>
          </li>
        </ul>
        <button
          type="button"
          className="theme-btn"
          aria-label="Toggle theme"
          onClick={() =>
            setTheme(
              (mounted ? resolvedTheme || theme : theme) === "dark"
                ? "light"
                : "dark"
            )
          }
        >
          {mounted && (resolvedTheme || theme) === "dark" ? (
            <Sun size={16} />
          ) : (
            <Moon size={16} />
          )}
        </button>
        <a className="btn btn-primary" href={calendly}>
          Book a call <span className="arr">→</span>
        </a>
        <button
          className="menu-btn"
          id="menuBtn"
          aria-expanded="false"
          aria-controls="links"
          type="button"
        >
          Menu
        </button>
      </div>
    </header>
  );
}
