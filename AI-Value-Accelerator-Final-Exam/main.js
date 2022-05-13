//login
"use strict";
//login

// function validateForm() {
//     var x = document.forms["myForm"]["username"]["password"].value;
//     if (x == "") {
//       return false;
//     }
//   }
//  const form = document.querySelector("#myForm");
//  form.addEventListener("submit", (e) =>{
//    e.preventDefault();
//    onchange="try{setCustomValidity('')}catch(e)"
//  })

//game

function init() {
  
    const screen = document.querySelector(".game");
    const loader = document.querySelector(".number");
    screen.style.display = "none";
    
    const properties = {
    duration: 1000,
    iteration: 1,
    
    }

    const keyframes = [
         {transform: 'rotateY(90deg)'},
        {transform: 'rotateY(-90deg)'}
    ]

    const animation = loader.animate(keyframes, properties)

    setTimeout(() => {
      animation.style.display = "none";
      animation.style.visibility = "hidden";
    }, 3000);
  
  }

  console.log(init());
  //end of loading anim
