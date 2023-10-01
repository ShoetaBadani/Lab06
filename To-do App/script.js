document.addEventListener('DOMContentLoaded', function() {
    const todoForm = document.getElementById('todoForm');
    const todoList = document.getElementById('todoList');

    todoForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const newTodoInput = document.getElementById('newTodo');
        const todoText = newTodoInput.value;

        if (todoText.trim() !== '') {
            const li = document.createElement('li');
            li.innerHTML = `
                <span>${todoText}</span>
                <button class="complete">Complete</button>
                <button class="remove">Remove</button>
            `;
            todoList.appendChild(li);
            newTodoInput.value = '';
        }
    });

    todoList.addEventListener('click', function(event) {
        const target = event.target;

        if (target.classList.contains('complete')) {
            const todoText = target.previousElementSibling;
            todoText.classList.toggle('completed');
        }

        if (target.classList.contains('remove')) {
            const todoItem = target.parentElement;
            todoList.removeChild(todoItem);
        }
    });
});
