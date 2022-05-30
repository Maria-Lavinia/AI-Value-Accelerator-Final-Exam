
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

function showModal(){
    this.querySelector(".popup").classList.remove("hide");
    
    popupSound.play();

    setTimeout(() => {
        this.querySelector(".popup").classList.add("hide");
        
      }, 9000); 
    //   showForm();  
}  

const square2 = document.querySelectorAll(".square");
square2.forEach((apple) => apple.addEventListener("click", showColor));


function showColor(){
   this.style.backgroundColor = "rgba(180, 180, 180)";
//    this.style.border = "rgba(174, 174, 240)";
//    showForm();
//    this.style.opacity = "50%"; 
//    document.querySelector(".popup").style.pointerEvents = "none";
  }

  document.querySelector(".finfish-button").addEventListener("click", e =>{
    e.preventDefault();
    const textareas = document.querySelectorAll("textarea");
    const header = document.querySelectorAll("header");
    console.log(textareas);

    const newArray = [...textareas].map(area=>area.value)
   localStorage.setItem("insights", JSON.stringify(newArray))
   window.location = "endScreen.html"
    
  })