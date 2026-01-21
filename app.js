// Function to add a new task (Matches Design: Add Task Logic)
function addTask() {
    const input = document.getElementById('taskInput');
    const taskText = input.value.trim();
    
    if (taskText !== "") {
        const taskList = document.getElementById('taskList');
        
        // Creating the element (Matches Design: Task Item)
        const li = document.createElement('li');
        li.className = 'task-item'; 
        
        li.innerHTML = `
            <span>${taskText}</span>
            <button onclick="this.parentElement.remove()">Delete</button>
        `;
        
        taskList.appendChild(li);
        input.value = ""; // Clear the input field
    } else {
        alert("Please enter a task!");
    }
}
