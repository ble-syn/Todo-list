const todo = document.querySelector("input");
const button = document.querySelector("button");
let todoList = document.querySelector("#list");

let todoArray = [];

function render() {
  let items;
  const getLocalStorage = JSON.parse(localStorage.getItem("todos"));

  getLocalStorage.forEach((element) => {
    items = `
            <li style="display: flex; justify-content: space-between; width: 200px;">
                <span>${element}</span>
                <button onclick="delFunc()">delete</button>
                
            </li>
        `;
  });
  todoList.insertAdjacentHTML("beforeend", items);
  console.log(typeof todoList)
}

function delFunc() {
    const del = localStorage.removeItem("todos");
    del.forEach((element) => {
        items = `
            element.remove();
        `;
    });
    render();
}

button.addEventListener("click", () => {
  const value = todo.value;
  if (value === "") {
    return;
  }
  todoArray.push(value);
//   const todo = {
//     id: Date.now(),
//     name: item,
//     completed: false
//   };
  localStorage.setItem("todos", JSON.stringify(todoArray));
  render();
  todo.value = "";
  
});
// render()

// localStorage.setItem("lastname", "Smith");
// localStorage.getItem("lastname");
