const input = document.querySelector(".input-box input");
const addBtn = document.querySelector(".input-box button");
const todoList = document.querySelector(".todo-list");

function addTask() {
    const taskText = input.value.trim();

    if (taskText === "") return;

    const li = document.createElement("li");
    li.classList.add("todo-item");

    const icon = document.createElement("span");
    icon.classList.add("icon");
    icon.innerHTML = '<i class="fa-solid fa-certificate"></i>';

    const text = document.createElement("span");
    text.classList.add("text");
    text.innerText = taskText;

    const deleteBtn = document.createElement("span");
    deleteBtn.classList.add("delete");
    deleteBtn.innerHTML = '<i class="fa-solid fa-trash"></i>';

    icon.addEventListener("click", () => {
        li.classList.toggle("completed");
    });

    deleteBtn.addEventListener("click", () => {
        li.remove();
    });

    li.appendChild(icon);
    li.appendChild(text);
    li.appendChild(deleteBtn);
    todoList.appendChild(li);

    input.value = "";
}

addBtn.addEventListener("click", addTask);

input.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        addTask();
    }
});
