// Function to track water intake
function trackWater() {
    const waterInput = document.getElementById("water").value;
    const waterInfo = document.getElementById("water-info");

    if (waterInput === "") {
        waterInfo.textContent = "Please enter a valid water intake.";
        return;
    }

    waterInfo.textContent = `You have tracked ${waterInput} liters of water today. Keep it up!`;
}

// Function to track mood
function trackMood() {
    const moodInput = document.getElementById("mood").value;
    const moodInfo = document.getElementById("mood-info");

    moodInfo.textContent = `Your mood today is: ${moodInput}`;
}

// Function to set fitness goal
function setGoal() {
    const stepsGoal = document.getElementById("steps").value;
    const goalInfo = document.getElementById("goal-info");

    if (stepsGoal === "") {
        goalInfo.textContent = "Please set a valid daily step goal.";
        return;
    }

    goalInfo.textContent = `Your daily step goal is set to ${stepsGoal} steps. Keep moving!`;
}
