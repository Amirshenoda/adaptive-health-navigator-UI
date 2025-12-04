// Simple adaptive behavior demo

const themeToggleBtn = document.getElementById("themeToggleBtn");
const activityLog = document.getElementById("activityLog");
const assistStatus = document.getElementById("assistStatus");
const hintText = document.getElementById("hintText");
const buttons = document.querySelectorAll(".track-btn");

let lastClickTime = null;
let delays = [];
const ASSIST_THRESHOLD_MS = 5000; // if user often waits > 5s, enable assist mode

// Load saved theme
const savedTheme = localStorage.getItem("ahn_theme");
if (savedTheme === "dark") {
  document.body.classList.add("dark");
}

// Theme toggle
themeToggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  const mode = document.body.classList.contains("dark") ? "dark" : "light";
  localStorage.setItem("ahn_theme", mode);
  logActivity(`User toggled theme: ${mode}`);
});

// Track user interactions on main buttons
buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const now = Date.now();
    if (lastClickTime !== null) {
      const delay = now - lastClickTime;
      delays.push(delay);
      maybeAdaptUI();
    }
    lastClickTime = now;

    const action = btn.dataset.action;
    logActivity(`Action triggered: ${action}`);
  });
});

// Log interaction in the UI
function logActivity(message) {
  const li = document.createElement("li");
  const timestamp = new Date().toLocaleTimeString();
  li.textContent = `[${timestamp}] ${message}`;
  activityLog.prepend(li);
}

// Decide whether to enable assisted mode based on interaction delay
function maybeAdaptUI() {
  if (delays.length < 3) return; // wait for a few interactions

  const avgDelay = delays.reduce((a, b) => a + b, 0) / delays.length;

  if (avgDelay > ASSIST_THRESHOLD_MS && !document.body.classList.contains("assisted")) {
    document.body.classList.add("assisted");
    assistStatus.textContent = "Mode: Assisted (Adaptive UI Enabled)";
    hintText.textContent =
      "We noticed longer pauses. Controls have been enlarged and simplified to assist you.";
    logActivity("Adaptive behavior triggered: Assisted mode enabled.");
  }
}
