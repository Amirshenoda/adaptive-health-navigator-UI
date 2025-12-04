# Adaptive Health Navigator – AI-Based Adaptive User Interface (Hypothetical Project)

This repository contains the source code and documentation for **Adaptive Health Navigator**, a *conceptual* AI-based adaptive user interface designed as part of an assignment for the **AI-Based Adaptive Human–Computer Interaction** course at the University of the Cumberlands.

The goal of this project is to demonstrate how an interface can **adapt at runtime** based on user behavior, preferences, and accessibility needs. While the system is intentionally lightweight and partially hypothetical, it illustrates the core ideas of:

- Adaptive User Interfaces (AUIs)
- Intelligent User Interfaces (IUIs)
- AI-based adaptive human–computer interaction

> 📌 **Note:** This project focuses on *demonstrating adaptation behavior* and structuring an HCI/AI project for academic purposes. It is not intended as a production healthcare application.

---

## Features

- 🧠 **Behavior-based adaptation**
  - Adjusts font size and layout based on user interaction speed.
  - Highlights key controls when users appear to hesitate.

- 🌙 **Theme adaptation**
  - Toggles between light and dark mode.
  - Can remember the user’s preferred theme using `localStorage`.

- ♿ **Accessibility-aware adjustments (conceptual)**
  - Enlarged buttons and higher contrast mode for users who show signs of difficulty (e.g., very slow or repeated clicks).
  - Simple layout to reduce cognitive load.

- 📊 **Interaction logging (conceptual)**
  - Tracks time between interactions and basic click patterns.
  - Uses this “signal” to decide when to adapt the UI.

---

## Project Structure

```text
adaptive-health-navigator-UI/
├─ README.md                  # Project overview and instructions
├─ docs/
│  └─ Adaptive_Health_Navigator_Report.pdf   # APA report (optional)
├─ src/
│  ├─ index.html              # Main UI page
│  ├─ styles.css              # Base and adaptive styles
│  └─ script.js               # Interaction logic + adaptation rules
├─ assets/
│  └─ ui-mockups.png          # Optional diagrams or UI screenshots
└─ models/
   └─ prefs-example.json      # Placeholder for stored preferences / AI model
