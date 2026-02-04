// SPA-like navigation with smooth transitions

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("a[href]").forEach(link => {
    const href = link.getAttribute("href");

    if (!href.startsWith("http") && !href.startsWith("#")) {
      link.addEventListener("click", e => {
        e.preventDefault();
        navigate(href);
      });
    }
  });
});

function navigate(url) {
  document.body.classList.add("page-exit");

  setTimeout(() => {
    window.location.href = url;
  }, 300);
}
