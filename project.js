let btn = document.getElementById("button-addon2");
let task = document.getElementById("task")
const lista =document.querySelector('#lista')


document.addEventListener("DOMContentLoaded", agregarTarea);

function agregarTarea(){
  
    const elemento =`<li>
    <i class="far fa-circle co" data="realizado" id="0"></i>
    <p class="text"> ${task.value} </p>
    <i class="fas fa-trash de" data="eliminado" id="0"></i>                       
  </li> `
    

    lista.insertAdjacentHTML("beforebegin", elemento)
 ;
}

btn.addEventListener("click", () =>{
  const tarea =task.value
  if (tarea){
    agregarTarea(tarea)
  }
  task.value=''
})

btn.addEventListener('keyup', function(event){
  const tarea = task.value
  if(event.key=='Enter'{
    agregarTarea(tarea)
  })
})
