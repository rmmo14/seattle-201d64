'use strict';


// Form stuff

var catAdoptionForm = document.getElementById('adopt');

catAdoptionForm.addEventListener('submit', adoptCatFromForm);

function adoptCatFromForm(eventPotato){
  eventPotato.preventDefault();

  // add a cat to the list of cats
  // calling the constructor
  //function Cat(catsName, imgSrc, playArray, unorderedListId) {
  // newCat.renderCatToTable();

  var name = eventPotato.target['cat-name'].value;
  var src = eventPotato.target.imgSrc.value;
  var arr = eventPotato.target.playArray.value;
  var id = eventPotato.target.potato.value;
  console.log(name, src, arr, id);

  var newCat = new Cat(name, src, arr, id);
  newCat.renderCatInTable();
}

// end form stuff




























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

function renderCatInTable(){
  // have a target
  var table = document.getElementById('kitten-table');
  // make a new element
  // things that go in tables are rows
  var tableRow = document.createElement('tr');
  // give it content
  // the content for a table row IS : a td

  // ===============2.5 for a row
  //    step 1. have a parent: tableRow
  //    step 2. create an element: td
  var tableCell = document.createElement('td');
  //    2.5 content : the cat name
  tableCell.textContent = this.name;
  //    3. append it to parent
  tableRow.appendChild(tableCell);
  // =============== 2.5 for row is done

  for(var i = 0; i < this.kittensPlayedWithEachDay.length; i++){

    tableCell = document.createElement('td');
    tableCell.textContent = this.kittensPlayedWithEachDay[i];
    tableRow.appendChild(tableCell);
  }

  //3 FOR ROW.  append it
  table.appendChild(tableRow);

}

function Cat(catsName, imgSrc, playArray, unorderedListId){
  this.name = 'Super-' + catsName;
  this.picture = imgSrc;
  this.kittensPlayedWithEachDay = playArray;
  this.unorderedListId = unorderedListId;
  this.cute = true;
  this.barcode = 11010100010100101;
}

// prototype is only used with constructor functions
Cat.prototype.renderToPage = renderCat;

Cat.prototype.renderCatInTable = renderCatInTable;



var snowdrop = new Cat('snowdrop', 'jenskitten.jpg', [0, 21, 2, 0, 9], 'snowdrops-ul');
var ollie = new Cat('ollie', 'olliecat.jpg', [1, 1, 1, 32, 32], 'ollie-ul');
var felix = new Cat('FELIX', 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Felix_the_cat.svg/1200px-Felix_the_cat.svg.png', [0, 21, 2, 0, 9], 'felix-ul');

snowdrop.renderToPage();
ollie.renderToPage();
felix.renderToPage();

snowdrop.renderCatInTable();
ollie.renderCatInTable();
felix.renderCatInTable();

// var snowdropTheCat = {
//   name : 'Snowdrop',
//   picture: 'jenskitten.jpg',
//   kittensPlayedWithEachDay: [0, 21, 2, 0, 9],// This needs to be random in your lab
//   unorderedListId: 'snowdrops-ul',
//   renderToPage : renderCat
// };

// var ollieTheCat = {
//   name : 'Ollie',
//   picture : 'olliecat.jpg',
//   kittensPlayedWithEachDay : [1, 1, 1, 32, 32],
//   unorderedListId: 'ollie-ul',
//   renderToPage : renderCat
// };

// var felixTheCat = {
//   name: 'felix',
//   picture: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Felix_the_cat.svg/1200px-Felix_the_cat.svg.png',
//   kittensPlayedWithEachDay: [100, 2000, 3, 9090, 2],
//   unorderedListId: 'felix-ul',
//   renderToPage: renderCat
// };

// snowdropTheCat.renderToPage();
// ollieTheCat.renderToPage();
// felixTheCat.renderToPage();


