'use strict';

// var knowsManBearPig = prompt('Do you know Man Bear Pig');

// // pick a while loop - go until the condition is false - go until they answer
// // TODO: do while
// while(knowsManBearPig !== 'y' && knowsManBearPig !== 'n' && knowsManBearPig !== 'yeppers'){
//   knowsManBearPig = prompt('you must talk to me about man bear pig - y or yeppers or n please');
// }

// if (knowsManBearPig === 'y' || knowsManBearPig === 'yeppers') {
//   alert('styling css must be so much easier for you');
// } else if (knowsManBearPig === 'n') {
//   alert('man bear pig is how border margin and padding work');
// }


// do {
//   var knowsManBearPig2 = prompt('Do you know Man Bear Pig');
// } while (knowsManBearPig2 !== 'y' && knowsManBearPig2 !== 'n' && knowsManBearPig2 !== 'yeppers');


// if (knowsManBearPig2 === 'y' || knowsManBearPig2 === 'yeppers') {
//   alert('styling css must be so much easier for you');
// } else if (knowsManBearPig2 === 'n') {
//   alert('man bear pig is how border margin and padding work');
// }
// ----------------0. -----1, -----2
var firstArray = ['man', 'bear', 'pig', 'is', 'awesome'];
// arrays start at index 0

// alert( firstArray[1] );

// super helpful for lab ********
for(var index = 0; index < 3; index++){
  // if(firstArray[index] === 'pig'){
  alert(firstArray[index]);
  // }
}

// the holy grail of loops - it iterates from 0 to the length of an array
for(var i = 0; i < firstArray.length; i++){
  alert(firstArray[i]);
}
