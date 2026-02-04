console.log("tool-detail.js loaded");

const params = new URLSearchParams(window.location.search);
const toolId = parseInt(params.get("id"));

const nameEl = document.getElementById("toolName");
const descEl = document.getElementById("toolDescription");
const metaEl = document.getElementById("toolMeta");
const launchBtn = document.getElementById("launchTerminalBtn");

const tool = tools.find(t => t.id === toolId);

if (!tool) {
  nameEl.textContent = "Tool Not Found";
  descEl.textContent = "Invalid tool ID.";
} else {
  nameEl.textContent = tool.name;
  descEl.textContent = tool.description;

  metaEl.innerHTML = `
    <span class="badge ${tool.difficulty}">
      ${tool.difficulty.toUpperCase()}
    </span>
    <span class="badge easy" style="margin-left:8px;">
      ${tool.category}
    </span>
  `;
}

/* LOAD TERMINAL COMPONENT FIRST */
fetch("components/terminal.html")
  .then(res => res.text())
  .then(html => {
    document.getElementById("terminalContainer").innerHTML = html;

    // ✅ INIT TERMINAL AFTER HTML EXISTS
    initTerminal();

    // ✅ NOW SAFE TO BIND BUTTON
    launchBtn.addEventListener("click", () => {
      openTerminal(tool.name);
    });
  })
  .catch(err => {
    console.error("Failed to load terminal:", err);
  });
