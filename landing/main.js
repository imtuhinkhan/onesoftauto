(() => {
  const body = document.body;
  const burger = document.querySelector(".burger");
  const overlay = document.querySelector(".overlay");
  const mobileMenu = document.querySelector(".mobile-menu");
  const mobileLinks = document.querySelectorAll(".mobile-link, .mobile-sign-in");
  const stats = document.querySelectorAll(".stat");

  const easeOutCubic = (t) => 1 - Math.pow(1 - t, 3);

  function openMenu() {
    if (!burger || !overlay || !mobileMenu) return;
    burger.setAttribute("aria-expanded", "true");
    burger.setAttribute("aria-label", "Close menu");
    overlay.hidden = false;
    mobileMenu.hidden = false;
    body.classList.add("menu-open");
  }

  function closeMenu() {
    if (!burger || !overlay || !mobileMenu) return;
    burger.setAttribute("aria-expanded", "false");
    burger.setAttribute("aria-label", "Open menu");
    overlay.hidden = true;
    mobileMenu.hidden = true;
    body.classList.remove("menu-open");
  }

  function toggleMenu() {
    const expanded = burger?.getAttribute("aria-expanded") === "true";
    if (expanded) closeMenu();
    else openMenu();
  }

  burger?.addEventListener("click", toggleMenu);
  overlay?.addEventListener("click", closeMenu);

  mobileLinks.forEach((link) => {
    link.addEventListener("click", closeMenu);
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeMenu();
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth > 720) closeMenu();
  });

  function animateStat(stat, index) {
    const target = Number(stat.dataset.target || 0);
    const decimals = Number(stat.dataset.decimals || 0);
    const numEl = stat.querySelector(".stat-num");
    if (!numEl) return;

    const duration = 1500 + index * 80;
    const startOffset = 480 + index * 90;
    let startTime = null;

    const tick = (now) => {
      if (startTime === null) startTime = now;
      const elapsed = now - startTime - startOffset;

      if (elapsed < 0) {
        requestAnimationFrame(tick);
        return;
      }

      const progress = Math.min(elapsed / duration, 1);
      const value = target * easeOutCubic(progress);
      numEl.textContent = value.toFixed(decimals);

      if (progress < 1) requestAnimationFrame(tick);
      else numEl.textContent = target.toFixed(decimals);
    };

    requestAnimationFrame(tick);
  }

  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (reduceMotion) {
    stats.forEach((stat) => {
      const target = Number(stat.dataset.target || 0);
      const decimals = Number(stat.dataset.decimals || 0);
      const numEl = stat.querySelector(".stat-num");
      if (numEl) numEl.textContent = target.toFixed(decimals);
    });
    return;
  }

  let started = false;
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting || started) return;
        started = true;
        stats.forEach((stat, i) => animateStat(stat, i));
        observer.disconnect();
      });
    },
    { threshold: 0.25 }
  );

  const statsEl = document.querySelector(".stats");
  if (statsEl) observer.observe(statsEl);
})();
