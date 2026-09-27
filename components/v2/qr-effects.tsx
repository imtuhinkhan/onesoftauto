"use client";

import { useEffect } from "react";

/** QR landing intro clip-path animation from V2 qr.html */
export function QrEffects() {
  useEffect(() => {
    const root = document.querySelector(".qr-page");
    if (!root) return;
    root.classList.add("js-intro");
    const intro = document.getElementById("intro");
    const skip = document.getElementById("skip");
    const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;

    const done = () => {
      if (!intro) return;
      intro.classList.add("out");
      window.setTimeout(() => {
        intro.setAttribute("hidden", "");
        intro.setAttribute("aria-hidden", "true");
      }, reduce ? 0 : 900);
    };

    if (reduce) {
      done();
      return;
    }

    const t = window.setTimeout(done, 2600);
    skip?.addEventListener("click", () => {
      window.clearTimeout(t);
      done();
    });

    return () => window.clearTimeout(t);
  }, []);

  return null;
}
