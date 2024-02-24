const tasksForm = document.getElementById('tasks__form');
const taskInput = document.getElementById('task__input');
const tasksList = document.getElementById('tasks__list');

function createTask(title) {
	const taskElement = document.createElement('div');
	taskElement.classList.add('task');

	const titleElement = document.createElement('div');
	titleElement.classList.add('task__title');
	titleElement.textContent = title;

	const removeBtn = document.createElement('a');
	removeBtn.classList.add('task__remove');
	removeBtn.innerHTML = '&times;';
	removeBtn.addEventListener('click', () => {
		taskElement.remove(); 
	});

	taskElement.appendChild(titleElement);
	taskElement.appendChild(removeBtn);

	return taskElement;
}

function addTask(e) {
	e.preventDefault(); 

	const title = taskInput.value.trim();
	if (title !== '') {
		const task = createTask(title);
		tasksList.appendChild(task);
		document.getElementById('tasks__form').reset();
	}
}

tasksForm.addEventListener('submit', addTask);