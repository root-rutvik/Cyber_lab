// Card interaction enhancements

document.querySelectorAll(".card").forEach(card => {
  card.addEventListener("mouseenter", () => {
    card.classList.add("card-active");
  });

  card.addEventListener("mouseleave", () => {
    card.classList.remove("card-active");
  });

  card.setAttribute("tabindex", "0");

  card.addEventListener("focus", () => {
    card.classList.add("card-active");
  });

  card.addEventListener("blur", () => {
    card.classList.remove("card-active");
  });
});
