function addTask() {
    let taskInput = document.getElementById("taskInput");
    let taskList = document.getElementById("taskList");

    if (taskInput.value.trim() === "") {
        alert("Please enter a task!");
        return;
    }

    let li = document.createElement("li");
    li.innerHTML = '<input type="checkbox" onclick="completeTask(this)">' +
                    taskInput.value +
                    '<button onclick="removeTask(this)">Remove</button>';
    taskList.appendChild(li);

    taskInput.value = "";
}

function removeTask(button) {
    let li = button.parentNode;
    let taskList = document.getElementById("taskList");
    taskList.removeChild(li);
}

function completeTask(checkbox) {
    let li = checkbox.parentNode;
    li.classList.toggle("completed");
}
