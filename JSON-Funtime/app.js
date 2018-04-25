document.querySelector('.get-jokes').addEventListener('click', getJokes);

function getJokes(e) {
    const number = document.querySelector('input[type=number]').value;

    const xhr = new XMLHttpRequest();

    xhr.open('GET',`http://api.icndb.com/jokes/random/${number}`, true);

    xhr.onload = function() {
        if(xhr.status === 200) {
            const response = JSON.parse(this.responseText);
        };

        let ouput = '';

        if(response.type === 'success') {
            
        } else {
            output += `<li>Something went wrong</li>`
        };
    };

    xhr.send();
    e.preventDefault();
};