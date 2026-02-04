document.getElementById("username").textContent = AppState.user.username;
document.getElementById("xp").textContent = AppState.user.xp;
document.getElementById("rank").textContent = AppState.user.rank;
document.getElementById("toolsCount").textContent = AppState.toolsViewed.length;
document.getElementById("labsCount").textContent = AppState.labsCompleted.length;

const list = document.getElementById("achievementsList");

if (AppState.achievements.length === 0) {
  list.innerHTML = "<li>No achievements yet</li>";
} else {
  list.innerHTML = "";
  AppState.achievements.forEach(a => {
    const li = document.createElement("li");
    li.textContent = "🏆 " + a;
    list.appendChild(li);
  });
}
