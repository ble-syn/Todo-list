const todo = document.querySelector('input');
const button = document.querySelector('button');
const list = document.querySelector('ul');


button.addEventListener('click', (event) => {
    event.preventDefault();
    const value = todo.value;
    console.log("click click");
});
console.log(value);