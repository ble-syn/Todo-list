const todo = document.querySelector('input');
const button = document.querySelector('button');
let todoList = document.querySelector('ul');

todoArray = [];

function render (){
    todoList.innerHTML = ""

    todoArray.forEach((element, index) => {
        let li = document.createElement('li');
        let span = document.createElement('span')
        let but = document.createElement('button')

        span.value = element

        li.appendChild(span)
        li.appendChild(but)

        todoList.appendChild(li)
        
        // `<li>
        //     <span>${element}</span>
        //     <button onclick="">delete</button>
        // </li>`
    });
}

button.addEventListener('click', () => {
    const value = todo.value;
   
    todoArray.push(value);

    render();

    todo.value = "";
 
});

