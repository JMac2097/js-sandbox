//  Define ui variables

const form = document.querySelector("#task-form");
const taskList = document.querySelector(".collection");
const cleatBtn = document.querySelector(".clear-tasks");
const filter = document.querySelector("#filter");
const taskInput = document.querySelector("#task");

// Load all event listeners
loadEventListeners();

function loadEventListeners() {
    //add Task event
    form.addEventListener("submit", addTask);
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