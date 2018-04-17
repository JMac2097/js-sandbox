/* Game Functions
    -- Player must guess a number between a min and a max
    -- Player gets a certain amount of guesses
    -- Notify player of number of guesses remaining
    -- Notify player of correct answer if they lose
    -- Let player choose if they want to play again
*/

// Game values
let min = 1,
max = 10,
winningNum = getRandomNum(min, max),
guessesLeft = 3;

// UI elements

const game = document.querySelector('#game'),
      minNum = document.querySelector('.min-num'),
      maxNum = document.querySelector('.max-num'),
      guessBtn = document.querySelector('#guess-btn'),
      guessInput = document.querySelector('#guess-input'),
      message = document.querySelector('.message');

// Assign UI min and max

minNum.textContent = min;
maxNum.textContent = max;

// Play Again Event Listener
game.addEventListener('mousedown', function(e) {
    if (e.target.className === 'play-again') {
        window.location.reload();
    }
})

// Listen for guess
guessBtn.addEventListener('click', function() {
    let guess = parseInt(guessInput.value);

    //Validate input
    if(isNaN(guess) || guess < min || guess > max) {
        setMessage(`Please enter a number between ${min} and ${max}`, 'red');
    };

    // Check if won
    if(guess === winningNum) {
        // Game Over -- Won
        gameOver(true, `${winningNum} is correct!!  You Win!`);

    } else {
    // Wrong Number
    guessesLeft -= 1;
    if(guessesLeft === 0) {
        // Game Over -- Lost
        gameOver(false, `GAME OVER -- You lost.  The number you wanted was ${winningNum} `);
    } else {
        // Game continues -- Answer wrong
        guessInput.style.borderColor = 'red';
        // Clear the input
        guessInput.value = '';
        // Game Continues -- answer wrong
        setMessage(`Guess is not correct, ${guessesLeft} guesses left.`, 'red');
        }

    };
});

// Game Over

function gameOver(won, msg) {
    let color;
    won === true ? color = 'green' : color = 'red';

    // Game Over -- Won
    // Disable Input
    guessInput.disabled = true;
    // Change Border Color
    guessInput.style.borderColor = color;
    // Text Colour
    message.style.color = color;
    // Set Message
    setMessage(msg);

    // Play AGain
    guessBtn.value = 'Play Again';
    guessBtn.className += 'play-again';
};

// Get Winning Number
function getRandomNum(min, max) {
    return Math.floor(Math.random()*(max-min+1) + min);
}

// Set Message

function setMessage(msg, color) {
    message.style.color = color;
    message.textContent = msg;
}





