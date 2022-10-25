const todo = document.querySelector("input");
const button = document.querySelector("button");
let todoList = document.querySelector("#list");

let todoArray = [];

function render() {
    if (todoArray.length > 1) {
    let items;
    const getLocalStorage = JSON.parse(localStorage.getItem("todos"));
    console.log(getLocalStorage);
    getLocalStorage.forEach((element) => {
    items += `
            <li style="display: flex; justify-content: space-between; width: 200px;">
                <span>${element}</span>
                
            </li>
  `;
  });
  todoList.innerHTML = items;
  console.log(todoList)
}
}

function delFunc(index) {
  todoArray.splice(index, 1);
  render();
}

button.addEventListener("click", () => {
  const value = todo.value;
  if (value === "") {
    return;
  }
  todoArray.push(value);
  localStorage.setItem("todos", JSON.stringify(todoArray));
  render();
  todo.value = "";
  
});
// render()

// localStorage.setItem("lastname", "Smith");
// localStorage.getItem("lastname");
