.
//  Observer Pattern
class EventObserver {
    constructor() {
        this.observers = [];
    }

    subscribe(fn) {
        this.observers.push(fn);
        console.log(`You are now subscribed to ${fn.name}`);
    }

    unsubscribe(fn) {
        // Filter out from the list whatever matches the callback function.  
        // If there is no match, the callback gets to stay on the list. 
        // The filter returns a new list and reassigns the observers.
        this.observers = this.observers.filter(function(item) {
            if(item !== fn) {
                return item;
            }
        });
        console.log(`You are now unsubscribed from ${fn.name}`)
    }

    fire () {
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