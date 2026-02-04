console.log("✅ tools-filter.js loaded");

const grid = document.getElementById("toolsGrid");
const searchInput = document.getElementById("search");

if (!grid) {
  console.error("❌ toolsGrid not found in HTML");
}

function renderTools(list) {
  grid.innerHTML = "";

  list.forEach(tool => {
    const card = document.createElement("div");
    card.className = "card";

    card.innerHTML = `
      <div class="tool-title">${tool.name}</div>
      <div class="tool-desc">${tool.description}</div>
      <span class="badge ${tool.difficulty}">
        ${tool.difficulty.toUpperCase()}
      </span>
    `;

    // Click → tool detail page
    card.addEventListener("click", () => {
      window.location.href = `tool-detail.html?id=${tool.id}`;
    });

    grid.appendChild(card);
  });
}

// Live search
searchInput.addEventListener("input", () => {
  const value = searchInput.value.toLowerCase();

  const filtered = tools.filter(tool =>
    tool.name.toLowerCase().includes(value) ||
    tool.category.toLowerCase().includes(value)
  );

  renderTools(filtered);
});

// Initial render
renderTools(tools);
