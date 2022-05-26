
"use strict";

window.addEventListener("DOMContentLoaded", start());

//sounds
let popupSound = document.querySelector("#popupSound")
let diceSound = document.querySelector("#diceSound")


function start(){
    loading_anim(); 
    const popup = document.querySelectorAll(".popup");
    const square = document.querySelectorAll(".square");
    
    popup.forEach((each) => each.classList.add("hide"));
    square.forEach((button) => button.addEventListener("click", showModal));
  
  
}

function loading_anim(){
    const number = document.querySelector(".number");
    const game = document.querySelector(".game_board");
    const dice = document.querySelector("#ui_dado");
    const roll = document.querySelector(".rollme");
    const loader = document.querySelector(".loading-animation");
    const blur = document.querySelector(".blur");
    blur.style.visibility="visible";
    number.style.display="visible";
    game.style.display="none";
    game.style.visibility="hidden";
    dice.style.display="none"
    dice.style.visibility="hidden";
    roll.style.display="none";
    roll.style.visibility="hidden";
    setTimeout(() => {
        blur.style.visibility="hidden";
        blur.style.display="none"
        number.style.display="none";
        loader.style.display="none"
        number.style.visibility="hidden"
        game.style.display="block";
        game.style.visibility="visible";
        dice.style.display="block";
        dice.style.visibility="visible";
        roll.style.display="block";
        roll.style.visibility="visible";
    }, 3500);
}

const startingMinutes = 5;
let time = startingMinutes * 60;

const countDownEl =  document.querySelectorAll("#countdown");



function updateCountdown(){
    const minutes = Math.floor(time / 60);
    let seconds = time % 60;
    
countDownEl.forEach((e) => e.innerHTML = `${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`);
// countDownEl.innerHTML = `${minutes}:${seconds}`;
time--;
}
function restartTimer(){
    // startingMinutes = 5;
    time = startingMinutes * 60;
}

// setInterval(updateCountdown, 1000);

function showModal(){
    this.querySelector(".popup").classList.remove("hide");
    restartTimer();
    setInterval(updateCountdown, 1000);
    
    popupSound.play();
    
    setTimeout(() => {
        this.querySelector(".popup").classList.add("hide");

        // setInterval(updateCountdown, 1000);
        
        // document.querySelector(".game").classList.remove("blur2")
        // showTime();
       ;
      }, 300000); 
    //   showForm();  
}  

// console.log(setInterval(updateCountdown, 1000));

const square2 = document.querySelectorAll(".square");
square2.forEach((apple) => apple.addEventListener("click", showColor));


function showColor(){
   this.style.backgroundColor = "rgba(180, 180, 180)";
//    this.style.border = "rgba(174, 174, 240)";
//    showForm();
//    this.style.opacity = "50%"; 
//    document.querySelector(".popup").style.pointerEvents = "none";
  }

//   function showTime() {
//     console.log("showTime");
//     if (timeLeft > 0) {
//         timeLeft--;
//         startTimer();
//         document.querySelector("#time").textContent = timeLeft;
//     } else {
//         youLost();
//     }
// }

// function startTimer() {
//     console.log("startTimer");

   

//     if (timeLeft == 0) {
//         youLost();
//     } else {
//         setTimeout (showTime, 1000);
//     }
    
// }