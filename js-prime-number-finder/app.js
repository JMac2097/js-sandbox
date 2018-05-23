
// Listen for button click
document.getElementById('submit').addEventListener('click', getPrimeNumbers);

//  Get those numbers
function getPrimeNumbers(startNum, endNum) {
    let numArr = []; // numbers go in here
    let demoVar;
    // let numArrIteratoid = numArr[i];
       

    // get the numbers from the inputs
    startNum = document.getElementById('startNumber').value;
    endNum = document.getElementById('endNumber').value;
    // console.log(`start number: ${startNum}`);
    // console.log(`end number: ${endNum}`);
    
    for(let i = startNum; i <= endNum; i++) {
        numArr.push(i);
        demoVar = numArr.length;
    };

    function isPrime(numb){
        for(var i=2; i<= Math.sqrt(numb); i++){
       if(numb%i ==0) {
            // return false;
            console.log(`falsey`);
        }
        }
        // return true;
        console.log(`true dat`);
    };


    // console.log(`the state of numArr: ${numArr}`);
    // console.log(`the length of numArr: ${numArr.length}`); 
    // console.log(`There are ${numArr.length} prime numbers between ${startNum} amd ${endNum}`);

    function funkyFunction(number) {
        console.log(`DemoVar is currently at: ${number}`);
    }

    funkyFunction(demoVar);
    isPrime(...numArr);
};

// All kinds of validation can go here -- such as start number has to be lower than end number -- could set up a cool error message for that

