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
                <button id="${index}">delete</button>
            </li>
        `
    });
    
    todoList.innerHTML = items
}

button.addEventListener('click', () => {
    const value = todo.value;
    if (value == ""){
        return
    }
    todoArray.push(value);
    render();
    todo.value = "";
 
});

todoList.addEventListener('click', (e)=>{
    console.log(typeof e.target.id)

    if(!isNaN(Number(e.target.id))){
        console.log("yeah...")
    }
})