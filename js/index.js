function loadUsers2(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => displayUsers(data))
}

function displayUsers(users){
    const ul = document.getElementById('ul-list');
    for(const user of users){
        // console.log(user.name);
        const li = document.createElement('li');
        li.innerText = user.name;
        
        ul.appendChild(li);
    }
}