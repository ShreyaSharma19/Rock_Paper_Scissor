let userScore=0;
let compScore=0;

const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const resetbtn=document.querySelector("#reset");

const userScorePara=document.querySelector("#user-score");
const compScorePara=document.querySelector("#comp-score");

const resetGame=()=>{
    userScore=0;
    userScorePara.innerText=userScore;
    compScore=0;
    compScorePara.innerText=compScore;
    playGame(userChoice);
}

const genCompChoice=()=>{
    const opt=["rock","paper","scissors"];
    const randIdx=Math.floor(Math.random()*3);
    return opt[randIdx];
}

const drawGame=()=>{
    msg.innerText="Game draw.Play again!";
    msg.style.backgroundColor=" #081b31";
}

const showWinner=(userWin,userChoice,compChoice)=>{
    if(userWin){
        userScore++;
        userScorePara.innerText=userScore;
        msg.innerText=`You win!Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor="green";
    }else{
        compScore++;
        compScorePara.innerText=compScore;
        msg.innerText=`You lose!${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor="red";
    }
}

const playGame=(userChoice)=>{
   
    const compChoice=genCompChoice();

    if(userChoice===compChoice){
        drawGame();
    }else{
        let userWin=true;
        if(userChoice==="rock"){
            userWin=compChoice==="paper"?false:true;
        }else if(userChoice==="paper"){
             userWin=compChoice==="scissors"?false:true;
        }else{
            userWin=compChoice==="rock"?false:true;
        }
        showWinner(userWin,userChoice,compChoice);  
      }
}

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id");
        playGame(userChoice);
    })
})

resetbtn.addEventListener("click",resetGame);