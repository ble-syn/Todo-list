const todo = document.querySelector("input");
const button = document.querySelector("button");
let todoList = document.querySelector("#list");

document.onload = render()
function render() {

  const getLocalStorage = JSON.parse(localStorage.getItem("todos"));
  let new_div = '';
  if (getLocalStorage != null) {
    getLocalStorage.forEach((element,index) => {
      new_div += `
              <li class="li" style="display: flex; justify-content: space-between; width: 200px;">
                  <span>${element}</span>
                  <button id="del" onclick="delFunc(${index})">delete</button>
              </li>
          `;
    });
  }

  todoList.innerHTML = new_div;
  
}

function delFunc(index) {
  
  let getLocalStorage = JSON.parse(localStorage.getItem("todos"));
  getLocalStorage.splice(index, 1);//remove it

  localStorage.setItem("todos", JSON.stringify(getLocalStorage));
  
  render()
   
}

button.addEventListener("click", () => {
  const value = todo.value;
  if (value === "") {
    return;
  }

  let items = localStorage.getItem("todos");
  if (items === null) {
    localStorage.setItem("todos", JSON.stringify([value]));
  }else{
    let getLocalStorage = JSON.parse(localStorage.getItem("todos"));
    getLocalStorage.push(value);
    localStorage.setItem("todos", JSON.stringify(getLocalStorage));
  }

  
  render();
  todo.value = "";
  
});
