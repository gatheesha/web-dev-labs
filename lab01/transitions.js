// shared page fade in/out for navigation between pages
requestAnimationFrame(() => document.body.classList.add("fade-in"));

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("a[href]").forEach(link => {
    link.addEventListener("click", e => {
      const href = link.getAttribute("href");
      if (!href || href.startsWith("#")) return;
      e.preventDefault();
      document.body.classList.remove("fade-in");
      document.body.classList.add("fade-out");
      setTimeout(() => { window.location.href = href; }, 400);
    });
  });
});
