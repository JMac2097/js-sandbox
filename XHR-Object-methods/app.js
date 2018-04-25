document.getElementById('button').addEventListener('click', loadData);

function loadData(){
    // Create new XHR object
    const xhr = new XMLHttpRequest();

    // OPtional  - used for spinners/loadeers
    xhr.onprogress = function() {
        console.log('READYSTATE', xhr.readyState);
    };

    //OPen
    xhr.open('GET', 'data.txt', true);
    console.log('READYSTATE', xhr.readyState);
    xhr.onload = function() {
    console.log('READYSTATE', xhr.readyState);        
        if(this.status === 200) {
            // console.log(this.responseText);
            document.getElementById('output').innerHTML = `<h6>${this.responseText}</h6>`
        };
    };

    xhr.onerror = function() {
        console.log('Request Error!');
    };

    xhr.send();
};