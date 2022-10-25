const todo = document.querySelector("input");
const button = document.querySelector("button");
let todoList = document.querySelector("#list");

let todoArray = [];

function render() {
  let items;
  const getLocalStorage = JSON.parse(localStorage.getItem("todos"));
  let new_div = '';
  // if (getLocalStorage != null) {
    getLocalStorage.forEach((element) => {
      new_div += `
              <li class="li" style="display: flex; justify-content: space-between; width: 200px;">
                  <span>${element}</span>
                  <button id="del" onclick="delFunc(e)">delete</button>
                  
              </li>
          `;
    });
  // }

  todoList.innerHTML = new_div;
  
}

function delFunc(e) {
  console.log(e)
  const li = document.querySelector(".li");
  
  let index = todoArray.indexOf(li);
  todoArray.splice(index, 1);//remove it
  
  localStorage.setItem('todos', JSON.stringify(todoArray));//set again
  render()
   
}

button.addEventListener("click", () => {
  const value = todo.value;
  if (value === "") {
    return;
  }
  todoArray.push(value);

  let items = localStorage.getItem("todos");
  if (items === null) {
    localStorage.setItem("todos", JSON.stringify(todoArray));
  }else{
    let getLocalStorage = JSON.parse(localStorage.getItem("todos"));
    getLocalStorage.push(value);
    localStorage.setItem("todos", JSON.stringify(getLocalStorage));
  }

  
  render();
  todo.value = "";
  
});
