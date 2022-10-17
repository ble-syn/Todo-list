const todo = document.querySelector('input');
const button = document.querySelector('button');
let list = document.querySelector('ul');

list = [];


button.addEventListener('click', (event) => {
    event.preventDefault();
    const value = todo.value;
    console.log(value);
    list.push(value);
    console.log(list);
    list.innerHTML = list;
});