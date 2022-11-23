let btn = document.getElementById("button-addon2");
let task = document.getElementById("task")
const list =document.querySelector('#lista')
const complete = 'fa-check-circle'
const incomplete = 'fa-circle'
const lineComplete = 'line-through'
let id = 0


document.addEventListener("DOMContentLoaded", addTask);

function addTask(tarea, id, completed, removed){
  if(removed){return} //si removed es cierto entonces todo el código que sigue no se va a ejecutar
   
  const COMPLETED = completed ? complete : incomplete //si completed es true, entonces marca complete, sino será incomplete
  const line = completed ? lineComplete : '' //si el estado está completado entonces se va a subrayar, sino no va a pasar nada
  
    const elemento =`<li>
    <i class="far ${COMPLETED}" data='completed' id=${id}></i>
    <p class="text ${line}"> ${tarea} </p>
    <i class="fas fa-trash de" data='remove' id=${id} onClick=''></i>                       
  </li> `
    

    list.insertAdjacentHTML("beforeend", elemento)
 ;
}

function tareaRealizada(element) {
  element.classList.toggle(complete)
  element.classList.toggle(incomplete)
  element.parentNode.querySelector('.text').classList.toggle(lineComplete)
}

function tareaEliminada(element){
  // console.log(element.parentNode)
  // console.log(element.parentNode.parentNode)
   element.parentNode.parentNode.removeChild(element.parentNode)
} 




btn.addEventListener("click", () =>{
  const tarea =task.value
  if (tarea){
    addTask(tarea, id, false, false) //cada vez que yo agrego una tarea el estado inicial será así, sin completar y sin eliminar
  }
  task.value=''  //se resetea lo que se escribió en el input text del placeholder
  id++ //ahora el id va a vale 1 e irá sumando numeros con cada llamada 
})

btn.addEventListener('keyup', function(event){
  
  if(event.key=='Enter' ){
    const tarea = task.value
    if (tarea){
      addTask(tarea, id, false, false) 
    }
  task.value = ''
  id++
  }
})

list.addEventListener('click', (event)=>{
  const element = event.target //fragmento de codigo que incluye el ícono
  const elementData = element.attributes.data.value
  console.log(elementData)
  
  if(elementData == 'completed') {
    tareaRealizada(element)
  }
  else if(elementData == 'remove') {
      tareaEliminada(element)
      
  }
  
  
})

