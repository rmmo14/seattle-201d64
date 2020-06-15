'use strict';

// 1. target
// 2. listen
// 2.5 - type of event
// 2.5b - callback function to handle it (later)
// for forms, a step 3 - is prevent the default behavior of the submit, which is the page refresh - requires an event parameter

var myLoginForm = document.getElementById('login-form');

myLoginForm.addEventListener('submit', function(potatoEvent){
  // ABSOLUTELY NECESSARY - AND ONLY FOR FORMS
  potatoEvent.preventDefault();
  console.log('submitted the form');

  // find it
  var theEvent = potatoEvent; // potatoEvent === theEvent === the submit event
  var theForm = theEvent.target; // when we submit a form, the target is always the form
  console.log('the target (theForm)', theForm);

  var theInputOfFavFood = theForm.favoriteFood; // we can access this input directly from the form because of the NAME ATTRIBUTE on the input
  console.log('the input fav food (theForm.favoriteFood)', theInputOfFavFood);

  var theUsersTypedFavoriteFood = theInputOfFavFood.value;// the .value of the input is the built in property of all inputs that stores what the user put in the input
  console.log('the value of their favFood', theUsersTypedFavoriteFood);

  var theUserNameValue = potatoEvent.target.username.value;
  console.log(theUserNameValue);

  var sportValue = potatoEvent.target.favSport.value;
  var drinkValue = potatoEvent.target.favDrink.value;
  var foodValue = potatoEvent.target.favoriteFood.value;
  var gameValue = potatoEvent.target.favGame.value;

  console.log(sportValue, drinkValue, foodValue, gameValue);
});
