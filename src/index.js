document.addEventListener("DOMContentLoaded", () => {
    const todoForm= document.getElementById("create-task-form")
    todoForm.addEventListener('submit', handleSubmit)
  
});


function handleSubmit(event){
  event.preventDefault();
  console.log('submitted')
  let todo = event.target["new-task-description"].value
  console.log(todo)
  let li = document.createElement('li')
  let btn = document.createElement('button')


  li.textContent = todo
  console.log(li)

  btn.addEventListener('click', ()=> {
    li.remove()
  })
  btn.textContent = 'X'
  li.appendChild(btn)

  document.querySelector('#tasks').append(li)
  event.target.reset()
}
