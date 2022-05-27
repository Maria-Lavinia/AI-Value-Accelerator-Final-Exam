"use strict";

document.querySelector(".endScreenBtn").addEventListener("click", showInsights);

function submit() {
  const insightsForm = document.querySelectorAll(".insightsForm");
  // const insightsForm = document.querySelectorAll(".insightsForm textarea");

  const inputArr = [
    insightsForm.forEach((input) => {
      // console.log(input.value);

      const data = input.querySelector(".input").value;

      // let inputArr = [...inputArr, input.value];
      // console.log(inputArr);

      // insightsForm.forEach((input) => {
      //   console.log(input.value);

      //   let inputArr = [...inputArr, input.value];
      //   console.log(inputArr);
      console.log(data);
      return { data };
    }),
  ];
  console.log(inputArr)
}

function showInsights (){
  document.querySelector(".endddScreenz").classList.add("hidden");

  submit();
}


//  document.querySelector(".finfish-button").addEventListener("click", e =>{
//    e.preventDefault();
//    const textareas = document.querySelectorAll("textarea");

//    const newArray = [...textareas.map(area=>area.value)]
//   localStorage.setItem("insights", JSON.stringify(newArray))
//   window.location = "endScreen.html"
   
//  })
// const form = document.querySelector(".formz");
// document.querySelector(".insButton").addEventListener("click", showForm);


// function showForm(){
//     document.querySelector(".endddScreenz").classList.add("hidden");
//     document.querySelector(".formz").classList.remove("hidden")
// }

// // const form = document.querySelector(".formz");

// form.addEventListener("submit", handleSubmit);

// function handleSubmit(e){
//     e.preventDefault();
//     document.querySelector(".formz").classList.add("hidden")
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
  