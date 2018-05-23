
// Listen for button click
document.getElementById('submit').addEventListener('click', getPrimeNumbers);

//  Get those numbers
function getPrimeNumbers(startNum, endNum) {
    let numArr = []; // numbers go in here
       

    // get the numbers from the inputs
    startNum = document.getElementById('startNumber').value;
    endNum = document.getElementById('endNumber').value;
    // console.log(`start number: ${startNum}`);
    // console.log(`end number: ${endNum}`);
    
    for(let i = startNum; i <= endNum; i++) {
        numArr.push(i);
    };

    numArr = numArr.filter((number) => {
        for (let j = 2; j <= Math.sqrt(number); j++) {
            if (number % j === 0) {
                return false;
            }
                return true;
            }
        });



    console.log(`the state of numArr: ${numArr}`);
    console.log(`the length of numArr: ${numArr.length}`); 
    console.log(`There are ${numArr.length} prime numbers between ${startNum} amd ${endNum}`);



};

// All kinds of validation can go here -- such as start number has to be lower than end number -- could set up a cool error message for that

