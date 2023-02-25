function postsData(){
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(data => displayData(data))
}

function displayData(posts){
    const postContainer = document.getElementById('post-container');
    for(const post of posts){
        console.log(post);
        const postDiv = document.createElement('div');
        postDiv.classList.add('post');
        postDiv.innerHTML = `
        <h4>User-${post.userId}</h4>
        <h5>${post.title}</h5>
        <h5>${post.body}</h5>
        `

        postContainer.appendChild(postDiv);
    }
}


postsData();