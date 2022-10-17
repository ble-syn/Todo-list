const todo = document.querySelector('input');
const button = document.querySelector('button');
let todoList = document.querySelector('ul');

todoArray = [];

function render (){
    todoList.innerHTML = ""

    todoArray.forEach(element => {
        let li = document.createElement('li');
        li.innerText = element
        todoList.appendChild(li)
    });
}

button.addEventListener('click', (event) => {
    const value = todo.value;
   
    todoArray.push(value);

    render();

    todo.value = "";
 
});

