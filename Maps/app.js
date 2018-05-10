

// Maps -- Key - Value pairs -- can use ANY type as a key or a value

const map1 = new Map();

// Set keys
const key1 = 'Some String',
      key2 = {},
      key3 = function() {

      };

// Set map values by key
map1.set(key1, 'Value of key1');
map1.set(key2, 'Value of key2');
map1.set(key3, 'Value of key3');

// // Get values by key
// console.log(map1.get(key1));
// console.log(map1.get(key2));
// console.log(map1.get(key3));

// // iterate through maps
// for(let[key, value] of map1) {
//     console.log(`${key} = ${value}`)
// };

// // Iterate keys only
// for(let key of map1.keys()) {
//     console.log(`${key}`)
// };

// // Iterate values only
// for(let value of map1.values()) {
//     console.log(`${value}`)
// };


// // For each
// map1.forEach( function(value, key) {
//     console.log(`${key} = ${value}`)
// });

// Create an array of key value pairs
const keyValArr = Array.from(map1);
console.log(keyValArr);

// create array of values
const valArr = Array.from(map1.values());
console.log(valArr);

// create array of keys
const keyArr = Array.from(map1.keys());
console.log(keyArr);