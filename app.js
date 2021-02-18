
let toDoItems = document.getElementById("to-do-items")
let toItem = document.getElementById("to-do-item")
let addToDo = document.getElementById("add-to-do")
let toDo = document.getElementById("to-do")
let doneTask = document.getElementById("to-do-li")

//add listener to the button
addToDo.addEventListener('click',()=>{
  //create li
  let listItem = document.createElement('li')
  listItem.id="closeItem"
  console.log('task added...')
  listItem.innerText = toDo.value
  toDoItems.appendChild(listItem)


  //checkbox
  let checkbox = document.createElement('input')
  //assign attribute to checkbox
  checkbox.type = 'checkbox'
  checkbox.className = "done-task"
  listItem.appendChild(checkbox)
  let completed = document.querySelectorAll(".done-task")
  
  //add listener for the checkbox item
    for(let i = 0; i < completed.length;i++){
      completed[i].addEventListener('click', ()=>{
        console.log("checkbox clicked")
      })
    }
})
