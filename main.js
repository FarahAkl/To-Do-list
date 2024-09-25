const modeIcon = document.querySelector(".todo .title img");

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
