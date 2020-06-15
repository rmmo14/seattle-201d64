'use strict';

// put kittens ( with pictures ) on the webpage
// you do not have pictures as a part of your object for lab

// have a homepage
// we will show all the kittens in a specific list built for each kitten
/*
  ul
    li - snowdrop (name : snowdrop)
    li - snowdrop pic
    li - how many kittens snowdrop played with on monday
    li - how many kittens snowdrop played with on tues
    li - how many kittens snowdrop played with on wednesay
    li - how many kittens snowdrop played with on thursday
    li - how many kittens snowdrop played with on friday

    <ul>
    <li>Garfield</li>
    <li> <img src="jenskitten.jpg" alt=""> </li>
    <li>Mon : 1 kitten</li>
    <li>Tues : 10 kittens</li>
    <li>Wed : 11 kittens</li>
    <li>Thurs : 2 kittens</li>
    <li>Fri : 10 kittens</li>
  </ul>
*/

/*
  what keys should my kitten object have
  it is an object about snowdrop
  name : snowdrop // name : ollie
  kittensPlayedWithEachDay : [0, 21, 2, 0, 0] // kittensPlayedWithEachDay: [1, 1, 1, 32, 32]
  picture : 'jenskitten.jpg' // picture: 'olliespic.jpg'
*/

var snowdropTheCat = {
  name : 'Snowdrop',
  picture: 'jenskitten.jpg',
  kittensPlayedWithEachDay: [0, 21, 2, 0, 9],// This needs to be random in your lab

  renderToPage : function(){
    // 1. Finding a target ( a place to put a new html element)
    // 2. Generating a new element (for example a new p tag to live on the page)
    //    2.5 Give that element content ( for a p tag - text, for an img - a src)
    // add it to the page

    // 1. target
    var snowdropsUnorderedList = document.getElementById('snowdrops-ul'); // getElementById takes an argument of the id as a string
    // 2. new element
    var newListItem = document.createElement('li');
    // 2.5 content
    newListItem.textContent = snowdropTheCat.name;
    //3. put it on page
    snowdropsUnorderedList.appendChild(newListItem);
    // parent.appendChild(child);
    // target.appendChild(newElement)

    // 1. target
    // we already have snowdropsUnorderedList
    // 2. new element
    newListItem = document.createElement('li'); // a whole new element
    //2.5 content - which is a whole image - requires rendering an image - to this li

    // ===== 3 steps for image
    //1. for img is find the parent which we already have since its this list item
    //2. create element
    var newImage = document.createElement('img');
    //2.5 content
    newImage.src = snowdropTheCat.picture;
    // 3. append
    newListItem.appendChild(newImage);
    // =======

    // li step 3 - append the li to the ul
    snowdropsUnorderedList.appendChild(newListItem);
    console.log(newListItem);

    // ============== for the kittens each hour
    // 1. already have parent from earlier
    // 2. create element
    var potatoListItem = document.createElement('li');
    // 2.5. content
    potatoListItem.textContent = 'Mon : ' + snowdropTheCat.kittensPlayedWithEachDay[0] + ' kitten';
    // 3 append
    snowdropsUnorderedList.appendChild(potatoListItem);

    var tomatoListItem = document.createElement('li');
    // 2.5. content
    tomatoListItem.textContent = 'Tue : ' + snowdropTheCat.kittensPlayedWithEachDay[1] + ' kitten';
    // 3 append
    snowdropsUnorderedList.appendChild(tomatoListItem);

    var wednesdayListItem = document.createElement('li');
    // 2.5. content
    wednesdayListItem.textContent = 'Wed : ' + snowdropTheCat.kittensPlayedWithEachDay[2] + ' kitten';
    // 3 append
    snowdropsUnorderedList.appendChild(wednesdayListItem);

    var anotherListItem = document.createElement('li');
    // 2.5. content
    anotherListItem.textContent = 'Thur : ' + this.kittensPlayedWithEachDay[3] + ' kitten';
    // 3 append
    snowdropsUnorderedList.appendChild(anotherListItem);

    anotherListItem = document.createElement('li');
    // 2.5. content
    anotherListItem.textContent = 'Fri : ' + snowdropTheCat.kittensPlayedWithEachDay[4] + ' kitten';
    // 3 append
    snowdropsUnorderedList.appendChild(anotherListItem);

    // kittensPlayedWithEachDay: [0, 21, 2, 0, 9],
    // <li>Mon : 1 kitten</li>
  }
};

var ollieTheCat = {
  name : 'Ollie',
  picture : 'olliecat.jpg',
  kittensPlayedWithEachDay : [1, 1, 1, 32, 32],
  renderToPage : function(){
    var parentUnorderedList = document.getElementById('ollie-ul');
    var listItem = document.createElement('li');
    listItem.textContent = this.name; // this === ollieTheCat // this means the object we are in
    parentUnorderedList.appendChild(listItem);

    listItem = document.createElement('li');
    var img = document.createElement('img');
    img.src = this.picture;
    listItem.appendChild(img);
    parentUnorderedList.appendChild(listItem);

    var daysOfTheWeek = ['Mon', 'Tue', 'Wed', 'Thur', 'Fri'];

    for(var i = 0; i < this.kittensPlayedWithEachDay.length; i++){

      listItem = document.createElement('li');
      listItem.textContent = daysOfTheWeek[i] + ' : ' + this.kittensPlayedWithEachDay[i] + ' kittens';
      parentUnorderedList.appendChild(listItem);
    }
  }
};

var felixTheCat = {
  name: 'felix',
  picture: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Felix_the_cat.svg/1200px-Felix_the_cat.svg.png',
  kittensPlayedWithEachDay: [100, 2000, 3, 9090, 2],
  renderToPage: function () {
    var parentUnorderedList = document.getElementById('felix-ul');
    var listItem = document.createElement('li');
    listItem.textContent = this.name; // this === ollieTheCat // this means the object we are in
    parentUnorderedList.appendChild(listItem);

    listItem = document.createElement('li');
    var img = document.createElement('img');
    img.src = this.picture;
    listItem.appendChild(img);
    parentUnorderedList.appendChild(listItem);

    var daysOfTheWeek = ['Mon', 'Tue', 'Wed', 'Thur', 'Fri'];

    for (var i = 0; i < this.kittensPlayedWithEachDay.length; i++) {

      listItem = document.createElement('li');
      listItem.textContent = daysOfTheWeek[i] + ' : ' + this.kittensPlayedWithEachDay[i] + ' kittens';
      parentUnorderedList.appendChild(listItem);
    }
  }
};

// choosing the key value pairs is the data driven part of the domain model
// the visual part involves actually putting html on the page and seeing how it looks


snowdropTheCat.renderToPage();
ollieTheCat.renderToPage();
felixTheCat.renderToPage();
