function getXP() {
  return parseInt(localStorage.getItem("xp")) || 0;
}

function addXP(amount) {
  const xp = getXP() + amount;
  localStorage.setItem("xp", xp);
}

function getRank() {
  const xp = getXP();
  if (xp < 100) return "Beginner";
  if (xp < 300) return "Intermediate";
  return "Advanced";
}
