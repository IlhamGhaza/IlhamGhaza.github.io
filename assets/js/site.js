// Small progressive enhancements: mobile menu, portfolio filter, active nav link, footer year.
(() => {
  const header = document.querySelector(".site-header");
  const toggle = document.querySelector(".menu-toggle");
  const nav = document.getElementById("site-nav");

  // Mobile menu
  const setMenu = (open) => {
    toggle.setAttribute("aria-expanded", String(open));
    nav.classList.toggle("is-open", open);
  };
  toggle.addEventListener("click", () => setMenu(toggle.getAttribute("aria-expanded") !== "true"));
  nav.addEventListener("click", (e) => { if (e.target.closest("a")) setMenu(false); });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && toggle.getAttribute("aria-expanded") === "true") { setMenu(false); toggle.focus(); }
  });
  document.addEventListener("click", (e) => { if (!header.contains(e.target)) setMenu(false); });

  // Portfolio filter
  const buttons = document.querySelectorAll(".filter");
  const projects = document.querySelectorAll(".project");
  const status = document.getElementById("filter-status");
  buttons.forEach((btn) => btn.addEventListener("click", () => {
    const value = btn.dataset.filter;
    buttons.forEach((b) => b.setAttribute("aria-pressed", String(b === btn)));
    let shown = 0;
    projects.forEach((p) => {
      const platforms = (p.dataset.platform || "").split(/\s+/);
      const match = value === "all" || platforms.includes(value);
      p.hidden = !match;
      if (match) shown++;
    });
    status.textContent = `Showing ${shown} ${value === "all" ? "" : value + " "}project${shown === 1 ? "" : "s"}`;
  }));

  // Active nav link while scrolling
  const links = new Map([...nav.querySelectorAll('a[href^="#"]')].map((a) => [a.hash.slice(1), a]));
  if ("IntersectionObserver" in window) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((en) => {
        if (!en.isIntersecting) return;
        links.forEach((a) => a.removeAttribute("aria-current"));
        links.get(en.target.id)?.setAttribute("aria-current", "true");
      });
    }, { rootMargin: "-45% 0px -50% 0px" });
    links.forEach((_, id) => { const s = document.getElementById(id); if (s) io.observe(s); });
  }

  document.querySelectorAll("[data-year]").forEach((el) => { el.textContent = new Date().getFullYear(); });
})();
