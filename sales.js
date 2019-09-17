'use strict'
//hours of operation
var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm']

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
}

//generates a random number of customers per hour between locations min and max
CookieStand.prototype.customersPerHour = function () {
  var range = this.maximum - this.minimum;
  return Math.floor(Math.random() * range) + this.minimum;
}

//calculates the number of cookies sold per hour for each location
CookieStand.prototype.cookiesPerHour = function () {
  for (var i = 0; i < hours.length; i++) {
    var howMany = this.customersPerHour() * Math.floor(this.average);
    this.total += howMany
    this.cookiesToBake.push(howMany);
  }
  return this.cookiesToBake
}

//prints to the browser
CookieStand.prototype.render = function () {

}


new CookieStand('Seattle', 23, 65, 6.3);
new CookieStand('Tokyo', 3, 24, 1.2);
new CookieStand('Dubai', 11, 38, 3.7);
new CookieStand('Paris', 20, 38, 2.3);
new CookieStand('Lima', 2, 16, 4.6);