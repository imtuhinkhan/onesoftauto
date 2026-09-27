"use client";

import { useEffect } from "react";

/** Ports V2 index.html interaction scripts (nav, scroll, stack, discs, reveals). */
export function SiteEffects() {
  useEffect(() => {
    const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
    const nav = document.getElementById("nav");
    const mb = document.getElementById("menuBtn");
    const cleanups: Array<() => void> = [];

    const onScrollNav = () => {
      nav?.classList.toggle("scrolled", window.scrollY > 8);
    };
    window.addEventListener("scroll", onScrollNav, { passive: true });
    cleanups.push(() => window.removeEventListener("scroll", onScrollNav));
    onScrollNav();

    if (mb && nav) {
      const onMenu = () => {
        const o = nav.classList.toggle("open");
        mb.setAttribute("aria-expanded", String(o));
        mb.textContent = o ? "Close" : "Menu";
      };
      mb.addEventListener("click", onMenu);
      cleanups.push(() => mb.removeEventListener("click", onMenu));
      document.querySelectorAll("#links a").forEach((a) => {
        const close = () => {
          nav.classList.remove("open");
          mb.textContent = "Menu";
          mb.setAttribute("aria-expanded", "false");
        };
        a.addEventListener("click", close);
        cleanups.push(() => a.removeEventListener("click", close));
      });
    }

    const dialIo =
      "IntersectionObserver" in window
        ? new IntersectionObserver(
            (es) =>
              es.forEach((e) => {
                if (e.isIntersecting) {
                  e.target.classList.add("on");
                  dialIo?.unobserve(e.target);
                }
              }),
            { threshold: 0.3 }
          )
        : null;
    document.querySelectorAll(".dial").forEach((d) => {
      if (dialIo) dialIo.observe(d);
      else d.classList.add("on");
    });
    cleanups.push(() => dialIo?.disconnect());

    const orb = document.querySelector(".orb .tilt") as HTMLElement | null;
    if (orb && !reduce && matchMedia("(hover:hover)").matches) {
      const onMove = (e: PointerEvent) => {
        const x = e.clientX / innerWidth - 0.5;
        const y = e.clientY / innerHeight - 0.5;
        orb.style.transform = `rotateY(${x * 22}deg) rotateX(${-y * 22}deg)`;
      };
      window.addEventListener("pointermove", onMove, { passive: true });
      cleanups.push(() => window.removeEventListener("pointermove", onMove));
    }

    // Scroll progress + orb parallax + reveals
    let bar = document.querySelector(".sprog") as HTMLElement | null;
    if (!bar) {
      bar = document.createElement("div");
      bar.className = "sprog";
      bar.setAttribute("aria-hidden", "true");
      document.body.appendChild(bar);
    }
    const heroOrb = document.querySelector(".hero2 .orb") as HTMLElement | null;
    const onScrollFx = () => {
      const h = document.documentElement;
      const max = h.scrollHeight - h.clientHeight || 1;
      const y = h.scrollTop;
      if (bar) bar.style.transform = `scaleX(${Math.min(1, y / max)})`;
      if (heroOrb && !reduce && y < 1200) {
        heroOrb.style.transform = `translateY(${y * 0.18}px) rotate(${y * 0.03}deg) scale(${1 - Math.min(y, 800) / 4000})`;
      }
    };
    window.addEventListener("scroll", onScrollFx, { passive: true });
    onScrollFx();
    cleanups.push(() => window.removeEventListener("scroll", onScrollFx));

    if (!reduce && "IntersectionObserver" in window) {
      const vh = innerHeight;
      const io = new IntersectionObserver(
        (es) =>
          es.forEach((e) => {
            if (e.isIntersecting) {
              e.target.classList.add("in");
              io.unobserve(e.target);
              if (e.target.classList.contains("stat")) countUp(e.target);
            }
          }),
        { threshold: 0.15, rootMargin: "0px 0px -6% 0px" }
      );
      const below = (el: Element) =>
        el.getBoundingClientRect().top > vh * 0.92;

      // Word-splitting rewrite of React-managed nodes causes hydration mismatches — skip it.
      // Reveal/stagger still runs via .rv / .in classes below.

      const groups = [
        ".sec-top",
        ".tile",
        ".svc3 > div",
        ".steps > div",
        ".faq2 details",
        ".ct2 .l > p",
        ".ct2 .l > div",
        ".ct2 form",
        ".pts > div",
        ".plist a",
        ".stat",
        ".feat li",
        ".tl3 li",
        ".split p.body",
        ".cs-vis2",
        ".facts2",
        ".pager",
        ".article > *",
        ".q2 > p",
        ".foot3 > div",
      ];
      groups.forEach((sel) => {
        let k = 0;
        let lastParent: Element | null = null;
        document.querySelectorAll(sel).forEach((el) => {
          if (el.parentElement !== lastParent) {
            k = 0;
            lastParent = el.parentElement;
          }
          if (below(el)) {
            (el as HTMLElement).style.setProperty(
              "--d",
              `${Math.min(k, 6) * 0.08}s`
            );
            el.classList.add("rv");
            io.observe(el);
          } else {
            el.classList.add("in");
          }
          k++;
        });
      });
      cleanups.push(() => io.disconnect());
    }

    // Service stack scale
    if (!reduce) {
      const cards = [...document.querySelectorAll(".scard")] as HTMLElement[];
      if (cards.length) {
        const upd = () => {
          cards.forEach((c, i) => {
            let depth = 0;
            for (let j = i + 1; j < cards.length; j++) {
              const a = c.getBoundingClientRect();
              const b = cards[j].getBoundingClientRect();
              const ov = Math.max(0, Math.min(1, (a.bottom - b.top) / a.height));
              depth += ov;
            }
            const s = 1 - Math.min(depth, 3) * 0.045;
            c.style.transform = `scale(${s.toFixed(4)})`;
            c.style.filter = `brightness(${(1 - Math.min(depth, 3) * 0.05).toFixed(3)})`;
          });
        };
        let raf = 0;
        const onStackScroll = () => {
          if (!raf)
            raf = requestAnimationFrame(() => {
              raf = 0;
              upd();
            });
        };
        window.addEventListener("scroll", onStackScroll, { passive: true });
        window.addEventListener("resize", upd);
        upd();
        cleanups.push(() => {
          window.removeEventListener("scroll", onStackScroll);
          window.removeEventListener("resize", upd);
        });
      }
    }

    // Work discs
    const ds = [...document.querySelectorAll("#discs .disc")];
    const fine = matchMedia("(hover:hover) and (min-width:861px)");
    const act = (d: Element) => {
      ds.forEach((x) => {
        const on = x === d;
        x.classList.toggle("on", on);
        x.setAttribute("aria-expanded", String(on));
      });
    };
    ds.forEach((d) => {
      const onEnter = () => {
        if (fine.matches) act(d);
      };
      const onClick = (e: Event) => {
        if ((e.target as Element).closest("a")) return;
        act(d);
      };
      const onKey = (e: Event) => {
        const ke = e as KeyboardEvent;
        if (ke.key === "Enter" || ke.key === " ") {
          ke.preventDefault();
          act(d);
        }
      };
      d.addEventListener("mouseenter", onEnter);
      d.addEventListener("click", onClick);
      d.addEventListener("keydown", onKey);
      cleanups.push(() => {
        d.removeEventListener("mouseenter", onEnter);
        d.removeEventListener("click", onClick);
        d.removeEventListener("keydown", onKey);
      });
    });

    return () => {
      cleanups.forEach((fn) => fn());
      document.querySelector(".sprog")?.remove();
    };
  }, []);

  return null;
}

function countUp(st: Element) {
  const b = st.querySelector("b");
  if (!b) return;
  const m = b.textContent?.match(/^([^0-9]*)([0-9][0-9,]*)(.*)$/);
  if (!m) return;
  const target = parseInt(m[2].replace(/,/g, ""), 10);
  const comma = m[2].includes(",");
  const t0 = performance.now();
  const dur = 1400;
  const step = (t: number) => {
    const p = Math.min(1, (t - t0) / dur);
    const e = 1 - Math.pow(1 - p, 3);
    const v = Math.round(target * e);
    b.textContent =
      m[1] + (comma ? v.toLocaleString("en-US") : String(v)) + m[3];
    if (p < 1) requestAnimationFrame(step);
  };
  requestAnimationFrame(step);
}
