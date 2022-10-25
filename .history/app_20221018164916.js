const todoInput = document.querySelector('input');
const button = document.querySelector('button');
let todoItemsList = document.querySelector('#list');

todoArray = [];


function render (){
    todoList.innerHTML = ""
    const items = todoArray.map((element, index) => {
        return `
            <li style="display: flex; justify-content: space-between; width: 200px;">
                <span>${element}</span>
                <button id="${index}" onclick="delFunc(${index})">delete</button>
            </li>
        `
    });
    todoList.innerHTML = items
}

function delFunc(index){
    todoArray.splice(index, 1)
    render()
}
function setLoca(){
    localStorage.setItem('todo', JSON.stringify(todoArray))
}

button.addEventListener('click', () => {
    const value = todoInput.value;
    if (value == ""){
        return
    }
    todoArray.push(value);
    // setLocal(value);
    render();
    todo.value = "";
 
});