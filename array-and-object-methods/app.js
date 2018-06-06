
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

// https://codeburst.io/useful-javascript-array-and-object-methods-6c7971d93230