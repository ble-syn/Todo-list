const todo = document.querySelector('input');
const button = document.querySelector('button');
let todoList = document.querySelector('#list');

todoArray = [];


function render (){
    todoList.innerHTML = ""
    const items = todoArray.map((element, index) => {
        return `
            <li style="display: flex; justify-content: space-between; width: 200px;">
                <span>${element}</span>
                <button id="${index}" onclick="delFuc(${index})">delete</button>
            </li>
        `
    });
    todoList.innerHTML = items
}

function delFuc(index){
    todoArray.splice(index, 1)
    render()
}

function setLocal(index){
// check length of array 
// if empty set item in storage

// if not empty, read items from storage, apend item to the items, set array to items, store new array
    console.log('hehehe', index)
}

button.addEventListener('click', () => {
    const value = todo.value;
    if (value == ""){
        return
    }
    todoArray.push(value);
    setLocal(value);
    render();
    todo.value = "";
 
});

// todoList.addEventListener('click', (e)=>{
//     let index = Number(e.target.id)
//     if(!isNaN(index) && typeof index == 'number'){
//         todoArray.splice(index, 1)
//         render()
//     }
// })