const todo = document.querySelector('input');
const button = document.querySelector('button');
let todoList = document.querySelector('#list');

todoArray = [];
todoArray.filter((item) => item)


function render (){
    todoList.innerHTML = ""
    const items = todoArray.map((element, index) => {
        return `
            <li class="li">
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

// function setLocal(index){
// check length of array 
// if empty set item in storage

// if not empty, read items from storage, apend item to the items, set array to items, store new
//     console.log('hehehe', index)
// }

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