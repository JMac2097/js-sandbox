// Destructuring assignment

let a, b;
[a, b] = [100, 200];
// rest pattern
[a, b, ...rest] = [100, 200, 300, 400, 500];


// console.log(rest);


// ({ a , b } = {a : 100, b : 200, c : 300, d : 400, e : 500});

// console.log(a, b);

// ({ a , b, ...rest } = {a : 100, b : 200, c : 300, d : 400, e : 500});

// console.log(rest);



// Array destructuring

// const people = ['Derek', 'Mike', 'Arnold'];

// const [person1, person2, person3] = people;

// console.log(person1, person2, person3);

// Parse array returned from function

// function getPeople() {
//     return ['John', 'Beth', 'Mike'];
// };

// let person1, person2, person3;

// person1, person2, person3 = getPeople();

// console.log(person1, person2, person3);


// Object Destructuring

const person = {
    name: 'John Doe',
    age: 32,
    city: 'Miami',
    gender: 'Male',
    sayHello: function() {
        console.log('Hello');
    }
}

// Old ES5 way
// const name = person.name,
//       age = person.age,
//       city = person.city,
//       gender = person.city;

// Newer ES6 way
const { name, age, city, sayHello } = person;


console.log(name, age, city);

sayHello();