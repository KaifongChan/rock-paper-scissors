const getComputerChoice = () => {
    const choice = ["rock", "paper", "scissors"];
    const randomChoice = Math.floor(Math.random() * choice.length);
    return choice[randomChoice];
}

const game = () => {
    let user_number_of_wins = 0;
    let computer_number_of_wins = 0;
    let idx = 0
    while (idx < 5) {
        let computerSelection = getComputerChoice();
        const playerSelection = prompt("What is your decision? ");
        let outcome = SingleGame(playerSelection, computerSelection);
        // user_won = 2 means user lost. user_won = 0 means user drawn. user_won = 1 means user won.
        if (outcome === 1) {
            user_number_of_wins += 1;
        }
        else if (outcome === 2) {
            computer_number_of_wins += 1; 
        }
        
        idx += 1;
    }

    if (user_number_of_wins === computer_number_of_wins) {
        return `You drew with the computer, both had ${user_number_of_wins}`
    }
    
    return user_number_of_wins > computer_number_of_wins ? `You won with ${user_number_of_wins} wins.` : `The computer won with ${computer_number_of_wins}`
}


