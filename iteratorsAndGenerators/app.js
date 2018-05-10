

// // iterator example

// function nameIterator(names) {
//     let nextIndex = 0;

//     return {
//         next: function() {
//             return nextIndex < names.length ? { value: names[nextIndex++], done: false } : { done: true }
//         }
//     };
// };

// // create an array
// const namesArray = ['jack', 'jill', 'john'];

// // init iterator anf pass in namesArray
// const names = nameIterator(namesArray);

// console.log(names.next().value);
// console.log(names.next().value);
// console.log(names.next().value);
// console.log(names.next().value);



// // Generator Example

// function* sayNames() {
//     yield 'jack';
//     yield 'jill';
//     yield 'john';
// };


// const name = sayNames();

// console.log(name.next());
// console.log(name.next());
// console.log(name.next());
// console.log(name.next());


function* createIDs() {
    let index = 0;

    while(true) {
        yield index++;
    }
}

const gen = createIDs();

console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
