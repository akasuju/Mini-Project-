let userScore=0;
let compScore=0;
const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const cscore=document.querySelector("#comp-score");
const uscore=document.querySelector("#user-score");

// console.log(choices)

const genCompChoice=()=>{
    const opt=["rock","paper","scissor"];
    const randIdx=Math.floor(Math.random()*3);
    return opt[randIdx]
}
const drawGame=()=>{
// console.log("Game Was Draw");
msg.innerText="Game Was Draw";
msg.style.backgroundColor="#081b31";
}

const showWinner=(userWin, userChoice, compChoice)=>{
if(userWin){
    userScore++;
    uscore.innerText=userScore;
    // console.log("you Win");
    msg.innerText=`You Win! Your ${userChoice} beats ${compChoice}`;
    msg.style.backgroundColor="Green";
}else{
    // console.log("You Loose");
    compScore++;
    cscore.innerText=compScore;
    msg.innerText=`You Loose. Your ${userChoice} lost with ${compChoice}`;
    msg.style.backgroundColor="Red";
    
}
}

const playGame=(userChoice)=>{
console.log("User Choice=",userChoice)
const compChoice=genCompChoice();
console.log("Computer Choice=",compChoice)
if(userChoice===compChoice){
    drawGame();
} else{
    let userWin=true;
    if(userChoice==="rock"){
        userWin=compChoice==="paper"?false:true;
    }
    else if(userChoice==="paper"){
        userWin=compChoice==="scissor"?false:true;
    }
    else if(userChoice==="scissor"){
        userWin=compChoice==="rock"?false:true;
    }
    showWinner(userWin, userChoice, compChoice);
}
}

choices.forEach((choice) => {
    // console.log(choice);
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id");
        // console.log("Choice Was Clicked",userChoice);
        playGame(userChoice);
    })
})


