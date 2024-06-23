let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const genCompChoice = () => {
    //rock, Paper, Scissors
    const options = ["rock", "paper","scissors"];
    const randidx = Math.floor(Math.random()*3);
    return options[randidx];
}

const drawGame = () => {
    console.log("Game Draw");
    msg.innerText = "Draw!";
}

const showWinner = (userWin) => {
    if(userWin){
        console.log("You Win!");
        msg.innerText = "You Win!";
        userScore++;
        userScorePara.innerText = userScore;
    } else{
        console.log("You Can Not Beat Coder");
        msg.innerText = "You Lose!";
        compScore++;
        compScorePara.innerText = compScore;
    }
}

function playGane(userChoice) {
    console.log("user choice =", userChoice);
    //Generate Computer Choice = Modular
    const compChoice = genCompChoice();
    console.log("Computer Choice =", compChoice);

    if (userChoice === compChoice) {
        //Draw Game
        drawGame();
    } else {
        let userWin = true;
        if (userChoice === "rock") {
            userWin = compChoice === "paper" ? false : true;
        } else if (userChoice === "paper") {
            //rock, scissors
            userWin = compChoice === "scissors" ? false : true;
        } else {
            //rock, Paper
            compChoice === "rock" ? false : true;
        }
        showWinner(userWin);
    }
}
choices.forEach((choice)=>{
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        console.log("Choice Selected by User", userChoice);
        playGane(userChoice);
    });
});
