const input = document.getElementById('input');
const btn = document.getElementById('addBtn');
const list = document.getElementById('todoList');

function addtask(task) {


    const li = document.createElement('li');
    if (input.value === '') return;
    li.className = "flex items-center justify-between bg-white text-black p-4 mb-2 rounded-lg shadow text-xl";
    li.innerHTML = `
  <span class="task-text">${task}</span>
  <div class="flex items-center gap-3">
    <button class="deleteBtn bg-red-600 text-white p-2 rounded-lg">Delete</button>
    <input type="checkbox" class="chek">
    <button class="editTask cursor-move bg-yellow-500 text-black p-2 rounded-lg">Edit</button>
  </div>
    `;
    const checkbox = li.querySelector('.chek');
    const taskText = li.querySelector('.task-text');
    checkbox.addEventListener('change', () => {
        if (checkbox.checked) {
            taskText.classList.add('line-through', 'text-gray-500');
            li.classList.add('bg-gray-400');
            li.classList.remove('bg-white');
        } else {
            taskText.classList.remove('line-through', 'text-gray-500');
            li.classList.remove('bg-gray-400');
            li.classList.add('bg-white');
        }
    });

    const deleteBtn = li.querySelector('.deleteBtn');
    deleteBtn.addEventListener('click', () => {
        list.removeChild(li);
    });

    const editTask = li.querySelector('.editTask');
    editTask.addEventListener('click', () => {
        const newTask = prompt('Edit your task:', taskText.textContent);    
        if (newTask !== null && newTask.trim() !== '') {
            taskText.textContent = newTask;
        }
    });

    list.appendChild(li);
    input.value = '';
}  


btn.addEventListener('click', () => {
    addtask(input.value);
});

input.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        addtask(input.value);
    }
}); 