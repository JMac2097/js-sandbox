
// https://codeburst.io/useful-javascript-array-and-object-methods-6c7971d93230

// // .filter()

// const studentsAge = [17, 16, 18, 19, 21, 17, 89];
// const ableToDrink = studentsAge.filter( age => age > 18 );

// console.log(ableToDrink);

// ============================================================

// // .map()

// // Create an array that adds a $ to the beginning of each number

// const numbers = [2, 3, 4, 5];
// const dollars = numbers.map( bignumber => '$' + bignumber);

// console.log(dollars);

// =============================================================

// // .reduce()

// // Add up the integers in an array

// const numbers = [5, 10, 15];
// const total = numbers.reduce( (accumlator, currentVal) => accumlator + currentVal );

// console.log(total);

// =============================================================

// .forEach()

// const emotions = ['happy', 'sad', 'argry', 'dandy'];
// emotions.forEach( emotion => console.log(`I am feeling ${emotion}`));

// emotions.forEach( function(emotion) {
//     console.log('I am still feeling ' + emotion);
// });

// =============================================================

// // .some()

// // Check if there is at least one Admin in the array

// const userPrivileges = ['user', 'user', 'user', 'user', 'admin'];
// const containsAdmin = userPrivileges.some( element => element === 'admin');

// console.log(containsAdmin);

// ==============================================================

// // .every()

// // Check if all ratings are equal to or greater than 3

// const rating = [3, 4, 5, 3, 5];
// const goodOverallRating = rating.every( rating => rating >= 3 );

// console.log(goodOverallRating);

// ===============================================================

// // .includes()

// // Check if the array includes an item with the string ‘waldo’.

// const names = ['sophie', 'george', 'waldo', 'stephen', 'henry'];
// const includesWaldo = names.includes('waldo');

// console.log(includesWaldo);

// ================================================================

// // Array.from()

// // create an array from a string

// const newArray = Array.from('hello');

// console.log(newArray);

// ================================================================

// // Object.values()

// // Return an array from the values of an object

// const icecreamColors = {
//     chocolate : 'Brown',
//     vanilla : 'White',
//     strawberry : 'Pink'
// }

// const colors = Object.values(icecreamColors);

// console.log(colors);

// ================================================================

// // Object.keys()

// // Return an array from the keys of an object

// const icecreamColors = {
//     chocolate : 'Brown',
//     vanilla : 'White',
//     strawberry : 'Pink'
// }

// const colors = Object.keys(icecreamColors);

// console.log(colors);

// ================================================================

// // Object.entries()

// // Creates an array which contains arrays of key/value pairs of an object.

// const weather = {
//     rain: 0,
//     temperature: 24,
//     humidity: 33
// }

// const entries = Object.entries(weather);

// console.log(entries);

// =================================================================

// // Array spread

// const spreadableOne = [1, 2, 3, 4];
// const spreadableTwo = [5, 6, 7, 8];

// const combined = [...spreadableOne, ...spreadableTwo];

// console.log(combined);

// ==================================================================

// const spreadableObject = {
//     name: 'Bob',
//     phone: 'iPhone'
// };

// const newObject = {
//     ...spreadableObject, 
//     carModel: 'Volkwagen'
// };

// console.log(newObject);

// ==================================================================