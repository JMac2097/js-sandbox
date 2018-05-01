
// const sayHello = function() {
//     console.log('Hello!');
// };

// //Arrow Function
// const sayHello = () => {
//     console.log('Hello!');
// };

// // SIngle Line -- Single line does not require braces
// const sayHello = () => console.log('Hello!');

// Single line returns
// const sayHello = () => 'Hello';

// // Same as above
// const sayHello = function() {
//     return 'Hello';
// };

// Return Object
// const sayHello = () => ({ title: 'Hello' });

// Single param doesn't need parenthesis
// const sayHello = name => console.log(`Hello ${name}`);

// // Multiple params need parenthesis
// const sayHello = (firstName, lastName) => console.log(`Hello ${firstName} ${lastName}`);


const users = ['Derek', 'Arnold', 'Nigel'];

// const nameLengths = users.map(function(name) {
//     return name.length;
// });

// // Shorter
// const nameLengths = users.map((name) => {
//     return name.length;
// });

// Shortest
const nameLengths = users.map(name => name.length);


console.log(nameLengths);