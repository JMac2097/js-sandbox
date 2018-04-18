const personPrototypes = {
    greeting: function() {
        return `Hello there ${this.firstName} ${this.lastName}`;
    },

    getsMarried: function(newLastName) {
        this.lastName = newLastName;
    }
}


const mary = Object.create(personPrototypes);
mary.firstName = 'Mary';
mary.lastName = 'Williams';
mary.age = 30;

mary.getsMarried('Thompson');

console.log(mary.greeting());


const derek = Object.create(personPrototypes);
derek.firstName = 'Derek';
derek.lastName = 'Arse';
derek.age = 40;

console.log(derek.greeting());
derek.getsMarried('Penis');
console.log(derek.greeting());