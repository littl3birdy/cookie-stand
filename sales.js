'use strict'
var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm']
var seattle = {
  name: 'Seattle',
  minimum: 23,
  maximum: 65,
  average: 6.3,
  cookiesToBake: [],
  total: 0,
  customersPerHour: function () {
    var range = this.maximum - this.minimum;
    return Math.floor(Math.random() * range) + this.minimum;
  },
  cookiesPerHour: function () {
    var howMany;
    for (var i = 0; i < hours.length; i++) {
      var time = hours[i];
      var howMany = this.customersPerHour() * Math.floor(this.average);
      this.total += howMany
      this.cookiesToBake.push(howMany);
    } return this.cookiesToBake
  },
  render: function () {
    var seattleCookies = document.getElementById('seattleCookies');
    for (var i = 0; i < this.cookiesToBake.length; i++) {
      var bake = document.createElement('li');
      bake.textContent = hours[i] + ': ' + this.cookiesToBake[i]+' cookies';
      seattleCookies.appendChild(bake);
    }
    var printTotal = document.createElement('li');
    printTotal.textContent = 'Total: ' + this.total+' cookies';
    seattleCookies.appendChild(printTotal);
  }
}
var tokyo = {
  name: 'Tokyo',
  minimum: 3,
  maximum: 24,
  average: 1.2,
  cookiesToBake: [],
  total: 0,
  customersPerHour: function () {
    var range = this.maximum - this.minimum;
    return Math.floor(Math.random() * range) + this.minimum;
  },
  cookiesPerHour: function () {
    var howMany;
    for (var i = 0; i < hours.length; i++) {
      var time = hours[i];
      var howMany = this.customersPerHour() * Math.floor(this.average);
      this.total += howMany
      this.cookiesToBake.push(howMany);
    } return this.cookiesToBake
  },
  render: function () {
    var tokyoCookies = document.getElementById('tokyoCookies');
    for (var i = 0; i < this.cookiesToBake.length; i++) {
      var bake = document.createElement('li');
      bake.textContent = hours[i] + ': ' + this.cookiesToBake[i]+' cookies';
      tokyoCookies.appendChild(bake);
    }
    var printTotal = document.createElement('li');
    printTotal.textContent = 'Total: ' + this.total+' cookies';
    tokyoCookies.appendChild(printTotal);
  }
}
var dubai = {
  name: 'Dubai',
  minimum: 11,
  maximum: 38,
  average: 2.7,
  cookiesToBake: [],
  total: 0,
  customersPerHour: function () {
    var range = this.maximum - this.minimum;
    return Math.floor(Math.random() * range) + this.minimum;
  },
  cookiesPerHour: function () {
    var howMany;
    for (var i = 0; i < hours.length; i++) {
      var time = hours[i];
      var howMany = this.customersPerHour() * Math.floor(this.average);
      this.total += howMany
      this.cookiesToBake.push(howMany);
    } return this.cookiesToBake
  },
  render: function () {
    var dubaiCookies = document.getElementById('dubaiCookies');
    for (var i = 0; i < this.cookiesToBake.length; i++) {
      var bake = document.createElement('li');
      bake.textContent = hours[i] + ': ' + this.cookiesToBake[i]+' cookies';
      dubaiCookies.appendChild(bake);
    }
    var printTotal = document.createElement('li');
    printTotal.textContent = 'Total: ' + this.total+' cookies';
    dubaiCookies.appendChild(printTotal);
  }
}
var paris = {
  name: 'paris',
  minimum: 11,
  maximum: 38,
  average: 2.7,
  cookiesToBake: [],
  total: 0,
  customersPerHour: function () {
    var range = this.maximum - this.minimum;
    return Math.floor(Math.random() * range) + this.minimum;
  },
  cookiesPerHour: function () {
    var howMany;
    for (var i = 0; i < hours.length; i++) {
      var time = hours[i];
      var howMany = this.customersPerHour() * Math.floor(this.average);
      this.total += howMany
      this.cookiesToBake.push(howMany);
    } return this.cookiesToBake
  },
  render: function () {
    var parisCookies = document.getElementById('parisCookies');
    for (var i = 0; i < this.cookiesToBake.length; i++) {
      var bake = document.createElement('li');
      bake.textContent = hours[i] + ': ' + this.cookiesToBake[i]+' cookies';
      parisCookies.appendChild(bake);
    }
    var printTotal = document.createElement('li');
    printTotal.textContent = 'Total: ' + this.total+' cookies';
    parisCookies.appendChild(printTotal);
  }
}
var lima = {
  name: 'Lima',
  minimum: 11,
  maximum: 38,
  average: 2.7,
  cookiesToBake: [],
  total: 0,
  customersPerHour: function () {
    var range = this.maximum - this.minimum;
    return Math.floor(Math.random() * range) + this.minimum;
  },
  cookiesPerHour: function () {
    var howMany;
    for (var i = 0; i < hours.length; i++) {
      var time = hours[i];
      var howMany = this.customersPerHour() * Math.floor(this.average);
      this.total += howMany
      this.cookiesToBake.push(howMany);
    } return this.cookiesToBake
  },
  render: function () {
    var limaCookies = document.getElementById('limaCookies');
    for (var i = 0; i < this.cookiesToBake.length; i++) {
      var bake = document.createElement('li');
      bake.textContent = hours[i] + ': ' + this.cookiesToBake[i]+' cookies';
      limaCookies.appendChild(bake);
    }
    var printTotal = document.createElement('li');
    printTotal.textContent = 'Total: ' + this.total+' cookies';
    limaCookies.appendChild(printTotal);
  }
}
seattle.customersPerHour();
seattle.cookiesPerHour();
seattle.render();
tokyo.customersPerHour();
tokyo.cookiesPerHour();
tokyo.render();
dubai.customersPerHour();
dubai.cookiesPerHour();
dubai.render();
paris.customersPerHour();
paris.cookiesPerHour();
paris.render();
lima.customersPerHour();
lima.cookiesPerHour();
lima.render();