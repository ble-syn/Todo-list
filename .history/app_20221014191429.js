const todo = document.querySelector('input');
const button = document.querySelector('button');
let list = document.querySelector('ul');

todoList = [];


button.addEventListener('click', (event) => {
    event.preventDefault();
    const value = todo.value;
    console.log(value);
    TodoList.push(value);
    console.log(TodoList);
    const listOfItems = todoList.map((list) => {
        return `<li>${list}</li>`
    })
});