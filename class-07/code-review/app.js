'use strict';

/*
  this. for random number generator did not work // because it was a function that was not a method of our obkect
  getting the total sum of cookies for the day, especially within the object
  naming variables - which should be unique, which can be reused// all object should share the same keys if they represent the same model
  one store works, duplicating was difficult - make this as painless as possible
  appending: display name above the list // make sure it has somewhere to live
  */


/*
The Plan

create the objects with these properties
store - min - max - avg
seattle- 20 - 60 - 4.2
tokyo - 15 - 105 - 3.1
belgium - 7 - 19 - 1.3

set up global variables - open hour times ( 7am - 5pm)

function randomizer - any min, any max - returns something random between them

calculate amount of customers for one hour
  - use the randomizer

calculate amount of cookies for all hours

render function to html
  - make sure to add the name
  - 3.5 steps  : target, create element, give it content, append it to parent
  - target: unordered list, (document.getElementById)
  - new element : list items, (document.createElement)
  - content: 7am : 76 cookies
  - put back together : .appendChild

invoke the functions
*/
// min - max - avg

var openHourTimes = ['7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm'];

function randomizer(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function calculateCustomersOncePotato() {
  // get the customers
  var customers = randomizer(this.minNumCustomers, this.maxNumCustomers);
  // return it
  return customers;
}

function calculateCookiesAllHours() {
  for (var i = 0; i < openHourTimes.length; i++) {
    var cookies = Math.ceil(this.calculateCustomersOnce() * this.avgNumCookies);
    this.cookiesSold.push(cookies); //.push adds to the end of an array
    // this.cookiesSold[i] = cookies;
  }
}

function renderStore(unorderdListId) {
  // put the text somewhere


  var unorderedList = document.getElementById(unorderdListId);

  for (var i = 0; i < openHourTimes.length; i++) {

    var listItem = document.createElement('li');
    listItem.textContent = openHourTimes[i] + ' ' + this.cookiesSold[i] + ' cookies';
    unorderedList.appendChild(listItem);
  }

  // now render the total as a list item

  // var divPotato = document.getElementById('seattle-name');
  // var p = document.createElement('p');
  // p.textContent = this.name;
  // divPotato.appendChild(p);

  var nameP = document.getElementById(this.paragraphId);
  nameP.textContent = this.name;

}

function totalTheCookies(){
  var total = 0;
  // iterate through the cookies and add them to the total
  return total;
}

var seattleStore = {
  minNumCustomers : 20,
  maxNumCustomers : 60,
  avgNumCookies : 3.5,
  cookiesSold : [],
  name: 'Seattle',
  paragraphId : 'seattle-name-p',

  calculateCustomersOnce: calculateCustomersOncePotato, // assigning the key calcCustomersOnce the value of the function calculateCustomersOncePotato
  calculateCookiesAllHours : calculateCookiesAllHours,
  renderStore : renderStore,
  totalTheCookies : totalTheCookies
};

var tokyoStore = {
  minNumCustomers: 1,
  maxNumCustomers: 2,
  avgNumCookies: 3,
  cookiesSold: [],
  name: 'Tokyo',
  paragraphId : 'tokyo-name-p',

  calculateCustomersOnce: calculateCustomersOncePotato,
  calculateCookiesAllHours: calculateCookiesAllHours,
  renderStore: renderStore
};



// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random


seattleStore.calculateCookiesAllHours();
seattleStore.renderStore('seattle');

tokyoStore.calculateCookiesAllHours();
tokyoStore.renderStore('tokyo');

