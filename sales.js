'use strict'
//hours of operation
var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm']
CookieStand.all = [];
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
    console.log(this.customersPerHour());
  }
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
  var dailyTotal= document.createElement('td');
  dailyTotal.textContent= this.total;
  newTR.appendChild(dailyTotal);
  return newTR;
}
function printTable() {
  var table = document.getElementById("cookieTable");
  table.appendChild(tableHeader());
  for (var i = 0; i < CookieStand.all.length; i++) {
    table.appendChild(CookieStand.all[i].render());
  }
}
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
function tableFooter() {

}

new CookieStand('Seattle', 23, 65, 6.3);
new CookieStand('Tokyo', 3, 24, 1.2);
new CookieStand('Dubai', 11, 38, 3.7);
new CookieStand('Paris', 20, 38, 2.3);
new CookieStand('Lima', 2, 16, 4.6);
printTable();
