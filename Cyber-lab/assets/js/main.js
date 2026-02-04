async function loadComponent(id, file) {
  const el = document.getElementById(id);
  if (!el) return;

  try {
    const res = await fetch(file);
    el.innerHTML = await res.text();
  } catch (err) {
    console.error("Failed to load component:", file);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  loadComponent("navbar", "components/navbar.html");
  loadComponent("sidebar", "components/sidebar.html");
  loadComponent("footer", "components/footer.html");
});
