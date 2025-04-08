const t = localStorage.getItem("website-theme") ?? "system";
const h = document.documentElement;
h.classList.remove("light", "dark");
h.classList.add(
  t === "system"
    ? window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light"
    : t,
);
