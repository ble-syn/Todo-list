const todo = document.querySelector('input');
const button = document.querySelector('button');
let todoList = document.querySelector('#list');

todoArray = [];

function render (){
    todoList.innerHTML = ""

    const items = todoArray.map((element, index) => {
        return `<li>
            <span>${element}</span>
            <button id="${index}">delete</button>
        </li>`
    });
    
    todoList.innerHTML(items)
}

button.addEventListener('click', () => {
    const value = todo.value;
    todoArray.push(value);
    render();
    todo.value = "";
 
});

// todoList.addEventListener('click', (e)=>{
//     if(typeof e.target.id == 'number'){
        
//     }
// })