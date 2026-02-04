const params = new URLSearchParams(window.location.search);
const labId = parseInt(params.get("id"));

const lab = labs.find(l => l.id === labId);

const nameEl = document.getElementById("labName");
const descEl = document.getElementById("labDesc");
const metaEl = document.getElementById("labMeta");
const btn = document.getElementById("completeLabBtn");

if (!lab) {
  nameEl.textContent = "Lab not found";
} else {
  nameEl.textContent = lab.name;
  descEl.textContent = lab.description;

  metaEl.innerHTML = `
    <span class="badge ${lab.difficulty}">
      ${lab.difficulty.toUpperCase()}
    </span>
  `;

  btn.onclick = () => {
    localStorage.setItem(`lab-${lab.id}`, "completed");
    alert("Lab marked as completed!");
  };
}
