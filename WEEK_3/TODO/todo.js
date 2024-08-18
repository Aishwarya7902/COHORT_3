let todos=[]
function addTodo(){
    todos.push({
        title:document.querySelector("input").value
    })
    document.querySelector("input").value=""
    render();
}

function createTodo(todo,index){
    const newHeading=document.createElement("h1");
    newHeading.innerHTML=todo.title;
    
    const newButton=document.createElement("button");
    newButton.innerHTML="Delete"
    newButton.addEventListener("click", function() {
        deleteTodo(index);
    });

    const newDiv=document.createElement("div");
    newDiv.appendChild(newHeading);
    newDiv.appendChild(newButton);
    return newDiv;


}
function render(){
    const todoContainer=document.getElementById("todo");
    todoContainer.innerHTML="";
    for(let i=0;i<todos.length;i++){
        const element=createTodo(todos[i],i);
        todoContainer.appendChild(element);
    }
}

function deleteTodo(index){
    todos.splice(index,1);
    render();
}