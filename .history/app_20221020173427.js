const todoInput = document.querySelector("input");
const button = document.querySelector("button");
let todoList = document.querySelector("#list");

let todoArray = [];

function render(todoArray) {
  let items;
  const getLocalStorage = JSON.parse(localStorage.getItem("todos"));

  getLocalStorage.forEach((element) => {
    items += `
            <li style="display: flex; justify-content: space-between; width: 200px;">
                <span>${element.name}</span>
                <button onclick="delFunc()">delete</button>
                <button class="delete-button">X</button>
                
            </li>
        `;
  });
  todoList.innerHTML = items;
  console.log(typeof todoList)
}

function delFunc() {
    localStorage.removeItem("todos");
  render();
}

button.addEventListener("click", addTodo(todoInput.value));

function addTodo(element) {

  if (element === "") {
    return;
  }
  const todo = {
    id: Date.now(),
    name: element
  };
  todoArray.push(todo);

  localStorage.setItem("todos", JSON.stringify(todoArray));
  render(todoArray);
  todoInput.value = "";
};