'use strict';

var button = document.getElementById('click-me');
var h1 = document.getElementById('the-number');

var thingFromLocalStorage = localStorage.getItem('high score');
if(thingFromLocalStorage !== null){
  h1.textContent = localStorage.getItem('high score');
} else {
  h1.textContent = 10;
}

button.addEventListener('click', function(){
  h1.textContent++;
  localStorage.setItem('high score', h1.textContent);
});

var clearButton = document.getElementById('wipe-high-score');
clearButton.addEventListener('click', function(){
  // localStorage.clear();
  localStorage.removeItem('high score');
  alert('mwua ha ha I have the high score now');
});


// We will store things in local storage
// local storage is unique to your machine
// local storage is unique to your browser
// its a secure way for the browser to store info on your harddrive
// other websites can't access each others local storage

// Local storage has a getter and a setter
// getters and setters are functions that save and retrieve data

//setItem takes 2 arguments : the key (or variable name), and the value
// localStorage.setItem('cool', 'beans');

// getItem takes 1 argument - the key
var asdf = localStorage.getItem('cool'); // === 'beans', returns the string of 'beans'

console.log('asdf', asdf);

// Objects and local storage

// localstorage stores strings
// are objects strings? NO


function Puppy(name, cuteness, friendly, friends){
  this.name = name;
  this.cuteness = cuteness;
  this.friendly = friendly;
  this.friends = friends;

}




var ginger = new Puppy('Ginger', 9000, true, ['rufus', 'chez', 'sadie']);
console.log(ginger);

localStorage.setItem('gingerPotato', ginger);


// steps for storage of an object
// 1. stringify the object (the right way) with JSON.stringify()
// 2. store the stringy object in local storage with localStorage.setItem

var stringyGinger = JSON.stringify(ginger);
console.log('stringyGinger before local storage', stringyGinger);
localStorage.setItem('stringyGingerPotato', stringyGinger);


// steps for retrieval of an object from local storage
// 1. get item from local storage with localStorage.getItem()
// 2. unStringify the object, hydrate the dehydrated object, with JSON.parse()

var gingerThatCameFromLocalStorage = localStorage.getItem('stringyGingerPotato');
console.log('gingerThatCameFromLocalStorage', gingerThatCameFromLocalStorage);

var unStringyGinger = JSON.parse(gingerThatCameFromLocalStorage);
console.log('the un stringy hydrated ginger', unStringyGinger);

// JSON javascript string object notation
// .json file its just stringy objects inside


