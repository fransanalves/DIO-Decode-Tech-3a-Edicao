let taskInput = document.getElementById("new-task"); 
let addButton = document.getElementById("button-add");
let tasksList = document.getElementById("tasks-list");

function createTasksList(tasks) {
    let listItem = document.createElement("span");
    let checkBox = document.createElement("input");
    let label = document.createElement("label");

    checkBox.type = "checkBox";
    label.innerText = tasks;

    listItem.appendChild(checkBox);
    listItem.appendChild(label);

    return listItem;
}

function addTask() {
    let listItem = createTasksList(taskInput.value);
    tasksList.appendChild(listItem);
    taskInput.value = "";
}

addButton.addEventListener("click", addTask);