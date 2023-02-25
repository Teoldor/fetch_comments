
let post = document.querySelector('.post');
let title = document.querySelector('#title');
let text = document.querySelector('#text');
let postId = null;
let temp = [];
let userImput = prompt('Введите номер поста')
fetch(`https://jsonplaceholder.typicode.com/posts/${userImput}`)
  .then(function (post){
    return post.json();
  })
  .then(function (post){
    title.innerText = post.title;
    text.innerText = post.body;
    postId = post.id;
    console.log(postId)
  })
fetch('https://jsonplaceholder.typicode.com/comments')
  .then(function (response){
    return response.json();
  })
  .then(function (data){
    console.log(getCommetsForPost(data, postId));
  })


function getCommetsForPost(data, postId) {
  for (let i = 0; i < data.length; i++) {
  if ( data[i].postId == postId ) {
    temp.push(data[i])
   }
  }
  return temp
}
