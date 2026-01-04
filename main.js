const input = document.getElementById('input');
const btn = document.getElementById('addBtn');
const list = document.getElementById('todoList');

function addtask(task) {
    const li = document.createElement('li');
    if (input.value === '') return;
    li.innerHTML= `<span>${task}</span> <button class="deleteBtn">Delete</button>`;

    const deleteBtn = li.querySelector('.deleteBtn');
    deleteBtn.addEventListener('click', () => {
        list.removeChild(li);
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