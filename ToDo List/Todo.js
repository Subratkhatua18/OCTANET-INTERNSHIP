document.addEventListener('DOMContentLoaded', (event) => {
    document.querySelector('form').addEventListener('submit', function (e) {
        e.preventDefault();
        addItem();
    });
});

function addItem() {
    let taskInput = document.getElementById('box');
    let task = taskInput.value.trim();

    if (task === "") {
        alert("Please enter a task");
        return;
    }

    let li = document.createElement('li');
    li.textContent = task;

    let deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.onclick = function () {
        li.remove();
    };

    li.appendChild(deleteButton);
    document.querySelector('#listItem ul').appendChild(li);
    taskInput.value = "";
}





