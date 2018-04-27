const posts = [
    {title: "Post 1", body: "This is post One"},
    {title: "Post 2", body: "This is post Two"}
    
];


// function createPost(post) {
//     setTimeout(function() {
//         posts.push(post);
//     }, 2000);
// };

// function getPosts() {
//     setTimeout(function() {
//         let output = '';
//         posts.forEach(function(post) {
//             output += `<li>${post.title}</li>`
//         });
//         document.body.innerHTML = output;
//     }, 1000);
// };

// createPost({title: "Post 3", body: "Thhis is post Three"});

// getPosts();

function createPost(post, callback) {
    setTimeout(function() {
        posts.push(post);
        callback();
    }, 2000);
};

function getPosts() {
    setTimeout(function() {
        let output = '';
        posts.forEach(function(post) {
            output += `<li>${post.title}</li>`
        });
        document.body.innerHTML = output;
    }, 1000);
};

createPost({title: "Post 3", body: "This is post Three"}, getPosts);

