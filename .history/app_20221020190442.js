const todo = document.querySelector("input");
const button = document.querySelector("button");
let todoList = document.querySelector("#list");

let todoArray = [];

function render() {
  let items;
  const getLocalStorage = JSON.parse(localStorage.getItem("todos"));

  getLocalStorage.forEach((element) => {
    items = `
            <li class="li" style="display: flex; justify-content: space-between; width: 200px;">
                <span>${element}</span>
                <button id="del" onclick="delFunc()">delete</button>
                
            </li>
        `;
  });
  todoList.insertAdjacentHTML("beforeend", items);
  console.log(typeof todoList)
}

function delFunc(e) {
    const del = document.querySelector(".li");
    items = del.remove(items);
    todoList.innerHTML = items;
    console.log(del)

    localStorage.removeItem("todos.index");
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
