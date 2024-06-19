document.addEventListener('DOMContentLoaded', () => {
    const addTaskButton = document.getElementById('add-task-button');
    const newTaskInput = document.getElementById('new-task-input');
    const taskList = document.getElementById('task-list');

    addTaskButton.addEventListener('click', addTask);
    newTaskInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            addTask();
        }
    });

    function addTask() {
        const taskText = newTaskInput.value.trim();
        if (taskText !== '') {
            const taskItem = document.createElement('li');
            taskItem.className = 'task';

            const taskContent = document.createElement('span');
            taskContent.className = 'task-text';
            taskContent.textContent = taskText;

            const taskButtons = document.createElement('div');
            taskButtons.className = 'task-buttons';

            const editButton = document.createElement('button');
            editButton.className = 'edit';
            editButton.textContent = 'Edit';
            editButton.addEventListener('click', () => editTask(taskContent));

            const deleteButton = document.createElement('button');
            deleteButton.className = 'delete';
            deleteButton.textContent = 'Delete';
            deleteButton.addEventListener('click', () => deleteTask(taskItem));

            taskButtons.appendChild(editButton);
            taskButtons.appendChild(deleteButton);

            taskItem.appendChild(taskContent);
            taskItem.appendChild(taskButtons);

            taskList.appendChild(taskItem);
            newTaskInput.value = '';
            newTaskInput.focus();
        }
    }

    function editTask(taskContent) {
        const newTaskText = prompt('Edit task:', taskContent.textContent);
        if (newTaskText !== null && newTaskText.trim() !== '') {
            taskContent.textContent = newTaskText.trim();
        }
    }

    function deleteTask(taskItem) {
        taskList.removeChild(taskItem);
    }
});
