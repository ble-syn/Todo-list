const todo = document.querySelector('input');
const button = document.querySelector('button');
let todoList = document.querySelector('#list');

todoArray = [];

button.addEventListener('click', () => {
    const value = todo.value;
    if (value == ""){
        return
    }
    todoArray.push(value);
    // setLocal(value);
    render();
    todo.value = "";
 
});

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