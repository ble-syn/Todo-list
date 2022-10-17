const todo = document.querySelector('input');
const button = document.querySelector('button');
let list = document.querySelector('ul');
let li  = document.getElementsByTagName('li');

todoList = [];

list.innerHTML= "bill";

button.addEventListener('click', (event) => {
    event.preventDefault();
    const value = todo.value;
   
    todoList.push(value);
    console.log(todoList);
    return list.innerHTML = todoList;

    const listOfItems = todoList.map((list) => {
   
        li.textContent = todoList;
    })
});