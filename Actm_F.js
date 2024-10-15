const InputTask = document.getElementById('InputTask');
const taskList = document.getElementById('taskList');

function Task(name) {
    this.name = name;
    this.dateAdded = new Date().toLocaleString();
}

const taskManager = {
    tasks: [],

    // Add a new task
    addTask(taskName) {
        const newTask = new Task(taskName);
        this.tasks.push(newTask);
        this.displayTasks();
    },

    // Edit a task
    editTask(index, newName) {
        if (newName.trim()) {
            this.tasks[index].name = newName;
            this.displayTasks();
        } else {
            alert("Task name cannot be empty!...");  
        }
    },

    // Delete a task
    deleteTask(index) {
        this.tasks.splice(index, 1);
        this.displayTasks();
    },
    
    displayTasks() {
        taskList.innerHTML = ''; // Clear existing tasks
        this.tasks.forEach((task, index) => {
            const listItem = document.createElement('li');
            listItem.innerHTML = `${task.name} - Added on: ${task.dateAdded}`;
    
            const editButton = document.createElement('button');
            editButton.textContent = 'Edit';
            editButton.addEventListener('click', () => editTask(index));
    
            const deleteButton = document.createElement('button');
            deleteButton.textContent = 'Delete';
            deleteButton.addEventListener('click', () => deleteTask(index));
    
            listItem.appendChild(editButton);
            listItem.appendChild(deleteButton);
            taskList.appendChild(listItem);
        });
    }
    

}

function addTask() {
    const taskName = InputTask.value; // Get the current input value
    if (taskName.trim()) {
        taskManager.addTask(taskName);
        InputTask.value = ''; // Clear input field after adding
    } else {
        alert("Please enter a valid task!");
        alert("Please Enter your task....");
    }
}

// Handle task editing
function editTask(index) {
    const newName = prompt("Edit task name:", taskManager.tasks[index].name);
    taskManager.editTask(index, newName);
}

// Handle task deletion
function deleteTask(index) {
    taskManager.deleteTask(index);
}

