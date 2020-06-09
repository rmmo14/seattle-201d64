'use strict';

// global vars
// function definitions
// object definitions (will be function invocations too)
// function invocations

function renderCat() {
  console.log('this', this);

  var snowdropsUnorderedList = document.getElementById(this.unorderedListId);
  var newListItem = document.createElement('li');
  newListItem.textContent = this.name;
  snowdropsUnorderedList.appendChild(newListItem);

  newListItem = document.createElement('li'); // a whole new element

  var newImage = document.createElement('img');
  newImage.src = this.picture;
  newListItem.appendChild(newImage);

  snowdropsUnorderedList.appendChild(newListItem);
  console.log(newListItem);

  var potatoListItem = document.createElement('li');
  potatoListItem.textContent = 'Mon : ' + this.kittensPlayedWithEachDay[0] + ' kitten';
  // 3 append
  snowdropsUnorderedList.appendChild(potatoListItem);

  var tomatoListItem = document.createElement('li');
  tomatoListItem.textContent = 'Tue : ' + this.kittensPlayedWithEachDay[1] + ' kitten';
  snowdropsUnorderedList.appendChild(tomatoListItem);

  var wednesdayListItem = document.createElement('li');
  wednesdayListItem.textContent = 'Wed : ' + this.kittensPlayedWithEachDay[2] + ' kitten';
  snowdropsUnorderedList.appendChild(wednesdayListItem);

  var anotherListItem = document.createElement('li');
  anotherListItem.textContent = 'Thur : ' + this.kittensPlayedWithEachDay[3] + ' kitten';
  snowdropsUnorderedList.appendChild(anotherListItem);

  anotherListItem = document.createElement('li');
  anotherListItem.textContent = 'Fri : ' + this.kittensPlayedWithEachDay[4] + ' kitten';
  snowdropsUnorderedList.appendChild(anotherListItem);

}

var snowdropTheCat = {
  name : 'Snowdrop',
  picture: 'jenskitten.jpg',
  kittensPlayedWithEachDay: [0, 21, 2, 0, 9],// This needs to be random in your lab
  unorderedListId: 'snowdrops-ul',
  renderToPage : renderCat
};

var ollieTheCat = {
  name : 'Ollie',
  picture : 'olliecat.jpg',
  kittensPlayedWithEachDay : [1, 1, 1, 32, 32],
  unorderedListId: 'ollie-ul',
  renderToPage : renderCat
};

var felixTheCat = {
  name: 'felix',
  picture: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Felix_the_cat.svg/1200px-Felix_the_cat.svg.png',
  kittensPlayedWithEachDay: [100, 2000, 3, 9090, 2],
  unorderedListId: 'felix-ul',
  renderToPage: renderCat
};



snowdropTheCat.renderToPage();
ollieTheCat.renderToPage();
felixTheCat.renderToPage();
