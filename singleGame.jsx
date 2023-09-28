const SingleGame = (playerSelection, computerSelection) => {
    let user_won = null;
    newPlayerSelection = playerSelection.toLowerCase();

    // user_won = 2 means user lost. user_won = 0 means user drawn. user_won = 1 means user won.
    if (newPlayerSelection === computerSelection) {
        user_won = 0;
    }
    else if (newPlayerSelection === "rock") {
        switch (computerSelection) {
            case "paper":
                user_won = 2;
                break;
            case "scissors":
                user_won = 1;
                break;
        }
    }
    else if (newPlayerSelection === "paper") {
        switch(computerSelection) {
            case "rock":
                user_won = 1;
                break;
            case "scissors":
                user_won = 2;
                break;
        }
    }
    else if (newPlayerSelection === "scissors") {
        switch(computerSelection) {
            case "rock":
                user_won = 2;
                break;
            case "paper":
                user_won = 1;
                break;
        }
    } 
    
    switch(user_won) {
        case 0:
            console.log(`Draw. You drew ${newPlayerSelection} against ${computerSelection}.`)
            return user_won;
        case 1:
            console.log(`Win. You drew ${newPlayerSelection} against ${computerSelection}.`)
            return user_won;
        case 2: 
            console.log(`Lose. You drew ${newPlayerSelection} against ${computerSelection}.`)
            return user_won;
    }
}
