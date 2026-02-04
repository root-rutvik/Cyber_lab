/* =========================
   GLOBAL APP STATE
========================= */

const DEFAULT_STATE = {
  user: {
    username: "guest",
    xp: 0,
    rank: "Beginner"
  },
  toolsViewed: [],
  labsCompleted: [],
  achievements: [],
  activityLog: []
};

/* =========================
   LOAD / SAVE
========================= */

function loadState() {
  const saved = localStorage.getItem("cyberLabState");
  return saved ? JSON.parse(saved) : DEFAULT_STATE;
}

function saveState(state) {
  localStorage.setItem("cyberLabState", JSON.stringify(state));
}

const AppState = loadState();

/* =========================
   ACTIVITY LOG
========================= */

function logActivity(text) {
  const time = new Date().toLocaleTimeString();
  AppState.activityLog.unshift(`[${time}] ${text}`);

  // keep only last 10 entries
  AppState.activityLog = AppState.activityLog.slice(0, 10);
  saveState(AppState);
}

/* =========================
   XP & RANK
========================= */

function addXP(amount) {
  AppState.user.xp += amount;

  if (AppState.user.xp >= 300) {
    AppState.user.rank = "Advanced";
  } else if (AppState.user.xp >= 100) {
    AppState.user.rank = "Intermediate";
  } else {
    AppState.user.rank = "Beginner";
  }

  saveState(AppState);
}

/* =========================
   TOOLS
========================= */

function markToolViewed(toolName) {
  if (!AppState.toolsViewed.includes(toolName)) {
    AppState.toolsViewed.push(toolName);
    addXP(5);
    logActivity(`Viewed tool: ${toolName}`);
  }
}

/* =========================
   LABS
========================= */

function completeLab(labId, labName = "Unknown Lab") {
  if (!AppState.labsCompleted.includes(labId)) {
    AppState.labsCompleted.push(labId);
    addXP(50);
    logActivity(`Completed lab: ${labName}`);
  }
}

/* =========================
   ACHIEVEMENTS
========================= */

function unlockAchievement(name) {
  if (!AppState.achievements.includes(name)) {
    AppState.achievements.push(name);
    logActivity(`Achievement unlocked: ${name}`);
    saveState(AppState);
  }
}

/* =========================
   DEBUG (OPTIONAL)
========================= */

console.log("Cyber Lab State Loaded:", AppState);
