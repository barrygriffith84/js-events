
//LIGHTNING EXERCISES
// In your JavaScript file, write an click event listener that increases the font size on your form to 3 em when you click it so Jordan can see it
// When you click the button again, the font should go back to a normal size


// const jordanModeButton = document.querySelector("#jordan-mode")

// jordanModeButton.addEventListener("click",
// function(){
// const formElement = document.querySelector("form")
// formElement.classList.toggle("jordan-mode")
// })


// document.querySelector("#jordan-mode").addEventListener("click", 
// function(){
//     document.querySelector("form").classList.toggle("jordan-mode")
// })



// Create an input field in your DOM. Give it an id of message.

// document.body.innerHTML = `<input type="text" name="test-input" id="message">
// <button id="submit-btn">Submit</button>`

// Create two article elements with unique id values. Use Flexbox to display them in a row, each taking 50% of the width of the browser.

// document.body.innerHTML += `<section class="output-containers">
// <article id="article1"></article>
// <article id="article2"></article>
// </section>`

// Give each article a different border color.


// Write an event listener that listens for the keyup event on the input field.
// The event handler function should update the textContent property of both sections.

// document.querySelector("#message").addEventListener("keyup", function(){
//     document.querySelector('#article1').textContent =  document.querySelector("#message").value;
//     document.querySelector('#article2').textContent =  document.querySelector("#message").value;
// }
// )





// Add the correct string as the first argument to addEventListener()
// Write a function named flightHandlerFunction that will remove the disabled class on the corresponding <section id="flight"> (section, not button) and replace it with a class of enabled.
// Have your developer tools open. When you click the button, the following element...
/* {<section id="flight" class="power disabled">

Should then look like this.

<section id="flight" class="power enabled">

Once you have that working, write two more JavaScript functions, and two more querySelector().addEventListener() statements for handling the click event on the other two buttons. Those event handlers should perform the same step of removing disabled, and adding enabled on the corresponding <section> elements

document.querySelector("#activate-mindreading").addEventListener()
document.querySelector("#activate-xray").addEventListener()

Once that is complete, add two more buttons

    Enable All Powers
    Disable All Powers

Write two more event handlers for activating and deactivating all powers when the corresponding buttons are clicked. You will need to use the document.querySelectorAll() method for these. }*/

// document.querySelector("#activate-flight").addEventListener("click", flightHandlerFunction = () =>{
//     document.querySelector("#flight").classList.remove("disabled");
//     document.querySelector("#flight").classList.add("enabled");
// })

// document.querySelector("#activate-mindreading").addEventListener("click", flightHandlerFunction = () =>{
//     document.querySelector("#mindreading").classList.remove("disabled");
//     document.querySelector("#mindreading").classList.add("enabled");
// })

// document.querySelector("#activate-xray").addEventListener("click", flightHandlerFunction = () =>{
//     document.querySelector("#xray").classList.remove("disabled");
//     document.querySelector("#xray").classList.add("enabled");
// })

// document.querySelector("#activate-all").addEventListener("click", flightHandlerFunction = () => {
//     const powerArray = document.querySelectorAll(".power");
//     for (let i = 0; i < powerArray.length; i++) {
//         powerArray[i].classList.remove("disabled");
//         powerArray[i].classList.add("enabled")
        
//     }
// })

// document.querySelector("#deactivate-all").addEventListener("click", flightHandlerFunction = () => {
//     const powerArray = document.querySelectorAll(".power");
//     for (let i = 0; i < powerArray.length; i++) {
//         powerArray[i].classList.remove("enabled");
//         powerArray[i].classList.add("disabled");    
//     }
// })


// Challenge: One Function to Rule Them All

//     The learning objective of this challenge to write a function handler to be used for multiple events, and uses information in the event argument to perform common logic.

// You may notice that your code to enable individual powers (not all at once) is very similar. To keep your code DRY, make one function that will handle activating a power depending on which button is clicked. (Hint: one way to get started is to use event.target.id.split("-") in your function)

flightHandlerFunction = () =>{
    const splitID = event.target.id.split("-")    
    document.querySelector(`#${splitID[1]}`).classList.remove("disabled");
    document.querySelector(`#${splitID[1]}`).classList.add("enabled");
}
























