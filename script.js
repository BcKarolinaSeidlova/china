const animal = [
  'opice',
  'kohouta',
  'psa',
  'vepře',
  'krysy',
  'buvola',
  'tygra',
  'zajíce',
  'draka',
  'hada',
  'koně',
  'kozy',
]; // Try edit me
var year = 1960; //document.getElementById("year").value;
var mod = year % 12;
const element = ['kov', 'voda', 'dřevo', 'oheň', 'zem'];

var result = year + ' je ve znamení ' + animal[mod];

// Update header text
document.querySelector('#header').innerHTML = result;

// Log to console
console.log(year, animal[mod]);
