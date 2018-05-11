

// SETS -- store uniqure values of any type

const set1 =new Set();


// Add values to set

set1.add(100);
set1.add('A string');
set1.add({name: 'John'});
set1.add(true);

// console.log(set1);


// // // Another way to add in values
// // const set2 = new Set([100, 'string', true, {name: 'Derek'}]);

// // console.log(set2);

// console.log(set1.size);

// console.log(set1.has(100));

// console.log(set1.has(50+50));

// // Delete from the set

// set1.delete(100);

// console.log(set1);

// // Iterate through sets
// for(let item of set1) {
//       console.log(item);
// };


// // For each

// set1.forEach((value) => {
//       console.log(value);
// });

// Convert set to array
const setArr = Array.from(set1);
console.log(setArr);