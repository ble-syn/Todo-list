const todo = document.querySelector('input');
const button = document.querySelector('button');
let todoList = document.querySelector('#list');

let todoArray = [];


function render (){
   
    let items;
    todoArray.forEach((element) => {
        items +=
        `
            <li style="display: flex; justify-content: space-between; width: 200px;">
                <span>${element}</span>
                
            </li>
        `
    });
    todoList.innerHTML = items
}

function delFunc(index){
    todoArray.splice(index, 1)
    render()
}

button.addEventListener('click', () => {
    const value = todo.value;
    if (value === ""){
        return
    }
    todoArray.push(value);
    localStorage.setItem("todos", "Smith");
    
    render();
    todo.value = "";
 
});

// localStorage.setItem("lastname", "Smith");
// localStorage.getItem("lastname");