'use strict'
//hours of operation
var hours = ['6:00am', '7:00am', '8:00am', '9:00am', '10:00am', '11:00am', '12:00pm', '1:00pm', '2:00pm', '3:00pm', '4:00pm', '5:00pm', '6:00pm', '7:00pm', '8:00pm']
CookieStand.all = [];
//This will be the grand total of all cookies at all shops
var grandTotal = 0;
//Constructor Function
function CookieStand(name, minimum, maximum, average) {
  this.name = name;
  this.min = minimum;
  this.max = maximum;
  this.average = average;
  //total will be incremented per location per hour
  this.total = 0;
  //will be an array of hourly totals
  this.cookiesToBake = [];
  CookieStand.all.push(this);
}

//generates a random number of customers per hour between locations min and max
CookieStand.prototype.customersPerHour = function () {
  var range = this.max - this.min;
  return Math.floor(Math.random() * range) + this.min;
}

//calculates the number of cookies sold per hour for each location
CookieStand.prototype.cookiesPerHour = function () {
  for (var i = 0; i < hours.length; i++) {
    var howMany = Math.floor(this.customersPerHour() * (this.average));
    this.total += howMany
    this.cookiesToBake.push(howMany);

  } grandTotal += this.total;
}

//prints to the browser
CookieStand.prototype.render = function () {
  this.cookiesPerHour();
  var newTR = document.createElement('tr');
  var locationTag = document.createElement('td');
  locationTag.textContent = this.name;
  newTR.appendChild(locationTag);
  for (var i = 0; i < this.cookiesToBake.length; i++) {
    var newTD = document.createElement('td');
    newTD.textContent = this.cookiesToBake[i];
    newTR.appendChild(newTD);
  }
  var dailyTotal = document.createElement('td');
  dailyTotal.textContent = this.total;
  newTR.appendChild(dailyTotal);
  return newTR;
}

//Prints header, then table content, then footer with grand total
function printTable() {
  var table = document.getElementById("cookieTable");
  table.appendChild(tableHeader());
  for (var i = 0; i < CookieStand.all.length; i++) {
    table.appendChild(CookieStand.all[i].render());
  }
  table.appendChild(tableFooter());
}
//builds header
function tableHeader() {
  var newTR = document.createElement('tr');
  var locationTag = document.createElement('th');
  locationTag.textContent = 'Location';
  newTR.appendChild(locationTag);
  for (var i = 0; i < hours.length; i++) {
    var newTH = document.createElement('th');
    newTH.textContent = hours[i];
    newTR.appendChild(newTH);
  }
  var dailyTotals = document.createElement('th');
  dailyTotals.textContent = 'Daily totals:';
  newTR.appendChild(dailyTotals);
  return newTR;

}
//builds footer
function tableFooter() {
  var newTR = document.createElement('tr');
  var tFName = document.createElement('td');
  tFName.textContent = 'Hourly Totals:';
  newTR.appendChild(tFName);
  for (var i = 0; i < hours.length; i++) {
    var locHourlyTotals = 0;
    var td = document.createElement('td');
    for (var j = 0; j < CookieStand.all.length; j++) {
      locHourlyTotals += CookieStand.all[j].cookiesToBake[i];
    }
    td.textContent = locHourlyTotals;
    newTR.appendChild(td);

  } 
  //prints the final total in bottom right corner
  var finalTD = document.createElement('td');
  finalTD.textContent = 'Grand Total: ' + grandTotal;
  newTR.appendChild(finalTD);
  return newTR;
}
//defines the objects using the CookieStand constructor function parameters
new CookieStand('Seattle', 23, 65, 6.3);
new CookieStand('Tokyo', 3, 24, 1.2);
new CookieStand('Dubai', 11, 38, 3.7);
new CookieStand('Paris', 20, 38, 2.3);
new CookieStand('Lima', 2, 16, 4.6);
//calls the printTable function and prints the table to the console.
printTable();
