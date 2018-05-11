

// // Module Pattern
//
// var HTMLChanger = (function() {
//     let contents = 'contents';
//
//     const changeHTML = function() {
//         let element = document.getElementById('attribute-to-change');
//         element.innerHTML = contents;
//     };
//
//     return {
//         callChangeHTML: function() {
//             changeHTML();
//             console.log(contents);
//         }
//     };
//
// })();
//
// // HTMLChanger.callChangeHTML(); // Outputs: 'contents'
// document.getElementById('btn').addEventListener('click', HTMLChanger.callChangeHTML);


// // Revealing Module Pattern
//
// const Exposer = (function() {
//     let privateVariable = 10;
//
//     const privateMethod = function() {
//         console.log('Inside a private methood!');
//         privateVariable++;
//     };
//
//     const methodToExpose = function() {
//         console.log('This is a method I want to expose');
//     };
//
//     const otherMethodThatIWantToExpose = function() {
//         privateMethod();
//     };
//
//
//     return {
//         first: methodToExpose,
//         second: otherMethodThatIWantToExpose
//     };
//
// })();


// Exposer.first();
// Exposer.second();
// Exposer.methodToExpose;  //Undefined


// // Prototype design pattern
//
// const TeslaModelS = function() {
//     this.newWheels = 4;
//     this.manufacturer = 'Tesla';
//     this.make = 'Model S';
// };
//
// // TeslaModelS.prototype.go = function() {
// //     // Rotate Wheels
// // };
// // TeslaModelS.prototype.stop = function() {
// //     // Apply the brakes
// // };
//
// TeslaModelS.prototype = {
//     go: function() {
//         // Rotate Wheels
//     },
//     stop: function() {
//         // apply the brakes
//     }
// };


// // Prototype Revealing Pattern
//
// const TeslaModelS = function() {
//     this.numWheels = 4;
//     this.manufacturer = 'Tesla';
//     this.make = 'Model S';
// };
//
// TeslaModelS.prototype = function() {
//
//     const go = function() {
//         // Rotate the wheels
//
//         console.log('moving...');
//     };
//
//     const stop = function() {
//         // Apply the brakes
//
//         console.log('stopped...');
//     };
//
//     return {
//         pressBrakePedal: stop,
//         pressGasPedal: go
//     };
//
// }();


