
//get the variables
let toDoItems = document.getElementById("to-do-items")
let toItem = document.getElementById("to-do-item")
let addToDo = document.getElementById("add-to-do")
let toDo = document.getElementById("to-do")
let doneTask = document.getElementById("to-do-li")

//add eventListen to the add button
addToDo.addEventListener('click',()=>{
  if(toDo.value !=""){
    //create li
  let listItem = document.createElement('li')
  listItem.id = "closeItem"
  listItem.innerText = toDo.value
  toDo.value = ""
  listItem.title = "Double click to remove completed tasks"
  toDoItems.appendChild(listItem)
  
  let items = document.querySelectorAll("#closeItem")
  for (let i = 0; i<items.length;i++){
    //add double event to each task item
    items[i].addEventListener('click', ()=>{
      
      if (true){
        console.log(`Click item ${i}`)
        items[i].className = "cancel"
        items[i].addEventListener('dblclick', (e)=>{
          console.log(`item ${i} removed`)
          items[i].remove(e)
        })
      }
    })
  }
  }
  else{
    alert("Please first type in your to do")
  }

})
