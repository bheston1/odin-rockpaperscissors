function getComputerChoice() {
    let selection = Math.floor(Math.random() * 3) + 1;
    if (selection == 1){
        return "rock";
    }
    else if (selection == 2) {
        return "paper";
    }
    else {
        return "scissors";
    }
}

function getHumanChoice() {
    let input = prompt("Enter rock, paper, or scissors: ");
    return input.trim().toLowerCase();
}

function playGame() {
    let humanScore = 0;
    let computerScore = 0;
    let maxRounds = 5;

    function playRound() {
        let humanChoice = getHumanChoice();
        let computerChoice = getComputerChoice();

        if (humanChoice != "rock" && humanChoice != "paper" && humanChoice != "scissors") {
            alert("Invalid input");
            playRound();
        }

        // rock
        if (humanChoice == "rock" && computerChoice == "rock") {
            console.log("Tie! Computer chose rock.");
        }
        else if (humanChoice == "rock" && computerChoice == "paper") {
            console.log("You lose! Computer chose paper.");
            computerScore++;
        }
        else if (humanChoice == "rock" && computerChoice == "scissors") {
            console.log("You win! Computer chose scissors.");
            humanScore++;
        }

        // paper
        else if (humanChoice == "paper" && computerChoice == "rock") {
            console.log("You win! Computer chose rock.");
            humanScore++;
        }
        else if (humanChoice == "paper" && computerChoice == "paper") {
            console.log("Tie! Computer chose paper.");
        }
        else if (humanChoice == "paper" && computerChoice == "scissors") {
            console.log("You lose! Computer chose scissors.");
            computerScore++;
        }

        // scissors
        else if (humanChoice == "scissors" && computerChoice == "rock") {
            console.log("You lose! Computer chose rock.");
            computerScore++;
        }
        else if (humanChoice == "scissors" && computerChoice == "paper") {
            console.log("You win! Computer chose paper.");
            humanScore++;
        }
        else if (humanChoice == "scissors" && computerChoice == "scissors") {
            console.log("Tie! Computer chose scissors.");
        }
    }

    for (i = 0; i < maxRounds; i++) {
        playRound();
    }

    console.log(`Game!\nFinal Score\nPlayer: ${humanScore}\nComputer: ${computerScore}`)
}

playGame();