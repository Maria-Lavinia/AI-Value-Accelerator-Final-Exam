
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

function showModal(){
    this.querySelector(".popup").classList.remove("hide");
    
    popupSound.play();

    setTimeout(() => {
        this.querySelector(".popup").classList.add("hide");
        
      }, 9000); 
    //   showForm();  
}  

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


const squareArray = document.querySelectorAll(".square");
const gameFigure = document.createElement("img");
gameFigure.src = "public/assets/gameFigure.png"
gameFigure.style.width = "2rem"

squareArray.forEach((square) => {
    square.addEventListener('focus', (event) => {
        //event.target.style.backgroundColor = 'pink';
        event.target.appendChild(gameFigure)
      }, true);

    square.addEventListener('blur', (event) => {
        event.target.style.backgroundColor = '#04304A';
        event.target.style.border = '6px solid black';
        
      }, true);
    ;})

//square2.forEach((apple) => apple.addEventListener("click", showColor));


/* square2.addEventListener('focus', (event) => {
    event.target.style.backgroundColor = 'pink';
  }, true); */

/* square2.addEventListener('blur', (event) => {
    event.target.style.backgroundColor = 'rgba(180, 180, 180)';
    
  }, true); */


/* function showColor(){

    document.querySelector(".square").addEventListener('focus', (event) => {
        event.target.style.backgroundColor = 'pink';
      });
      
   this.style.backgroundColor = "rgba(180, 180, 180)";

   this.style.border = "rgba(174, 174, 240)";
   showForm();
   this.style.opacity = "50%"; 
   document.querySelector(".popup").style.pointerEvents = "none";
  } */



// function showForm(){
//     setTimeout(() => {
//         const game3 = document.querySelector(".game_board");
//         game3.style.display="none";
//         game3.style.visibility="hidden";
//         document.querySelector("#ui_dado").style.display="none";
//         document.querySelector(".rollme").style.display = "none";
//         document.querySelector(".formz").classList.remove("hide")
         
//        }, 7000); 
// }


// const form = document.querySelector(".formz");


// form.addEventListener("submit", handleSubmit);
    
//   function handleSubmit(e){
//     document.querySelector(".formz").classList.add("hide")
//     // window.location.href ='endScreen.html'
//     e.preventDefault();
//    const payload = {
//     content: form.elements.content.value,
//    };
//    document.querySelector("input[type=submit]").disabled = true;
  
//    console.log(payload);
//    fetch(`https://portfolio-8a02.restdb.io/rest/final-exam-2`, {
//       method: "POST",
//       headers: {
//         "x-apikey": "61753a458597142da1745988",
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(payload),
//     })
//     .then(res=>res.json())
//     .then((data) => {
  
//       const template = document.querySelector("template.insightsTemplate").content;
//       const copy = template.cloneNode(true);
//       copy.querySelector(".line").textContent = data.content;
//       document.querySelector(".mainContainer").appendChild(copy);
    
     
//       document.querySelector("input[type=submit]").disabled = false;
  
//       form.elements.content.value = "";
//     });
//   } 