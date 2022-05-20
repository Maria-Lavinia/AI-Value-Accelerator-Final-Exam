
"use strict";
// window.addEventListener("DOMContentLoaded", loading_anim());

window.addEventListener("DOMContentLoaded", start());
// let card;

function start(){
    loading_anim(); 
    // hentData();
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

// async function hentData(){
//     console.log("hentData");
//     const result = await fetch("secondCard.json");
//     card = await result.json();
//     console.log("card", card);
//     visCard();
// }

// function visCard(){
//     console.log("visCard", card);
//     const cardList = document.querySelector(".cardList");
//     const template = document.querySelector("template").content;

//     document.querySelector("#square7").addEventListener("click", showModal);
// }



function showModal(){
    console.log("hej")
    // const popup = document.querySelectorAll("#popup");
    this.querySelector(".popup").classList.remove("hide");

    setTimeout(() => {
        this.querySelector(".popup").classList.add("hide");
      }, 1000);   
}
