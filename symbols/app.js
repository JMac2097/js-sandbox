

const sym1 = Symbol();
const sym2 = Symbol('sym2');



// // Symbol() are never the same
// console.log(Symbol() === Symbol());   // equals false


// Unique Object Keys

const key1 = Symbol();
const key2 = Symbol('sym2');

const myObj = {};

myObj[key1] = 'Prop1';
myObj[key2] = 'Prop2';
myObj.key3 = 'Prop3';
myObj.key4 = 'Prop4';


// console.log(myObj[key1]);
// console.log(myObj[key2]);

// Symbols are not enummerable in for ..in loops
// for(let i in myObj) {
//     console.log(`${i} : ${myObj[i]}`);
// };

//  Symbols are ignored by JSON.stringify

// console.log(JSON.stringify({[Symbol(sym1)] : 'prop'}));  // Not gonna work

