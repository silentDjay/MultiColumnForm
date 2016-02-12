//The section below changes the background color of the send your data button upon mouseover/out

var buttonMouseShift = document.querySelector("#sydButton");

buttonMouseShift.addEventListener("mouseover", function () {
  buttonMouseShift.style.backgroundColor = "#1478b1";
});

buttonMouseShift.addEventListener("mouseout", function () {
  buttonMouseShift.style.backgroundColor = "#10689a";
});

//This changes the border color of the field when the <div> containing it is clicked, and then changes it back again once ANYWHERE (body or other field) else is clicked/activated (how do I make it do this when the field is tabbed to????)

var firstNameClick = document.querySelector("#firstNameDiv");
var firstNameBorderSwitch = document.querySelector("#firstName");
// var bodyClick = document.querySelector("body"); this screws stuff up
var lastNameClick = document.querySelector("#lastNameDiv");
var lastNameBorderSwitch = document.querySelector("#lastName");

firstNameClick.addEventListener("click", function() {
  // *.style.borderColor = "#fff"; // try document.querySelectorAll("*") ???
  firstNameBorderSwitch.style.borderColor = "#10689a";//changes border color to 'activated color'
  lastNameBorderSwitch.style.borderColor = "#fff";//changes other field(s)' borders back to white (there's gotta be a global way to do this - maybe create a global activated = true/false variable for each field and set it to false when anything else is clicked!!!!)
  // et cetera as nauseum (I hope not)
  // HOW DO I GET RID OF DEFAULT (BROWSER) BORDER STYLING FOR ACTIVATED FIELDS???
});

lastNameClick.addEventListener("click", function() {
  lastNameBorderSwitch.style.borderColor = "#10689a";//changes border color to 'activated color'
  firstNameBorderSwitch.style.borderColor = "#fff";//changes other field(s)' borders back to white (there's gotta be a global way to do this!!!!)
  // et cetera as nauseum (I hope not)
});

//for the rest of this, you'll need to create a var for the button, as well as a var for each of the fields INPUTS. Then, create an eventlistener to console.log all of the field input vars upon the button click. ONE THING TO TRY: RENAME THE FIELDS AS ITERATIVE VARIABLES, ITERATE THROUGH THE VARIABLE NAMES TO CONSOLE.LOG THEM

var sydClick = document.querySelector("#sydButton");//you already defined a variable with this same value
var firstNameInput = document.querySelector("#firstName");
var lastNameInput = document.querySelector("#lastName");

sydClick.addEventListener("click", function() {
  if (firstNameInput.value !== ""){ // check if the field's value is empty
    console.log(firstNameInput.value); //if it isn't, print it!
  }
  if (lastNameInput.value !== ""){
    console.log(lastNameInput.value);
  }
  //et cetera ad nauseum
});
