

document.getElementById('button1').addEventListener('click', getText);
document.getElementById('button2').addEventListener('click', getJSON);
document.getElementById('button3').addEventListener('click', getExternal);


// Get local text data
function getText() {
    fetch('test.txt')
    .then(res => res.text())
    .then(data => {
        // console.log(data);
        document.getElementById('output').innerHTML = data;
    })
    .catch(err => console.log(err));
};

// Get local JSON data
function getJSON() {
    fetch('post.json')
    .then(res => res.json())
    .then(data => {
        // console.log(data);
        let output = '';
        data.forEach(post => {
            output += ` <li>Title: ${post.title}
                      Body: ${post.title}</li>
                        <br/>`;
        });
        document.getElementById('output').innerHTML = output;
    })
    .catch(err => console.log(err));
};

// Get local External data
function getExternal() {
    fetch('https://api.github.com/users')
    .then(res => res.json())
    .then(data => {
        // console.log(data);
        let output = '';
        data.forEach(user => {
            output += ` <li>User: ${user.login}</li>
                        <br/>`;
        });
        document.getElementById('output').innerHTML = output;
    })
    .catch((err) => console.log(err));
};