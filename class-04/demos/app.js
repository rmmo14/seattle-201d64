'use strict';

/*
ask a question about friendship

*/
// console.log(x);
// var x = 'I don\'t exist yet';


petPets();
function petPets() {
  console.log('petPets Pets');
  petGinger();
}

petGinger(); // javascript makes !!!2!!! passes of the code - the first pass is entirely for finding the function declarations

var counter = 1;

function sellFriendship(){ // function declaration

  var greeting = 'yo wazzup my name is Nicholas and I\'m here to tell you about the awesome power of friendship!';
  var extra = 'I\'ll sell you 3 packets of friendship for 9 installments of 9.99 today.';
  var theresMore = 'but wait there\'s more, since this is my ' + counter + 'st time talking with you etc etc';
  counter++;

  console.log(greeting);
  console.log(extra);
  console.log(theresMore);
}

// sellFriendship(); // function invocation // we invoke a function
// we call function
// without calling this function the code never runs
// sellFriendship(); //function call
// sellFriendship();
// sellFriendship();

function petGinger () { // function declaration
  console.log('I petted da ginger');
}

// a function that is declared while assigning it to a variable is called a function expression
var petSnowdrop = function (){
  console.log('I petted da snowdrop, ouch she kneaded me');
};

// petSnowdrop();

// petSadie();// because petSadie was a function expression i can only call it after it is declared
var petSadie = function(){
  console.log('Aww sadie you tackled me');
};
// petSadie();

// Functions with parameters
// parameters are variables that belong to a function that receive their value when the function is called

// greeting
function greeting(){
  var yourName = 'Nicholas';
  console.log('hello ' + yourName);
}
// greeting();
// greeting();

function greeting2(yourName){ // this is like saying `var yourName;`
  console.log('hey there ' + yourName);
}
greeting2('Ginger'); // => yourName = 'Ginger
greeting2('Claudio');
greeting2('Richard');

// function countPets(numberOfPets, typeOfPets){ // the variable names are called parameters
//   console.log('you have ' + numberOfPets + ' ' + typeOfPets);
// }

// countPets(3, 'cat and bird and turtle'); // the values passed in are called arguments
// countPets('cat and bird and turtle', 3);


