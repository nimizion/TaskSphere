TaskSphere: SDLC Implementation Project
​1. Project Overview
​TaskSphere is a simple, efficient Task Management Application created to demonstrate the full Software Development Life Cycle (SDLC). This project allows users to add, track, and delete tasks in real-time.
​2. SDLC Documentation
​Phase 1: Planning & Requirements
​Objective: Build a functional To-Do list with a clean UI.
​Requirements: Must include task input, a delete feature, and consistent naming conventions across documentation and code.
​Phase 2: Design & Nomenclature
​To ensure the implementation matches the design, the following Nomenclature was established:
| Component | Design Name | Code Implementation |
| :--- | :--- | :--- |
| Main Container | Task Wrapper | .task-container |
| Input Logic | Add Task | function addTask() |
| List Entry | Task Item | .task-item |
| Input Field | Task Input | #taskInput |
Phase 3: Implementation
​The project was built using a standard web stack:
​HTML5: Structural layout and element IDs.
​CSS3: Styling for the task-container and responsive design.
​JavaScript: Logical implementation of the addTask() function and DOM manipulation.
​Phase 4: Testing
​Functional Testing: Verified that empty tasks cannot be added.
​UI Testing: Ensured the "Delete" button removes the correct task item.
​Phase 5: Deployment
​The project is deployed using GitHub Pages, providing a live environment for user interaction.
