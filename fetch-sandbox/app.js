

document.getElementById('button1').addEventListener('click', getText);
document.getElementById('button2').addEventListener('click', getJSON);
document.getElementById('button3').addEventListener('click', getExternal);


// Get local text data
function getText() {
    fetch('test.txt')
    .then(function(res) {
        return res.text();
    })
    .then(function(data) {
        // console.log(data);
        document.getElementById('output').innerHTML = data;
    })
    .catch(function(err) {
        console.log(err);
    });
};

// Get local JSON data
function getJSON() {
    fetch('post.json')
    .then(function(res) {
        return res.json();
    })
    .then(function(data) {
        console.log(data);
        let output = '';
        data.forEach(function(post) {
            output += ` <li>Title: ${post.title}
                      Body: ${post.title}</li>
                        <br/>`;
        });
        document.getElementById('output').innerHTML = output;
    })
    .catch(function(err) {
        console.log(err);
    });
};

// Get local External data
function getExternal() {
    fetch('https://api.github.com/users')
    .then(function(res) {
        return res.json();
    })
    .then(function(data) {
        console.log(data);
        let output = '';
        data.forEach(function(user) {
            output += ` <li>User: ${user.login}</li>
                        <br/>`;
        });
        document.getElementById('output').innerHTML = output;
    })
    .catch(function(err) {
        console.log(err);
    });
};