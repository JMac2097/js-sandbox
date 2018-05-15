

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
//
//
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

// //  Factory Class

// function MemberFactory() {
//     this.createMember = function(name, type) {
//         let member; 

//         if(type === 'simple') {
//             member = new SimpleMembership(name);
//         } else if(type === 'standard') {
//             member = new StandardMembership(name);
//         } else if(type === 'super') {
//             member = new SuperMembership(name);
//         }

//         member.type = type;

//         member.define = function() {
//             console.log(`${this.name} (${this.type}): ${this.cost}`);
//         }

//         return member;
//     }
// };

// const SimpleMembership = function(name) {
//     this.name = name;
//     this.cost = '$5';
// };

// const StandardMembership = function(name) {
//     this.name = name;
//     this.cost = '$15';
// };

// const SuperMembership = function(name) {
//     this.name = name;
//     this.cost = '$25';
// };


// const members = [];
// const factory = new MemberFactory();

// members.push(factory.createMember('John Doe', 'simple'));
// members.push(factory.createMember('Doe Doe', 'standard'));
// members.push(factory.createMember('Jane Doe', 'super'));



// // console.log(members);

// members.forEach(function(member) {
//     member.define();
// });


//  Observer Pattern
function EventObserver() {
    this.observers = []
};

EventObserver.prototype = {
    subscribe: function(fn) {
        this.observers.push(fn);
        console.log(`You are now subscribed to ${fn.name}`);
    },
    unsubscribe: function(fn) {
        // Filter out from the list whatever matches the callback function.  
        // If there is no match, the callback gets to stay on the list. 
        // The filter returns a new list and reassigns the observers.
        this.observers = this.observers.filter(function(item) {
            if(item !== fn) {
                return item;
            }
        });
        console.log(`You are now unsubscribed from ${fn.name}`)
    },
    fire: function() {
        this.observers.forEach(function(item) {
            item.call();
        });
    }
};

const click = new EventObserver();

// Event listeners
document.querySelector('.sub-ms').addEventListener('click',function() {
    click.subscribe(getCurrMilliseconds);
});

document.querySelector('.unsub-ms').addEventListener('click',function() {
    click.unsubscribe(getCurrMilliseconds);
});

document.querySelector('.sub-s').addEventListener('click',function() {
    click.subscribe(getCurrseconds);
});

document.querySelector('.unsub-s').addEventListener('click',function() {
    click.unsubscribe(getCurrseconds);
});

document.querySelector('.fire').addEventListener('click',function() {
    click.fire();
});

// Click handler
const getCurrMilliseconds = function() {
    console.log(`Current milliseconds: ${new Date().getMilliseconds()}`);
};

// Click handler
const getCurrseconds = function() {
    console.log(`Current seconds: ${new Date().getSeconds()}`);
};