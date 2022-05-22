// document.querySelector(".formz").style.display="none";
// document.querySelector(".formz").style.opacity = "0";
"use strict";


const form = document.querySelector(".formz");
document.querySelector(".insButton").addEventListener("click", showForm);


function showForm(){
    document.querySelector(".endddScreenz").classList.add("hide");
    document.querySelector(".formz").classList.remove("hide")
}

// const form = document.querySelector(".formz");

form.addEventListener("submit", handleSubmit);

function handleSubmit(e){
    
    // window.location.href ='endScreen.html'
    e.preventDefault();
   const payload = {
    content: form.elements.content.value,
   };
   document.querySelector("input[type=submit]").disabled = true;
  
   console.log(payload);
   fetch(`https://portfolio-8a02.restdb.io/rest/final-exam-2`, {
      method: "POST",
      headers: {
        "x-apikey": "61753a458597142da1745988",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    })
    .then(res=>res.json())
    .then((data) => {
  
      const template = document.querySelector("template.insightsTemplate").content;
      const copy = template.cloneNode(true);
      copy.querySelector(".line").textContent = data.content;
      document.querySelector(".mainContainer").appendChild(copy);
    
     
      document.querySelector("input[type=submit]").disabled = false;
  
      form.elements.content.value = "";
    });
  } 
  