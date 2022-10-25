const todoInput = document.querySelector('input');
const button = document.querySelector('button');
let todoItemsList = document.querySelector('#list');

todoArray = [];


function render (){
    todoItemsList.innerHTML = ""
    const items = todoArray.map((element, index) => {
        return `
            <li style="display: flex; justify-content: space-between; width: 200px;">
                <span>${element}</span>
                <button id="${index}" onclick="delFunc(${index})">delete</button>
            </li>
        `
    });
    todoItemsList.innerHTML = items
}

function delFunc(index){
    todoArray.splice(index, 1)
    render()
}

function setLocal(todoArray){
    localStorage.setItem('todo',todoArray)
    render(todoArray);
}
function getLocalStorage() {
    const result = localStorage.getItem('todos');
    
    if (result) {
      todoArray = result
      render(todoArray);
    }
  }
getLocalStorage()

button.addEventListener('click', () => {
    const value = todoInput.value;
    if (value == ""){
        return
    }
    todoArray.push(value);
    setLocal(todoArray);
    todoInput.value = "";
 
});