const THEME_KEY = "cyberLabTheme";

function applyTheme(theme) {
  document.body.classList.remove("dark", "neon");
  document.body.classList.add(theme);
  localStorage.setItem(THEME_KEY, theme);
}

function toggleTheme() {
  const current = localStorage.getItem(THEME_KEY) || "dark";
  applyTheme(current === "dark" ? "neon" : "dark");
}

// Load theme on startup
const savedTheme = localStorage.getItem(THEME_KEY) || "dark";
applyTheme(savedTheme);
