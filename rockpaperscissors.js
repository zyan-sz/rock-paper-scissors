let humanScore = 0;
let computerScore = 0;

// Function to get a random choice for the computer
function getComputerChoice() {
    let choices = ["rock", "paper", "scissors"];
    return choices[Math.floor(Math.random() * choices.length)];
}

// Function to handle player's choice when they click
function getHumanChoice(playerChoice) {
    if (humanScore >= 5 || computerScore >= 5) {
        return; // If someone has already won, do nothing
    }

    let computerChoice = getComputerChoice(); // Get random choice for the computer
    let result = determineWinner(playerChoice, computerChoice); // Determine winner

    updateScore(result); // Update the score
    updateUI(playerChoice, computerChoice, result); // Update UI

    checkForWinner(); // Check if anyone reached 5 points
}

// Function to determine the winner
function determineWinner(human, computer) {
    if (human === computer) {
        return "draw";
    } else if (
        (human === "rock" && computer === "scissors") ||
        (human === "paper" && computer === "rock") ||
        (human === "scissors" && computer === "paper")
    ) {
        return "win"; // Human wins
    } else {
        return "lose"; // Computer wins
    }
}

// Function to update score
function updateScore(result) {
    if (result === "win") {
        humanScore++;
    } else if (result === "lose") {
        computerScore++;
    }
}

// Function to update UI (display player and computer choices + scores)
function updateUI(playerChoice, computerChoice, result) {
    document.querySelector(".m1 p").textContent = `Player: ${humanScore}`;
    document.querySelector(".m2 p").textContent = `Computer: ${computerScore}`;
    
    // Update player and computer icons
    document.querySelector(".m1 div").innerHTML = getEmoji(playerChoice);
    document.querySelector(".m2 div").innerHTML = getEmoji(computerChoice);
}

// Function to get emoji for each choice
function getEmoji(choice) {
    if (choice === "rock") return "✊";
    if (choice === "paper") return "✋";
    if (choice === "scissors") return "🤞";
}

// Function to check if someone has won
function checkForWinner() {
    if (humanScore >= 5) {
        setTimeout(() => {
            alert("Congratulations! You won the game!");
            endGame();
        }, 500);
    } else if (computerScore >= 5) {
        setTimeout(() => {
            alert("Computer won the game! Better luck next time.");
            endGame();
        }, 500);
    }
}

// Function to end the game and disable buttons
function endGame() {
    document.querySelector(".rook").removeEventListener("click", rockListener);
    document.querySelector(".paper").removeEventListener("click", paperListener);
    document.querySelector(".scissors").removeEventListener("click", scissorsListener);
}

// Add event listeners for player choices
function rockListener() {
    getHumanChoice("rock");
}
document.querySelector(".rook").addEventListener("click", rockListener);

function paperListener() {
    getHumanChoice("paper");
}
document.querySelector(".paper").addEventListener("click", paperListener);

function scissorsListener() {
    getHumanChoice("scissors");
}
document.querySelector(".scissors").addEventListener("click", scissorsListener);
