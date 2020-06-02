'use strict'; // a string at the start of the file
// chrome reads this string and decides to be strict about the js that runs on th page

/*
  About Nich

  How tall is nich in inches - 73
  if they are exactly right
    you are correct
  else
    prompt to try again

  how old is nich - more than 20 less than 40
  if they are between the range

  if greater
    try a little younger
  if less
    but then i couldnt do over 21 things

  "is nich" - yes
  if they are eactly right
    yay
  else
    nay
*/

var theAnswer = prompt('is nich?');

// 'Y' is truthy, because it exists
// a variable by itself is an implicit conditional in anything checking for true or false. Because it exists the condition evaluates true
// 0, null, undefined, '', NaN are the things that evaluate as false in this kind of check// they are falsey

if(theAnswer === 'yes' || theAnswer === 'Y' || theAnswer === 'y'){
  console.log('nice job');
  console.log('they answered is nich correctly');
} else {
  console.log('booooooo, of course nich is');
}


var howTallTheyThinkNichIs = prompt('how tall is nich');
// prompt returns a string
// the number 73 !== '73' // !== opposite of ===

if(howTallTheyThinkNichIs === '73'){
  console.log('how did you know? he\'s sitting');
} else {
  console.log('try again');
  howTallTheyThinkNichIs = prompt('nope');
  console.log('howTall : ', howTallTheyThinkNichIs);
  console.log('howTall type : ', typeof howTallTheyThinkNichIs);
  if(howTallTheyThinkNichIs === '73'){
    console.log('finally! nice work');
  } else {
    console.log('you failed');

  }
}

var nichAgeGuess;

nichAgeGuess = prompt('how old do you think nich is?');
var nichAgeGuessAsANumber = parseInt(nichAgeGuess); // parseInt turns a string to a number

if (nichAgeGuessAsANumber > 20 && nichAgeGuessAsANumber < 40){
  console.log('you are in the ballpark');
} else if( nichAgeGuessAsANumber < 20) {
  console.log('way too low');
} else if(nichAgeGuessAsANumber > 40){
  console.log('way too high');
} else {
  console.log('idk what you said but it was not a number, dum dum');
}

//confirm returns true or false
var nichIsATeacherGuess = confirm('is nich a teacher');

// if(nichIsATeacherGuess === true){
//   console.log('yep');
// } else {
//   console.log('nope');
// }

// these are the same

if (nichIsATeacherGuess) {
  console.log('yep');
} else {
  console.log('nope');
}


