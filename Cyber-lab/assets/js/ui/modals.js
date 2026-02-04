// Generic modal system

function openModal(id) {
  const modal = document.getElementById(id);
  if (!modal) return;

  modal.classList.add("open");
  document.body.classList.add("modal-open");
}

function closeModal(id) {
  const modal = document.getElementById(id);
  if (!modal) return;

  modal.classList.remove("open");
  document.body.classList.remove("modal-open");
}

// Close on ESC
document.addEventListener("keydown", e => {
  if (e.key === "Escape") {
    document.querySelectorAll(".modal.open").forEach(m => {
      m.classList.remove("open");
    });
    document.body.classList.remove("modal-open");
  }
});

// Close on outside click
document.addEventListener("click", e => {
  if (e.target.classList.contains("modal")) {
    e.target.classList.remove("open");
    document.body.classList.remove("modal-open");
  }
});
