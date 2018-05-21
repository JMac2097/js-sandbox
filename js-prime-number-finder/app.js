
// Listen for button click
document.getElementById('submit').addEventListener('click', getPrimeNumbers);

//  Get those numbers
function getPrimeNumbers(startNum, endNum) {
    let numArr = [], // numbers go in here
        primeArr = []; // prime numbers go in here

    // get the numbers from the inputs
    startNum = document.getElementById('startNumber').value;
    endNum = document.getElementById('endNumber').value;
    // console.log(`start number: ${startNum}`);
    // console.log(`end number: ${endNum}`);
    
    for(let i = startNum; i <= endNum; i++) {
        numArr.push(i);
    };

    for(let j = startNum; j <= numArr.length; j++) {
        let prevValue = numArr[j];  // Close -- something along these lines is needed.  Need to refer back to the previous iterations somehow either put into a variable or something else :(
            if(numArr[j] % prevValue !== 0) {
                primeArr.push(j);
            };
        };

    console.log(`the state of numArr: ${numArr}`);
    console.log(`the length of numArr: ${numArr.length}`); 
    console.log(`the state of primeArr: ${primeArr}`);
    console.log(`the length of primeArr: ${primeArr.length}`); 



};

// All kinds of validation can go here -- such as start number has to be lower than end number -- could set up a cool error message for that

