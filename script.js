/* PSEUDOCODE
Player inputs a number between 1 - 100
The computer returns a random number between 1 - 100
The player's number is compared against the computer's random number
The results are determined based on how close the player's number is to the computer's number
    Exact match = "Jackpot! You win the grand prize!"
    Within 5 = "So close! You win a consolation prize."
    Within 20 = "Nice try! You get a free game token."
    Outside 20 = "No luck this time. Better luck next draw!"
The result should also display the player's drawn number after each round
After a round, the player should be asked if they want to play again
The game should track and show total number of rounds played at the end */

function playerNumber(){
   let playerSelection = Number(prompt("Pick a number between 1 and 100: ", "Enter here"));
    if(playerSelection >= 1 && playerSelection <= 100){
        return playerSelection;
    } else {
        alert("Guess is out of range. Please try again.")
        return playerNumber();
    }
}

function randomNumber(){
    let playerSelection = Math.floor(Math.random() * 100) + 1;
    return playerSelection;
}

// console.log(playerNumber());
// console.log(randomNumber());

function compareNumbers(playerNumber, randomNumber){
    console.log("You chose: " + playerNumber + " and the random number is: " + randomNumber)
    
    if(playerNumber === randomNumber){
        console.log("Jackpot! You win the grand prize!")
    } else if (Math.abs(playerNumber - randomNumber) <= 5){
        console.log("So close! You win a consolation prize.")
    } else if (Math.abs(playerNumber - randomNumber) <= 20){
        console.log("Nice try! You get a free game token.")
    } else {
        console.log("No luck this time. Better luck next draw!")
    }
}

let roundNumber = 0;

function playAgainQuestion(){
    
    let playerAnswer = prompt("Would you like to play another round?","Yes or No?")
    if(playerAnswer.toLowerCase() === "yes"){
        roundNumber++;
        return playRound();
    } else if (playerAnswer.toLowerCase() === "no"){
        roundNumber++;
    } else {
        alert("Please type yes or no")
        return playAgainQuestion();
    }
}

function playRound(){
    
    compareNumbers(playerNumber(),randomNumber());
    playAgainQuestion();

}
// console.log(compareNumbers(playerNumber(),randomNumber()));

// console.log(playRound());


function playGame(){ 
    playRound();
    console.log("You have played " + roundNumber + " rounds.");
}

playGame();