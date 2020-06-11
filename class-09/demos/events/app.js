'use strict';

// 1. you need a target
// 2. you need to add an event listener to that target
// 2.5-a the listener needs a type of event to listen to
// 2.5-b we need a function that the listener can call whenever the event happens
// an Event object will be passed into the callback function, if you define a paramater for it, you can use it

var firstDiv = document.getElementById('first-div');

firstDiv.addEventListener('click', function(event){
  // alert('you clicked the box');
  console.log('click', event.target);
});


var secondDiv = document.getElementById('second-div');

secondDiv.addEventListener('mouseover', handleMouseOverDiv);

function handleMouseOverDiv(){

  secondDiv.style = 'background-color: orange';

}

var thirdDiv = document.getElementById('third-div');
thirdDiv.addEventListener('dblclick', function(){
  thirdDiv.textContent+= '99';
  if(thirdDiv.className !== 'blue'){
    thirdDiv.className = 'blue';
  } else {
    thirdDiv.className = 'red';
  }
});

var sectionDiv = document.getElementById('section-div');

// sectionDiv.addEventListener('mouseover', handleChangingColor);

function handleChangingColor(eventPotato){
  console.log(eventPotato.timeStamp);
  console.log(eventPotato.target);
  if (eventPotato.target.className !== 'blue') {
    eventPotato.target.className = 'blue';
  } else {
    eventPotato.target.className = 'red';
  }
}



// If you want to target more than one div - target the parent of the divs
var section = document.getElementById('boxes');
section.addEventListener('click', function(e){

  if(event.target.tagName === 'DIV'){
    console.log('event target', e.target);

  }
});






