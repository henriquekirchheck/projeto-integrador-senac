import { Theme, THEME_STORAGE_KEY } from "@/components/ThemeProvider";

const theme = (localStorage.getItem(THEME_STORAGE_KEY) as Theme) || "system";

const root = document.documentElement;
root.classList.remove("light", "dark");

if (theme === "system") {
  const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
  root.classList.add(systemTheme);
} else {
  root.classList.add(theme);
}
