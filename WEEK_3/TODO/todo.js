let ctr=0;
function deleteTodo(index){
    const element=document.getElementById(index);
    element.parentNode.removeChild(element)
}

function addTodo(){
    ++ctr;
    const inputVal=document.querySelector("input");
    const val=inputVal.value;
    
    const newTodo=document.createElement("div");
    newTodo.setAttribute("id",ctr);
    newTodo.innerHTML= `<div>`  + val + `</div> <button class="btn btn-primary" onClick="deleteTodo(` + ctr + `)">Delete todo</button>`;
    const parentElement=document.getElementById("todoContainer");
    
    parentElement.appendChild(newTodo)
    inputVal.value = "";
}
