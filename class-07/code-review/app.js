'use strict';

/*
  this. for random number generator did not work
  getting the total sum of cookies for the day, especially within the object
  sales.html being weird with cs unescaped < sign
  naming variables - which should be unique, which can be reused
  one store works, duplicating was difficult - make this as painless as possible
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

var openHourTimes = ['7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm'];

var seattleStore = {
  minNumCustomers : 20,
  maxNumCustomers : 60,
  avgNumCookies : 3.5,
  cookiesSold : [],
  calculateCustomersOnce: function(){
    // get the customers
    var customers = randomizer(this.minNumCustomers, this.maxNumCustomers);
    // return it
    return customers;
  },
  calculateCookiesAllHours : function(){
    for(var i = 0; i < openHourTimes.length; i++){
      var cookies = Math.ceil(this.calculateCustomersOnce() * this.avgNumCookies);
      this.cookiesSold.push(cookies); //.push adds to the end of an array
      // this.cookiesSold[i] = cookies;
    }
  }
};

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
function randomizer(min, max){
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

seattleStore.calculateCookiesAllHours();


