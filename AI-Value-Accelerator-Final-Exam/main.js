
"use strict";

window.addEventListener("DOMContentLoaded", start());

//sounds
let popupSound = document.querySelector("#popupSound")
let diceSound = document.querySelector("#diceSound")
let isModalOpen = false;


function start(){
    loading_anim(); 
    const popup = document.querySelectorAll(".popup");
    const square = document.querySelectorAll(".square");
    
    popup.forEach((each) => each.classList.add("hide"));
    square.forEach((button) => button.addEventListener("click", showModal));

    document.querySelector(".unmutedButton").addEventListener("click", muteSound)
    document.querySelector(".mutedButton").addEventListener("click", unmuteSound)
  
  
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


function restartTimer(){
    time = startingMinutes * 60;
}

function updateCountdown(){
    const minutes = Math.floor(time / 60);
    let seconds = time % 60;
    countDownEl.forEach((e) => e.innerHTML = `${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`);
    time--;
    if(minutes == 0 && seconds == 0){
      restartTimer();
}
}

// setInterval(updateCountdown, 1000);

function showModal(){

    isModalOpen = true;
    restartTimer();
    this.querySelector(".popup").classList.remove("hide");
    // const gameFigure = document.createElement("img");
    // gameFigure.src = "public/assets/gameFigure.png"
    // gameFigure.style.width = "2rem";
    let clickedSquare = this.querySelector('.popup').parentNode;
    popupSound.play();    
    const refreshIntervalId = setInterval(updateCountdown, 1000);

    
    
    
    setTimeout(() => {
      this.querySelector(".popup").classList.add("hide");
      clearInterval(refreshIntervalId);
      isModalOpen = false;
      clickedSquare.style.backgroundColor = 'rgba(145, 145, 145, 0.4)';
      clickedSquare.style.border = '6px solid rgba(255, 255, 255, 0.6)';
      }, 301000); 
    
}  

const squareArray = document.querySelectorAll(".square");
const gameFigure = document.createElement("img");
gameFigure.src = "public/assets/gameFigure2.png"
gameFigure.style.width = "2rem"




squareArray.forEach((square) => {
    square.addEventListener('click', (event) => {
        event.target.insertBefore(gameFigure, event.target.children[0])
      }, true);
    })




function muteSound() {
    document.querySelector(".unmutedButton").classList.add("hidden");
    document.querySelector(".mutedButton").classList.remove("hidden");

    popupSound.muted = true;
    diceSound.muted = true;
}

function unmuteSound() {
    document.querySelector(".mutedButton").classList.add("hidden");
    document.querySelector(".unmutedButton").classList.remove("hidden");

    popupSound.muted = false;
    diceSound.muted = false;
}





  // displaying the answers to the questions

  document.querySelector(".finish-button").addEventListener("click", e =>{
    e.preventDefault();
    const textareas = document.querySelectorAll("textarea");
    console.log(textareas);

    const newArray = [...textareas].map(area => area.value)
   localStorage.setItem("insights", JSON.stringify(newArray))
   window.location = "endScreen.html"
    
  })


