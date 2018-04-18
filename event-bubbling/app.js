

let items = document.querySelectorAll('.item');

for (let i = 0; i < items.length; i++) {
    let el = items[i];

    //capturing phase
    el.addEventListener('click', doSomething, true);
    //bubbling phase
    el.addEventListener('click', doSomething, false);
}

function doSomething(e) {
    console.log(e.currentTarget.id);
}