/* Game Functions
    = Player must guess a number between a min and a max
    - Player gets a certain amount of guesses
    - Notify player of number of guesses remaining
    - Notify player of correct answer if they lose
    - Let player choose if they want to play again
*/

// Game values
let min = 1,
max = 10,
winngNum = 2,
guessesLeft = 3;

// UI elements

const game = document.querySelector('game'),
      minNum = document.querySelector('.min-num'),
      maxNum = document.querySelector('.max-num'),
      guessBtn = document.querySelector('#guess-btn'),
      guessInput = document.querySelector('#guess-input'),
      message = document.querySelector('.message');

// Assign UI min and max

minNum.textContent = min;
maxNum.textContent = max;

// Listen for guess
guessBtn.addEventListener('click', function() {
    let guess = parseInt(guessInput.value);

    //Validate input
    if(guess === NaN || guess < min || guess > max) {
        setMessage(`Please enter a number between ${min} and ${max}`);
    }
});



