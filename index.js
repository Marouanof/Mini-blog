class User{
    constructor(id,username,email){
        this.id = id;
        this.username = username;
        this.email = email;
    }
    toJSON(){
        return JSON.stringify(this);
    }
    static fromJSON(json){
        const data = JSON.parse(json);
        return new User(data.id,data.username,data.email);
    }
}
class Post{
    constructor(id,title,content,userId){
        this.id = id;
        this.title = title;
        this.content = content;
        this.userId = userId;
    }
    toJSON(){
        return JSON.stringify(this);
    }
    static fromJSON(json){
        const data = JSON.parse(json);
        return new Post(data.id,data.title,data.content,data.userId);
    }
}
let users = [new User(1,'John','john@email.com')];
let posts = [];
function addpost(title,content){
    const userId = users[0].id;
    const id = posts.length+1;
    const post = new Post(id,title,content,userId);
    posts.push(post);
    renderPosts();
}
function renderPosts(){
    const postList = document.getElementById('postList');
    postList.innerHTML = '';
    posts.forEach(post => {
        const listItem = document.createElement('li');
        listItem.classList.add('list-group-item');
        listItem.innerHTML = `
        <small>${post.id}</small>
        <h5>${post.title}</h5>
        <p>${post.content}</p
        `
        postList.appendChild(listItem);
    })
}
document.getElementById('postform').addEventListener('submit',(e) => {
    e.preventDefault();
    const title = document.getElementById('title').value;
    const content = document.getElementById('content').value;
    addpost(title,content);
    document.getElementById('title').value = '';
    document.getElementById('content').value = '';
})