const todo = document.querySelector('input');
const button = document.querySelector('button');
let list = document.querySelector('ul');

todoList = [];


button.addEventListener('click', (event) => {
    event.preventDefault();
    const value = todo.value;
    console.log(value);
    todoList.push(value);
    console.log(todoList);

    const listOfItems = todoList.map((list) => {
        return document.createElement('li');
    })
});