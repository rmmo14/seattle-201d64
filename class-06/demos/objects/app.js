'use strict';

// ==========Variable===============

// the variable name and its vale
var car = 'buggy';
// var varName = variable value
// key value pair
// variable name is the key
// value is the value

// =================Arrays=============

var arr = ['red', 'oreo', 'blue raspberry'];
// the key arr stores the value ['red', 'oreo', 'blue raspberry']
//arr has keys which we call indexes
arr[0]; // the key 0 of the array `arr` - this retrieves the value 'red'
arr[1]; // the key 1 of the array `arr` - this retrieves the value 'oreo'
console.log(arr);

// ================== Objects ===================

//==Object literal - syntax is {} - not to be confused with code blocks in functions
// objects are used to organize information that belong to the same thing
// key value pairs are separated by `,`

var exampleObject = {
  key : 'VALUE',
  variableName : 'tomato',
  potato : 'russet'
};

var gatoradeOreo = {
  'color' : 'grey',
  'flavor': 'oreo',
  calories : 550,
  tasty: false,
  ingredients : ['water', 'sugar', 'oreos'],
  container : {
    type: 'bottle',
    sizeInOz: 48,
    material: 'plastic'
  },
  priceInDollars : 4,
  drink : function(){
    console.log('yummmmmmmm');
  }
};

// ============== Object access
// the most important access

// like arrays
console.log('gatorade oreo tastes like ' + gatoradeOreo['flavor']);
console.log(gatoradeOreo[ 'calories' ]);
console.log(gatoradeOreo);
console.log('ingredients[1]', gatoradeOreo['ingredients'][1]);
var ingredients = gatoradeOreo['ingredients'];
console.log(ingredients[1]);

// object in an object
console.log(gatoradeOreo['container']['material']);

gatoradeOreo['drink']();

// ===================Object dot notation

//ObjectWeWantToAccess.KEY

// console.log()
gatoradeOreo.drink();
console.log(gatoradeOreo.flavor);
console.log(gatoradeOreo.calories);
console.log(gatoradeOreo.ingredients);
console.log(gatoradeOreo.ingredients[1]);

// object in an object
console.log(gatoradeOreo.container.material);


// ================ What can we only do with object access notation
var keyIWant = 'tasty';

console.log('tasty with object access : ', gatoradeOreo[ keyIWant ]);
// console.log('tasty ...', {
//   calories: 550,
//   tasty: false,
//   ingredients: ['water', 'sugar', 'oreos'],
// }[keyIWant]);
// console.log('tasty ...', {
//   calories: 550,
//   tasty: false,
//   ingredients: ['water', 'sugar', 'oreos'],
// }['tasty']);
// console.log('tasty ...', false);

console.log('tasty ...', {
  calories: 550,
  tasty: false,
  ingredients: ['water', 'sugar', 'oreos'],
}.keyIWant);
console.log('tasty ...', undefined);

// console.log('tasty with dot notation : ', gatoradeOreo.keyIWant);
// this implies there is a key on gatoradeOreo called `keyIWant` , not that there is a key called tasty



// DOMAIN MODELING

var gatoradeRed = {
  'color': 'red',
  'flavor': 'red',
  calories: 350,
  tasty: true,
  ingredients: ['water', 'sugar', 'red coloring'],
  container: {
    type: 'bottle',
    sizeInOz: 48,
    material: 'plastic'
  },
  priceInDollars: 3.50,
  drink: function () {
    console.log('yummmmmmmmier than oreo');
  }
};
