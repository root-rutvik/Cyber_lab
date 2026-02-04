function checkAchievements() {
  // First tool viewed
  if (AppState.toolsViewed.length >= 1) {
    unlockAchievement("First Tool Used");
  }

  // Tool explorer
  if (AppState.toolsViewed.length >= 5) {
    unlockAchievement("Tool Explorer");
  }

  // First lab
  if (AppState.labsCompleted.length >= 1) {
    unlockAchievement("First Lab Completed");
  }

  // Lab grinder
  if (AppState.labsCompleted.length >= 3) {
    unlockAchievement("Lab Grinder");
  }

  // XP based
  if (AppState.user.xp >= 100) {
    unlockAchievement("Rising Hacker");
  }

  if (AppState.user.xp >= 300) {
    unlockAchievement("Cyber Warrior");
  }
}

// Run on load
checkAchievements();
