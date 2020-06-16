/*

  When would we like to render the chart?
  when rendering the results - after maxClicks

  what data for the chart?
  amount of clicks and times shown

  what should the labels be
  caption of the images

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
new Goat('images/goat-out-of-hand.jpg', 'A goat that is rocking a hand.');
new Goat('images/kissing-goat.jpg', 'A goat that is rocking a kiss.');
new Goat('images/goat-away.jpg', 'A goat that is rocking a away.');
new Goat('images/sweater-goat.jpg', 'A goat that is rocking a sweater.');

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

    if (totalClicks === maxClicks) {
      //IMPORTANT - how to stop an event handler
      goatImageSection.removeEventListener('click', handleClickOnAGoat);
      renderTheChart();
    }

  } else {
    alert('click an img please');
  }
}


//rerendering the images
// picking 2 images
// putting images on the page

function rerenderSomeRandomImages(){
  var firstRandom = pickRandom(0, goatCollection.length);
  // console.log('first new', goatCollection[firstRandom]);

  var secondRandom = pickRandom(0, goatCollection.length);
  // console.log('second new', goatCollection[secondRandom]);

  while(secondRandom === firstRandom){
    secondRandom = pickRandom(0, goatCollection.length);
    // console.log('second new (reroll)', goatCollection[secondRandom]);
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

function renderTheChart(){
  console.log('about to render the chart');

  //TODO: find all the pieces that reference colors and replace them with goat stuff

  // DONE: replace the `label`

  //TODO: replace the labels
  var goatLabels =[];
  for(var i = 0; i < goatCollection.length; i++){
    goatLabels.push(goatCollection[i].imageCaption);
  }


  // TODO: replace the data
  var goatClicks = [];
  for(i = 0; i < goatCollection.length; i++){
    goatClicks.push(goatCollection[i].clicked);
  }

  var ctx = document.getElementById('myChart').getContext('2d');
  var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: goatLabels,
      datasets: [{
        label: 'Goat clicks',
        data: goatClicks,
        backgroundColor: [
          'rgba(' + 255 + ', ' +99 + ', ' + 132 +', 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)'
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)'
        ],
        borderWidth: 1
      },
      {
        label: 'Goat clicks',
        data: goatClicks,
        backgroundColor: [
          'rgba(' + 255 + ', ' + 99 + ', ' + 132 + ', 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)'
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)'
        ],
        borderWidth: 1,
        type: 'line',
      },
      {
        label: 'Goat clicks',
        data: goatClicks,
        backgroundColor: [
          'rgba(' + 255 + ', ' + 99 + ', ' + 132 + ', 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)'
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)'
        ],
        borderWidth: 1,
        type: 'bar',
      }]
    },
    options: {
      // https://stackoverflow.com/questions/26257268/click-events-on-pie-charts-in-chart-js
      onClick: function (event){
        console.log(event);
        console.log(myChart.getElementsAtEvent(event));
      },
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true
          }
        }]
      }
    }
  });
}
