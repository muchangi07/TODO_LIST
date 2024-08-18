const submitButton = document.getElementById('submit');
const taskInput = document.getElementById('task');
const tasksList = document.getElementById('tasks');

submitButton.disabled = true;

taskInput.addEventListener('input', () => {
    submitButton.disabled = taskInput.value.trim() === "";
});

document.querySelector('form').addEventListener('submit', (event) => {
    event.preventDefault();

    const newTask = taskInput.value.trim();
    if (newTask === "") return;

    const listItem = document.createElement('li');
    listItem.textContent = newTask;

    tasksList.appendChild(listItem);

    taskInput.value = "";
    submitButton.disabled = true;
});
