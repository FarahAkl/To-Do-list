const modeIcon = document.querySelector(".todo .title img");
const tasks = document.querySelector(".tasks");
const itemsNum = document.querySelector(".itemsNum");
const newTask = document.querySelector(".newTask");
let arrOfTasks = [];
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
//add new task
newTask.addEventListener("keydown", (e) => {
  if (
    e.key === "Enter" &&
    newTask.value !== "" &&
    newTask.value.trim() !== ""
  ) {
    const task = document.createElement("div");
    task.classList.add("task");
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    task.appendChild(checkbox);
    const taskP = document.createElement("p");
    taskP.innerHTML = newTask.value.trim();
    delIcon = document.createElement("img");
    delIcon.src = "images/icon-cross.svg";
    delIcon.alt = "cross";
    delIcon.classList.add("del");
    task.appendChild(taskP);
    task.appendChild(delIcon);
    tasks.prepend(task);
    newTask.value = "";
    i++;
    itemsNum.innerHTML = `${i} items left`;
    taskDetails = {
      task: taskP.innerHTML,
      checked: false,
    };
    arrOfTasks.push(taskDetails);
    console.log(arrOfTasks);
  }
  localStorage.setItem("tasks", JSON.stringify(arrOfTasks));
});

/*delete task*/
tasks.addEventListener("click", (e) => {
  if (e.target.classList.contains("del")) {
    e.target.parentElement.remove();
    i--;
    itemsNum.innerHTML = `${i} items left`;
    arrOfTasks = arrOfTasks.filter(
      (task) => task.task !== e.target.previousElementSibling.innerHTML
      
    );
    localStorage.setItem("tasks", JSON.stringify(arrOfTasks));
  }
});
