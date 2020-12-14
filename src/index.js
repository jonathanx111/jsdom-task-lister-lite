
document.addEventListener("DOMContentLoaded", () => {
  const taskForm = document.querySelector("#create-task-form")
  // append/attatch event listeners
  taskForm.addEventListener("submit", createTask)

});

function createTask(e) {
  e.preventDefault();
  // prevent default submit action so it won't make get
  // request and reload page
debugger
  const taskDescription = document.querySelector("#new-task-description")
  const newLi = document.createElement("li")
  const taskUl = document.querySelector("#tasks")

  newLi.textContent = taskDescription.value 
  taskUl.append(newLi)
  newLi.append(dltBtn())
  e.target.reset()
  function dltBtn() {
    const btn = document.createElement("BUTTON")
    btn.textContent = "X"
    btn.addEventListener('click', function removeTask() {
      newLi.remove()
      btn.remove()
    })
    return btn
  }
}


