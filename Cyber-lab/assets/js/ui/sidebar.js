// Sidebar toggle for mobile & small screens

const sidebar = document.querySelector(".sidebar");

function toggleSidebar() {
  sidebar.classList.toggle("open");
}

// Close sidebar on outside click (mobile)
document.addEventListener("click", (e) => {
  if (
    sidebar &&
    sidebar.classList.contains("open") &&
    !sidebar.contains(e.target) &&
    !e.target.classList.contains("sidebar-toggle")
  ) {
    sidebar.classList.remove("open");
  }
});
