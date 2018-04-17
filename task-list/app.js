//  Define ui variables

const form = document.querySelector("#task-form"),
      taskList = document.querySelector(".collection"),
      clearBtn = document.querySelector(".clear-tasks"),
      filter = document.querySelector("#filter"),
      taskInput = document.querySelector("#task");

// Load all event listeners
loadEventListeners();

function loadEventListeners() {
    // DOM load event
    document.addEventListener('DOMContentLoaded', getTasks);
    //add Task event
    form.addEventListener("submit", addTask);
    //remove task event
    taskList.addEventListener("click", removeTask);
    //clear task event
    clearBtn.addEventListener("click", clearTasks);
    // Filter tasks event
    filter.addEventListener("keyup", filterTasks);
};

// Get tasks from LS
function getTasks() {
    let tasks;
    if (localStorage.getItem('tasks') === null) {
        tasks = [];
    } else {
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }

    tasks.forEach(function(task) {
        // Create li element
        const li = document.createElement('li');
        // Add class
        li.className = 'collection-item';
        // Create text node and apend to li
        li.appendChild(document.createTextNode(task));
        // Create new link element
        const link = document.createElement('a');
        // Add a class
        link.className = 'delete-item secondary-content';
        // Add icon html
        link.innerHTML = '<i class = "fa fa-remove"></i>';
        //append the link to the li
        li.appendChild(link);
        // Append li to the ul
        taskList.appendChild(li);
    });
};

// Add Task
function addTask(e) {
    if(task.value =='') {
        alert("Add a task");
    }

    // Create li element
    const li = document.createElement('li');
    // Add class
    li.className = 'collection-item';
    // Create text node and apend to li
    li.appendChild(document.createTextNode(taskInput.value));
    // Create new link element
    const link = document.createElement('a');
    // Add a class
    link.className = 'delete-item secondary-content';
    // Add icon html
    link.innerHTML = '<i class = "fa fa-remove"></i>';
    //append the link to the li
    li.appendChild(link);
    // Append li to the ul
    taskList.appendChild(li);

    // Store in local storage
    storeTaskInLocalStorage(taskInput.value);

    // Clear the input
    taskInput.value = '';

    e.preventDefault();
};
    
// Store Task 
function storeTaskInLocalStorage(task) {
    let tasks;
    if (localStorage.getItem('tasks') === null) {
        tasks = [];
    } else {
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }
    tasks.push(task);

    localStorage.setItem('tasks', JSON.stringify(tasks));
};

// Remove Task
function removeTask(e) {
    let taskTarget = e.target.parentElement.parentElement;

    if(e.target.parentElement.classList.contains('delete-item')) {
        if (confirm('Are you sure?')) {
            taskTarget.remove();

            //remove task from ls
            removeTaskFromLocalStorage(taskTarget);
        }
    }
};

// Remove from LS
function removeTaskFromLocalStorage(taskItem) {
    let tasks;
    if (localStorage.getItem('tasks') === null) {
        tasks = [];
    } else {
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }

    tasks.forEach( function(task, index) {
        if(taskItem.textContent === task) {
            tasks.splice(index, 1);
        }
    });

    localStorage.setItem('tasks', JSON.stringify(tasks));
};

// Clear all tasks
function clearTasks() {
    if (confirm('Are you sure you wish to clear all tasks?')) {
        while(taskList.firstChild) {
            taskList.removeChild(taskList.firstChild);
        }
    }

    clearTasksFromLocalStorage();
};

// Clear tasks from LS
function clearTasksFromLocalStorage() {
    localStorage.clear();
};

// Filter Tasks
function filterTasks(e) {
    const text = e.target.value.toLowerCase();

    document.querySelectorAll('.collection-item').forEach(
        function(task) {
        const item = task.firstChild.textContent;
            if(item.toLowerCase().indexOf(text) != -1) {
                task.style.display = 'block';
            } else {
                task.style.display = 'none';
            };
    });
};