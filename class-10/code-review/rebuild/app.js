'use strict';

var theForm = document.getElementById('store-form');

theForm.addEventListener('submit', handleAddingNewStore);

function Store(name, minCust,maxCust, avgSales){
  this.name = name;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgSales = avgSales;
}

Store.prototype.calculateHourlySales = function(){
  console.log(this);
  var hourlyData = [];
  for (var i = 0; i < 14; i++) {
    var rando = Math.floor(Math.random() * (this.maxCust - this.minCust) + this.minCust + 1);
    rando = rando * this.avgSales;
    hourlyData.push(rando);
  }
  this.hourlyData = hourlyData;
};

Store.prototype.renderAsRow = function(){
  this.calculateHourlySales();

  var storeTable = document.getElementById('store-table');

  var tableRow = document.createElement('tr');

  // TODO: the name
  var theNameHeader = document.createElement('th');
  theNameHeader.textContent = name;
  tableRow.appendChild(theNameHeader);

  for (var i = 0; i < 14; i++) {
    var newTableData = document.createElement('td');
    newTableData.textContent = this.hourlyData[i];
    tableRow.appendChild(newTableData);
  }

  //TODO: total
  var total = 0;
  for (i = 0; i < 14; i++) {
    // total = total + hourlyData[i];
    total += this.hourlyData[i];
  }
  var totalTableData = document.createElement('td');
  totalTableData.textContent = total;
  tableRow.appendChild(totalTableData);

  storeTable.appendChild(tableRow);
};

function handleAddingNewStore(event) {
  event.preventDefault();

  var name = event.target.location.value;
  var minCust = parseFloat(event.target.minCust.value);
  var maxCust = parseFloat(event.target.maxCust.value);
  var avgSales = parseFloat(event.target['avg-sales'].value);

  var newStore = new Store(name, minCust, maxCust, avgSales);

  newStore.renderAsRow();
}

/* Refactored without constructors
var theForm = document.getElementById('store-form');

theForm.addEventListener('submit', handleAddingNewStore);

function handleAddingNewStore(event){
  event.preventDefault();

  var storeTable = document.getElementById('store-table');

  var name = event.target.location.value;
  var minCust = parseFloat(event.target.minCust.value);
  var maxCust = parseFloat(event.target.maxCust.value);
  var avgSales = parseFloat(event.target['avg-sales'].value);

  var hourlyData = getHourlyData(maxCust, minCust, avgSales);
  makeTableRow(hourlyData, storeTable, name);

}

function getHourlyData (maxCust, minCust, avgSales) {
  var hourlyData = [];
  for (var i = 0; i < 14; i++) {
    var rando = Math.floor(Math.random() * (maxCust - minCust) + minCust + 1);
    rando = rando * avgSales;
    hourlyData.push(rando);
  }
  return hourlyData;
}

function makeTableRow(hourlyData, storeTable, name){
  var tableRow = document.createElement('tr');

  // TODO: the name
  var theNameHeader = document.createElement('th');
  theNameHeader.textContent = name;
  tableRow.appendChild(theNameHeader);

  for (var i = 0; i < 14; i++) {
    var newTableData = document.createElement('td');
    newTableData.textContent = hourlyData[i];
    tableRow.appendChild(newTableData);
  }

  var total = makeTotal(hourlyData);

  var totalTableData = document.createElement('td');
  totalTableData.textContent = total;
  tableRow.appendChild(totalTableData);

  storeTable.appendChild(tableRow);
}

function makeTotal (hourlyData) {
  //TODO: total
  var total = 0;
  for (var i = 0; i < 14; i++) {
    // total = total + hourlyData[i];
    total += hourlyData[i];
  }
  return total;

*/


/* Unrefactored version

'use strict';
//// form -> constructor
// single responsibility rule
// functions : anonymous functions
// make the code DRY

var theForm = document.getElementById('store-form');

theForm.addEventListener('submit', handleAddingNewStore);

function handleAddingNewStore(event) {
  event.preventDefault();
  // we want stuff to appear in the table
  // a table to target
  var storeTable = document.getElementById('store-table');
  // put stuff in the table - data : calculated store hours

  // get stuff from the form - use it to calculate the data
  var name = event.target.location.value;
  var minCust = parseFloat(event.target.minCust.value);
  var maxCust = parseFloat(event.target.maxCust.value);
  var avgSales = parseFloat(event.target['avg-sales'].value);

  // makes hourly data
  var hourlyData = [];
  for (var i = 0; i < 14; i++) {
    var rando = Math.floor(Math.random() * (maxCust - minCust) + minCust + 1);
    rando = rando * avgSales;
    hourlyData.push(rando);
  }

  var tableRow = document.createElement('tr');

  // TODO: the name
  var theNameHeader = document.createElement('th');
  theNameHeader.textContent = name;
  tableRow.appendChild(theNameHeader);

  for (i = 0; i < 14; i++) {
    var newTableData = document.createElement('td');
    newTableData.textContent = hourlyData[i];
    tableRow.appendChild(newTableData);
  }

  //TODO: total
  var total = 0;
  for (i = 0; i < 14; i++) {
    // total = total + hourlyData[i];
    total += hourlyData[i];
  }
  var totalTableData = document.createElement('td');
  totalTableData.textContent = total;
  tableRow.appendChild(totalTableData);

  storeTable.appendChild(tableRow);
}


*/
