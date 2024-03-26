let userScore = 0;
let aiScore  = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const aiScorePara = document.querySelector("#ai-score");
const drawGame = () => {
    msg.innerText = "Game was draw, play again";
    msg.style.backgroundColor = "#081b31";
}
const showWinner = (userWin, userChoice, compChoice) =>
{
    if(userWin)
    {
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `You win!, Your ${userChoice} beats ${compChoice}`
        msg.style.backgroundColor="green"
    }else{
        aiScore++;
        aiScorePara.innerText = aiScore;
        msg.innerText = `You Lose!, ${compChoice} beats your ${userChoice}  `;
        msg.style.backgroundColor = "red"
    }
}

const genCompChoice = () => {
    const options = ["rock","paper","scissors"];
    //random index
    const randIdx = Math.floor(Math.random() * 3);
    return options [randIdx];
}
const playGame = (userChoice) =>
{
    //generate computers choice
    const compChoice = genCompChoice();
    if(userChoice === compChoice)
    {
        drawGame();
    }
    else{
        let userWin = true;
        if(userChoice === "rock"){
            userWin = compChoice === "paper" ? false : true;
        }
        else if(userChoice === "paper")
        {
            userWin = compChoice === "scissors" ? false : true;
        }
        else
        {
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin , userChoice , compChoice);
    }
}

choices.forEach((choice) => {
    choice.addEventListener("click" , () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    })
})