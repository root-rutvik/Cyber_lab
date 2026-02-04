const grid = document.getElementById("labsGrid");

function renderLabs() {
  grid.innerHTML = "";

  labs.forEach(lab => {
    const card = document.createElement("div");
    card.className = `card lab-card ${lab.status === "locked" ? "locked" : ""}`;

    card.innerHTML = `
      <h3>${lab.name}</h3>
      <p>${lab.description}</p>

      <span class="badge ${lab.difficulty}">
        ${lab.difficulty.toUpperCase()}
      </span>

      <div class="lab-status">
        Status: ${lab.status.toUpperCase()}
      </div>
    `;

    if (lab.status !== "locked") {
      card.addEventListener("click", () => {
        alert(`Lab "${lab.name}" will open here (next step)`);
      });
    }

    grid.appendChild(card);
  });
}

renderLabs();
