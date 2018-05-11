// Basic Layout

// (function() {
//     // Declare private variables and function first

//     return {
//         // Declare Public variables and functions
//     };



// })();

// // Standard module pattern
// const UIctrl = (function() {
//     let text = 'Hello World';
//
//     const changeText = function() {
//         const element = document.querySelector('h4');
//         element.textContent = text;
//     };
//
//     return {
//         callChangeText: function() {
//             changeText();
//             console.log(text);
//         }
//     }
// })();
//
// UIctrl.callChangeText();


// // Revealing Module pattern
// const ItemController = (function() {
//     let data = [];

//     function add(item) {
//         data.push(item);
//         console.log('Item Added...');
//     };

//     function get(id) {
//         return data.find(item => {
//             return item.id === id;
//         })
//     };


//     return {
//         add: add,
//         get: get
//     };
// })();

// ItemController.add({id: 1, name: 'John'});


// No more than one instance of the SingelTon can be created
// // SingleTon Pattern
// const SingleTon = (function() {
//     let instance;

//     function createInstance() {
//         const object = new Object('Object Instance');
//         return object;
//     }

//     return {
//         getInstance: function() {
//             if(!instance) {
//                 instance = createInstance();
//             }
//             return instance;
//         }
//     }
// })();

// const instanceA = SingleTon.getInstance();

// console.log(instanceA);

// FACTORY PATTERN/METHOD

function MemberFactory() {
    this.createMember = function(name, type) {
        let memeber;

        if(type === 'simple') {
            member = new SimpleMemberShip(name);
        } else if(type === 'standard') {
            member = new StandardMemberShip(name);  
        } else if(type === 'super') {
            member = new SuperMemberShip(name);  
        } 

        member.type = type;

        member.define = function() {
            console.log(`${this.name} (${this.type}): ${this.cost}`)
        }

        return member;
    };
}

const SimpleMemberShip = function(name) {
    this.name = name;
    this.cost = '$5'
}

const StandardMemberShip = function(name) {
    this.name = name;
    this.cost = '$10'
}

const SuperMemberShip = function(name) {
    this.name = name;
    this.cost = '$20'
}

const members = [];
const factory = new MemberFactory();

members.push(factory.createMember('John Doe', 'simple'));

console.log(members);