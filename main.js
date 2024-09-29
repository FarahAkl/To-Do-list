const modeIcon = document.querySelector(".todo .title img");
const tasks = document.querySelector(".tasks");
const itemsNum = document.querySelector(".itemsNum");
const newTask = document.querySelector(".newTask");
let arrOfTasks = [];
let i = 0;
itemsNum.innerHTML = `${i} items left`;
const clearCompleted = document.querySelector(".clear");
//get tasks from local storage
if (localStorage.getItem("tasks")) {
  arrOfTasks = JSON.parse(localStorage.getItem("tasks"));
  arrOfTasks.forEach((task) => {
    const taskDiv = document.createElement("div");
    taskDiv.classList.add("task");
    checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    taskDiv.appendChild(checkbox);
    const taskP = document.createElement("p");
    taskP.innerHTML = task.task;
    const delIcon = document.createElement("img");
    delIcon.src = "images/icon-cross.svg";
    delIcon.alt = "cross";
    delIcon.classList.add("del");
    taskDiv.appendChild(taskP);
    taskDiv.appendChild(delIcon);
    tasks.prepend(taskDiv);
    if (task.checked) {
      checkbox.checked = true;
      taskP.style.textDecoration = "line-through";
    }
    i++;
    itemsNum.innerHTML = `${i} items left`;
  });
}
//check and uncheck task
tasks.addEventListener("click", (e) => {
  if (e.target.type === "checkbox") {
    if (e.target.checked) {
      e.target.nextElementSibling.style.textDecoration = "line-through";
      arrOfTasks.forEach((task) => {
        if (task.task === e.target.nextElementSibling.innerHTML) {
          task.checked = true;
        }
      });
    } else {
      e.target.nextElementSibling.style.textDecoration = "none";
      arrOfTasks.forEach((task) => {
        if (task.task === e.target.nextElementSibling.innerHTML) {
          task.checked = false;
        }
      });
    }
    localStorage.setItem("tasks", JSON.stringify(arrOfTasks));
  }
});
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
      id: `${i}`,
    };
    arrOfTasks.push(taskDetails);
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

//clear completed tasks
clearCompleted.addEventListener("click", () => {
  Array.from(tasks.children).forEach((task) => {
    const checkbox = task.querySelector("input[type='checkbox']");
    if (checkbox && checkbox.checked) {
      task.remove();
      i--;
      itemsNum.innerHTML = `${i} items left`;
    }
  });
  arrOfTasks = arrOfTasks.filter((t) => !t.checked);
  localStorage.setItem("tasks", JSON.stringify(arrOfTasks));
});