"use strict";

window.addEventListener("DOMContentLoaded", newstart);


function newstart(){
document.querySelector("#sign-in").addEventListener("click", validateForm);

function validateForm(e){
  e.preventDefault();
  console.log("i'M HERE")
  window.location = "/titlescreen.html";
  
}
}
