
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

// flightHandlerFunction = () =>{
//     const splitID = event.target.id.split("-")    
//     document.querySelector(`#${splitID[1]}`).classList.remove("disabled");
//     document.querySelector(`#${splitID[1]}`).classList.add("enabled");
// }




// The learning objective of this challenge is to examine existing code that allows users to drag & drop elements around the screen, and use an if condition to prevent the drop from happening when a condition is true. Challenges will require you to practice your Googling skills. There are a couple technical keywords in the requirements below that you can use to find some information on the Web.

// Open this drag & drop JSFiddle project and copy all of the code into a local project in your workspace directory. You won't know what all this code is doing. That's okay! Part of this exercise is about practicing finding your way around code that's over your head-- something you'll have to do a lot on the job.

// The user should be able to drag one of the middle cards into either the top box, or the bottom box. However, there's a problem with the way the code currently works. There's also a couple changes you need to make.

//     If you drag one of the cards into the top/bottom box, and then drag another card into the first one, you get a nested card. You need to prevent this from happening.
//     The user should only be able to drag one card into either box. Use the childNodes property to ensure that, if a card is already in the box, another can't be added.
//     The user should be able to move a card from the top/bottom box back to the middle.

const DragDropManager = Object.create(null, {
  init: {
    value: () => {
      const stages = document.querySelectorAll(".stage")

      stages.forEach(stage => {
        // Gain reference of item being dragged
        stage.ondragstart = e => {
          e.dataTransfer.setData("text", e.target.classList)
        }
      })


      const targets = document.querySelectorAll(".target")

      targets.forEach(target => {
        // Dragover not supported by default. Turn that off.
        target.ondragover = e => e.preventDefault()

        target.ondrop = e => {
          // Enabled dropping on targets
          e.preventDefault()

          // Determine what's being dropped
          const data = e.dataTransfer.getData("text")

          // Append card to target component as child
          // TODO: This should only happen if the target has no children nodes
          if((e.target.classList.contains("target") === true && e.target.childNodes.length === 0) || e.target.classList.contains("grid")){
          e.target.appendChild(document.querySelector(`.${data.split(" ")[1]}`))
          } 
            
          console.log("Target: ", e.target)
          console.log("Data split: ", data.split(" ")[1])
          console.log("Child nodes: ", e.target.childNodes.length)
        }
      })
    }
  }
})

DragDropManager.init()






















