// select parts of the document & store them in variables
let textSpan = document.querySelector("p span");
let kittenPic = document.querySelector("img");

// create a new variable to store kitten clicks
let kittenClicks = 0;

// set up the kittenPic to listen for clicks
kittenPic.addEventListener("click", function () {
  // and run commands when the kitten is clicked
  kittenClicks = kittenClicks + 1;
  console.log("You kitten clicked " + kittenClicks + " times!");
  textSpan.innerText = kittenClicks;
});
