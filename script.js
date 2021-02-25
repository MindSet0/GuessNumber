let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

const generateTarget = () => {
    return Math.floor(Math.random() * 10);
};


const compareGuesses = (userGuess, computerGuess, secretNumber) => {
    const userScore = Math.abs(userGuess - secretNumber);
    const computerScore = Math.abs(computerGuess - secretNumber);

    //Determine the of the game
    return userScore <= computerScore ? true : false;
};


const updateScore = (winner) => {
    if(winner === 'human') {
        humanScore++;
    } else {
        computerScore++;
    }
};

const advanceRound = () => {
    currentRoundNumber++;
};

