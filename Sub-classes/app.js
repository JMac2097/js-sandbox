class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    greeting() {
        return `Hello there ${this.firstName} ${this.lastName}`;
    }

}

class Customer extends Person {
    constructor(firstName, lastName, phone, membership) {
        super(firstName, lastName);

        this.phone = phone;
        this.membership = membership;
    }

    static getMembershipCost() {
        return 500;
    }
}

const john = new Customer('John', 'Doe', '999-000-888', 'standard');

console.log(john);
console.log(john.greeting());

console.log(Customer.getMembershipCost());







// Create Human class and assign params
// Create SuperHuman and Extend Human
// Setup Two normals and two heroes


class Human {
    constructor(firstName, lastName) {

        this.firstName = firstName;
        this.lastName = lastName;

    };

    greet() {
        return `Hello ${this.firstName} ${this.lastName}`;
    };
};

const derek = new Human('Derek', 'Smalls');

console.log(derek);
console.log(derek.greet());

class SuperHuman extends Human {
    constructor(firstName, lastName, power1, power2) {
        super(firstName, lastName);

        this.power1 = power1;
        this.power2 = power2;

    };

    powers(weakness) {
        return `${this.firstName} ${this.lastName} has the power of ${this.power1} and ${this.power2}, but suffers from a fear of ${weakness}`
    };

};

const newSuperHero = new SuperHuman('Mr', 'Awesome', 'Super Speed', 'Flight');

console.log(newSuperHero);
console.log(newSuperHero.powers('arse magic'));