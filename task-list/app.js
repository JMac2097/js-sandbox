//  Define ui variables

const form = document.querySelector("#task-form");
const taskList = document.querySelector(".collection");
const clearBtn = document.querySelector(".clear-tasks");
const filter = document.querySelector("#filter");
const taskInput = document.querySelector("#task");

// Load all event listeners
loadEventListeners();

function loadEventListeners() {
    //add Task event
    form.addEventListener("submit", addTask);
    //remove task event
    taskList.addEventListener("click", removeTask);
    //clear task event
    clearBtn.addEventListener("click", clearTasks);
    // Filter tasks event
    filter.addEventListener("keyup", filterTasks);
}

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

    // Clear the input
    taskInput.value = '';

    e.preventDefault();
}

//remove task
function removeTask(e) {
    if(e.target.parentElement.classList.contains('delete-item')) {
        if (confirm('Are you sure?')) {
            e.target.parentElement.parentElement.remove();
        }
    }
}

//clear all tasks
function clearTasks() {
    if (confirm('Are you sure you wish to clear all tasks?')) {
        while(taskList.firstChild) {
            taskList.removeChild(taskList.firstChild);
        }
    }
}

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

}