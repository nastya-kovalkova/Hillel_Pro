const toDoList = document.querySelector(".todo-list");
const addButton = document.querySelector(".todo-add-btn");
const inputField = document.querySelector(".todo-input");

addButton.addEventListener("click", (e) => {
  const inputText = inputField.value.trim();
  if (inputText) {
    const fragment = document.createDocumentFragment();

    const toDoItem = document.createElement("li");
    toDoItem.classList.add("todo-item");

    const toDoLabel = document.createElement("label");
    toDoLabel.classList.add("todo-label");

    const toDoCheckbox = document.createElement("input");
    toDoCheckbox.type = "checkbox";
    toDoCheckbox.classList.add("todo-box");

    const toDoFakeCheckbox = document.createElement("span");
    toDoFakeCheckbox.classList.add("todo-fakebox");

    const textNode = document.createTextNode(inputText);

    const deleteButton = document.createElement("button");
    deleteButton.type = "button";
    deleteButton.classList.add("item-button");

    const deleteIcon = document.createElement("img");
    deleteIcon.classList.add("item-icon");
    deleteIcon.src = "./images/icon-delete.png";
    deleteIcon.alt = "delete";

    deleteButton.appendChild(deleteIcon);
    toDoLabel.appendChild(toDoCheckbox);
    toDoLabel.appendChild(toDoFakeCheckbox);

    toDoLabel.appendChild(textNode);
    toDoItem.appendChild(toDoLabel);
    toDoItem.appendChild(deleteButton);

    fragment.appendChild(toDoItem);

    toDoList.appendChild(fragment);

    document.querySelector(".todo-input").value = "";
    setTimeout(() => {
      alert("Пункт в список дел успешно добавлен!");
    }, 100);
  }
});

toDoList.addEventListener("click", (e) => {
  if (e.target.closest(".item-button")) {
    const listItem = e.target.closest(".todo-item");
    listItem.remove();
    setTimeout(() => {
      alert("Пункт из списка дел удален!");
    }, 100);
  }
});
