var addAndSubstract = require('./app/add-substract');

var addElement = document.querySelector('#resultAdd');
var subsElement = document.querySelector('#resultSubs');

addElement.textContent = '' + addAndSubstract.add(3, 2);
subsElement.textContent = '' + addAndSubstract.substract(20, 7);
