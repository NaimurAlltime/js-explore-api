function todoData(){
    fetch('https://jsonplaceholder.typicode.com/todos')
    .then(res => res.json())
    .then(data => displayData(data))
}

function displayData(todos){
    // get the container 
    const todoContainer = document.getElementById('todo-container');
    for(const todo of todos){
        // console.log(todo);
        // create the child element 
       const divTodo = document.createElement('div');
    //    set innerText or innerHtml
       divTodo.innerHTML = `
         <h4>UserId:${todo.userId}</h4>
         <h4>Id:${todo.id}</h4>
         <h4>${todo.title}</h4>
       `
    //    appendChild 
       todoContainer.appendChild(divTodo);
    }
}

todoData();