/*
PD: show side by side goat images
track their clicks
after a set amount of clicks, display the results of how many times they were clicked

accessibility - alt text for images, grouping any buttons well (with labels and names)

how large the images should be (don't let one take up the whole page)

show goats based on past times shown
  dont repeat goats back to back
  dont repeat goats in a single cycle
  dont show the same goat next to itself - function

Randomizing the goats shown

//What info does our object need?
how many times its been clicked - start it at 0
how many times its been shown- start it at 0
-- times clicked / times shown  = precentage of popularity\

in order to render - the image itself - and a description

*/

// ======= Global variables ======
var goatCollection = [];
var totalClicks = 0;
var maxClicks = 5;

// constructors are always nouns
function Goat(imageSource, caption){
  this.clicked = 0;
  this.shown = 0;
  this.imageSrc = imageSource;
  this.imageCaption = caption;

  goatCollection.push(this);
}

new Goat('images/cruisin-goat.jpg', 'A goat that is cruisin.');
new Goat('images/smiling-goat.jpg', 'A goat that is rocking a smile.');
new Goat('images/float-your-goat.jpg', 'A goat that is rocking a float.');
new Goat('images/sassy-goat.jpg', 'A goat that is rocking a sass.');
// new Goat('images/sweater-goat.jpg', 'A goat that is rocking a sweater.');

// Set up the event listener
// target something
var goatImageSection = document.getElementById('goat-images');
// add the listener
goatImageSection.addEventListener('click', handleClickOnAGoat);
// select a type
// callback function
function handleClickOnAGoat(event){
  if(event.target.tagName === 'IMG'){
    // every time we click a goat, track that a global click has happened
    totalClicks++;

    if(totalClicks === maxClicks){
      //IMPORTANT - how to stop an event handler
      goatImageSection.removeEventListener('click', handleClickOnAGoat);
    }

    // use the src of the image to find the right goat - and tally a click
    // https://stackoverflow.com/questions/14221231/find-relative-path-of-a-image-tag-javascript
    var targetSrc = event.target.getAttribute('src');
    for(var i = 0; i < goatCollection.length; i++){
      if (goatCollection[i].imageSrc === targetSrc) {
        // console.log('it was', goatCollection[i]);
        goatCollection[i].clicked++;
      }
    }

    // RENDER
    rerenderSomeRandomImages();


  } else {
    alert('click an img please');
  }
}


//rerendering the images
// picking 2 images
// putting images on the page

function rerenderSomeRandomImages(){
  var firstRandom = pickRandom(0, goatCollection.length);
  console.log('first new', goatCollection[firstRandom]);

  var secondRandom = pickRandom(0, goatCollection.length);
  console.log('second new', goatCollection[secondRandom]);

  while(secondRandom === firstRandom){
    secondRandom = pickRandom(0, goatCollection.length);
    console.log('second new (reroll)', goatCollection[secondRandom]);
  }
  // Brain stretch- you are displaying 3 images- pick three unique

  // new way to change what is on the page
  // just change the content that is already there
  // target the element, and change the relevant piece
  var leftImage = document.getElementById('left-image');
  var leftText = document.getElementById('left-text');
  var rightImage = document.getElementById('right-image');
  var rightText = document.getElementById('right-text');

  leftImage.src = goatCollection[firstRandom].imageSrc;
  leftText.textContent = goatCollection[firstRandom].imageCaption;
  goatCollection[firstRandom].shown++;

  var secondGoat = goatCollection[secondRandom];
  rightImage.src = secondGoat.imageSrc;
  rightText.textContent = secondGoat.imageCaption;
  secondGoat.shown++;

  // Brain stretch, don't repeat the last 2 picked goats
  // this will  be a requirement later
}

function pickRandom(min, max){
  return Math.floor(Math.random() * (max - min) + min);
}
