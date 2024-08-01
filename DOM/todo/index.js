//variables
const addTask = document.getElementById("add-task");
const taskContainer = document.getElementById("task-container");
const inputTask = document.getElementById("input-task");

//event-listener

addTask.addEventListener("click", function () {
  if (taskContainer.children.length >= 5) {
    alert("You can only add up to 5 tasks.");
    return;
  }

  let task = document.createElement("div");
  task.classList.add("task");

  let li = document.createElement("li");
  li.innerText = `${inputTask.value}`;
  task.appendChild(li);

  let checkButton = document.createElement("button");
  checkButton.innerHTML = '<i class="fa-solid fa-check"></i>';
  checkButton.classList.add("checkTask");
  task.appendChild(checkButton);

  let deleteButton = document.createElement("button");
  deleteButton.innerHTML = '<i class="fa-solid fa-trash"></i>';
  deleteButton.classList.add("deleteTask");
  task.appendChild(deleteButton);

  if (inputTask.value === "") {
    alert("enter a task");
  } else {
    taskContainer.appendChild(task);
  }
  inputTask.value = "";

  checkButton.addEventListener("click", function () {
    checkButton.previousElementSibling.style.textDecoration = "line-through";
  });
  deleteButton.addEventListener("click", function (e) {
    let target = e.target;
    target.parentElement.parentElement.remove();
  });
});
