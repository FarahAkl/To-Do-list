const modeIcon = document.querySelector(".todo .title img");
const tasks = document.querySelector(".tasks");
const itemsNum = document.querySelector(".itemsNum");
const newTask = document.querySelector(".newTask");
let i = 0;
itemsNum.innerHTML = `${i} items left`;
//switch light and dark mode
modeIcon.addEventListener("click", () => {
  if (document.body.classList.contains("light")) {
    document.body.classList.remove("light");
    document.body.classList.add("dark");
    modeIcon.src = "images/icon-sun.svg";
    modeIcon.alt = "sun";
  } else if (document.body.classList.contains("dark")) {
    document.body.classList.remove("dark");
    document.body.classList.add("light");
    modeIcon.src = "images/icon-moon.svg";
    modeIcon.alt = "moon";
  }
});
newTask.addEventListener("keydown", (e) => {
  if (e.key === "Enter" && newTask.value !== "") {
    const task = document.createElement("div");
    task.classList.add("task");
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    task.appendChild(checkbox);
    const taskP = document.createElement("p");
    taskP.innerHTML = newTask.value;
    task.appendChild(taskP);
    tasks.prepend(task);
    newTask.value = "";
    i++;
    itemsNum.innerHTML = `${i} items left`;
    localStorage.setItem(`task ${i}`, task);
  }
});
