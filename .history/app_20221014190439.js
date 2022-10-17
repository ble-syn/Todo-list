const todo = document.querySelector('input');
const button = document.querySelector('button');
const list = document.querySelector('ul');

list = []


button.addEventListener('click', (event) => {
    event.preventDefault();
    const value = todo.value;
    console.log(value);
});