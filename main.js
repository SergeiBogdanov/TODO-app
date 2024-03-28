(function() {
    // create and return title of app
    function createAppTitle(title) {
        let appTitle = document.createElement('h2');
        appTitle.innerHTML = title;
        return appTitle;
    }

    // create and return form for creation tasks
    function createTodoItemForm() {
        let form = document.createElement('form');
        let input = document.createElement('input');
        let buttonWrapper = document.createElement('div');
        let button = document.createElement('button');

        form.classList.add('input-group', 'mb-3');
        input.classList.add('form-control');
        input.placeholder = 'Enter a name of new task';
        buttonWrapper.classList.add('input-group-append');
        button.classList.add('btn', 'btn-primary');
        button.textContent = 'Add task';

        buttonWrapper.append(button);
        form.append(input);
        form.append(buttonWrapper);

        return {
            form,
            input,
            button,
        };

    }

    // create and return list of elements
    function createTodoList() {
        let list = document.createElement('ul');
        list.classList.add('list-group');
        return list;
        
    }

    document.addEventListener('DOMContentLoaded', function() {
        let container = document.getElementById('todo-app');

        let todoAppTitle = createAppTitle('Todo list');
        let todoItemForm = createTodoItemForm();
        let todoList = createTodoList();

        container.append(todoAppTitle);
        container.append(todoItemForm.form);
        container.append(todoList);
    });
})();
