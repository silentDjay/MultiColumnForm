//The section below changes the background color of the send your data button upon mouseover/out

var buttonMouseShift = document.querySelector("#sydButton");

buttonMouseShift.addEventListener("mouseover", function () {
  buttonMouseShift.style.backgroundColor = "#1478b1";
});

buttonMouseShift.addEventListener("mouseout", function () {
  buttonMouseShift.style.backgroundColor = "#10689a";
});

//This changes the border color of the field when the <div> containing it is clicked, and then changes it back again when a different field is clicked (I only have two fields working for this)

var firstNameClick = document.querySelector("#firstNameDiv");
var firstNameBorderSwitch = document.querySelector("#firstName");
var lastNameClick = document.querySelector("#lastNameDiv");
var lastNameBorderSwitch = document.querySelector("#lastName");

firstNameClick.addEventListener("click", function() {
  firstNameBorderSwitch.style.borderColor = "#10689a";//changes border color to 'activated color'
  lastNameBorderSwitch.style.borderColor = "#fff";
});

// I attempted to make the below function work as a global way to get all fields' borders to go back to white (listed before the 'activated' field's border was changed to blue), but wasn't able to get it working.
// var textFields = document.getElementsByClassName(".textThing");
// for (i = 0; i < textFields.length; i++) {
//       textFields[i].style.borderColor = "#fff";
// }

lastNameClick.addEventListener("click", function() {
  lastNameBorderSwitch.style.borderColor = "#10689a";
  firstNameBorderSwitch.style.borderColor = "#fff";
});
//I could have done this for all other fields, but no thanks.

//this prints all field values (if there is a value in the field) to the console when the send your data button is clicked. As a final step, it also clears the data from all fields.

var firstNameInput = document.querySelector("#firstName");
var lastNameInput = document.querySelector("#lastName");
var emailAddressInput = document.querySelector("#emailAddress");
var chooseCountryInput = document.querySelector("#chooseCountry");
var biographyInput = document.querySelector("#biography");
var phoneNumberInput = document.querySelector("#phoneNumber");
var affiliationsInput = document.querySelector("#affiliations");
var occupationInput = document.querySelector("#occupation");
var catsNameInput = document.querySelector("#catsName");
var favGadgetInput = document.querySelector("#favGadget");
var talentInput = document.querySelector("#talent");
var favDrinkInput = document.querySelector("#favDrink");
var specialPowerInput = document.querySelector("#specialPower");
var weaponOfChoiceInput = document.querySelector("#weaponOfChoice");
var commentsInput = document.querySelector("#comments");

buttonMouseShift.addEventListener("click", function() {
  if (firstNameInput.value !== ""){ // check if the field's value is empty
    console.log(firstNameInput.value); //if it isn't, print it!
  }
  if (lastNameInput.value !== ""){
    console.log(lastNameInput.value);
  }
  if (emailAddressInput.value !== ""){
    console.log(emailAddressInput.value);
  }
  if (chooseCountryInput.value !== ""){
    console.log(chooseCountryInput.value);
  }
  if (biographyInput.value !== ""){
    console.log(biographyInput.value);
  }
  if (phoneNumberInput.value !== ""){
    console.log(phoneNumberInput.value);
  }
  if (affiliationsInput.value !== ""){
    console.log(affiliationsInput.value);
  }
  if (occupationInput.value !== ""){
    console.log(occupationInput.value);
  }
  if (catsNameInput.value !== ""){
    console.log(catsNameInput.value);
  }
  if (favGadgetInput.value !== ""){
    console.log(favGadgetInput.value);
  }
  if (talentInput.value !== ""){
    console.log(talentInput.value);
  }
  if (favDrinkInput.value !== ""){
    console.log(favDrinkInput.value);
  }
  if (specialPowerInput.value !== ""){
    console.log(specialPowerInput.value);
  }
  if (weaponOfChoiceInput.value !== ""){
    console.log(weaponOfChoiceInput.value);
  }
  if (commentsInput.value !== ""){
    console.log(commentsInput.value);
  }
  firstNameInput.value = "";
  lastNameInput.value = "";
  emailAddressInput.value = "";
  chooseCountryInput.value = "";
  biographyInput.value = "";
  phoneNumberInput.value = "";
  affiliationsInput.value = "";
  occupationInput.value = "";
  catsNameInput.value = "";
  favGadgetInput.value = "";
  talentInput.value = "";
  favDrinkInput.value = "";
  specialPowerInput.value = "";
  weaponOfChoiceInput.value = "";
  commentsInput.value = "";
});
