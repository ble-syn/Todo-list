const input = document.querySelector('input');
const button = document.querySelector('button');


button.addEventListener('click', (event) => {
    event.preventDefault();
    const value = input.value;
    console.log(value);
});