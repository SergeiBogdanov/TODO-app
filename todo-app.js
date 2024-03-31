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

    // create element of list
    function createTodoItem(name) {
        let item = document.createElement('li');
        // buttons should be in an element, that makes their beautiful and shows in one group
        let buttonGroup = document.createElement('div');
        let doneButton = document.createElement('button');
        let deleteButton = document.createElement('button'); 

        // set styles for elements
        item.classList.add('list-group-item', 'd-flex', 'justify-content-between', 'align-items-center');
        item.textContent = name;
        
        buttonGroup.classList.add('btn-group', 'btn-group-sm');
        doneButton.classList.add('btn', 'btn-success');
        doneButton.textContent = 'Done';
        deleteButton.classList.add('btn', 'btn-danger');
        deleteButton.textContent = 'Delete';

        // put buttons in separate element
        buttonGroup.append(doneButton);
        buttonGroup.append(deleteButton);
        item.append(buttonGroup);

        return {
            item,
            doneButton,
            deleteButton,
        };

    }

    function createTodoApp(container, title = 'Todo list', initialTodos = [] ) {
        let todoAppTitle = createAppTitle(title);
        let todoItemForm = createTodoItemForm();
        let todoList = createTodoList();
        
        container.append(todoAppTitle);
        container.append(todoItemForm.form);
        container.append(todoList);

        if (initialTodos && initialTodos.length > 0) {
            initialTodos.forEach(todo => {
                let todoItem = createTodoItem(todo.name);
                if (todo.done) {
                    todoItem.item.classList.add('list-group-item-success');
                }
                todoList.append(todoItem.item);
            });
        }
        
        todoItemForm.form.addEventListener('submit', function(e) {
            // cancel refresh of browser
            e.preventDefault();
            
            // if nothing to add
            if (!todoItemForm.input.value) {
                return;
            }

            let todo = { name: todoItemForm.input.value, done: false };
            let todoItem = createTodoItem(todo.name);
            
            
            // add a handler to the buttons
            todoItem.doneButton.addEventListener('click', function() {
                todoItem.item.classList.toggle('list-group-item-success');
            });

            todoItem.deleteButton.addEventListener('click', function() {
                if (confirm('Are you sure?')) {
                    todoItem.item.remove();
                }
            });

            // create and add new task from field
            todoList.append(todoItem.item);
            // clear value in the field
            todoItemForm.input.value = '';

            todoItemForm.button.disabled = true; // Making the button unavailable after submitting the form
        });

        todoItemForm.input.addEventListener('input', function() {
            todoItemForm.button.disabled = todoItemForm.input.value === ''; // Enable/disable the button depending on the contents of the field
        });
    
        todoItemForm.input.dispatchEvent(new Event('input')); // Call the input event when the page loads
    }

    window.createTodoApp = createTodoApp;
})();


