let ctr=0;
function deleteTodo(index){
    const element=document.getElementById(index);
    element.parentNode.removeChild(element)
}

function addTodo(){
    ++ctr;
    const inputVal=document.querySelector("input");
    const val=inputVal.value;
    
    const newSpan=document.createElement("span");
    newSpan.innerHTML=val;
    newSpan.setAttribute("id", "span-" + ctr);

    const buttonEl=document.createElement("button");
    buttonEl.innerHTML="Delete"
    buttonEl.setAttribute("onclick", `deleteTodo('div-${ctr}')`); // Set correct ID

    const newDiv=document.createElement("div");
    newDiv.setAttribute("id", "div-" + ctr); // Set unique ID
    newDiv.appendChild(newSpan);
    newDiv.appendChild(buttonEl);
    document.getElementById("todoContainer").appendChild(newDiv)
    
    inputVal.value = "";
}
