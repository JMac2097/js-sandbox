
//variables and guff
let numArr = [];



// Event listener for the button
document.getElementById('submit').addEventListener('click', findThePrimes);



function findThePrimes() {

    // Set variables for counting
    let startNum = parseInt(document.getElementById('startNumber').value), 
        endNum = parseInt(document.getElementById('endNumber').value);

    for (let counter = startNum; counter <= endNum; counter++) {
        
        if ( counter !== 0 && counter !== 1 )  {
            
            let notPrime = false;
            for (let i = 2; i <= counter; i++) {
                if (counter % i === 0 && i!==counter) {   // if counter modulus i equals zero AND i doesn't not equal counter 
                
                notPrime = true;
                
                };
            };
        
            if (notPrime === false) {
                numArr.push(counter);
            };
        }
    
    };

console.log(numArr);

console.log(`Number of prime numbers between ${startNum} and ${endNum} are: ${numArr.length}`);

// then empty the array
numArr = [];
};