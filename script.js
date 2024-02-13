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
]; 

const element = ['kovu', 'kovu', 'vody','vody', 'dřeva', 'dřeva' , 'ohně', 'ohně', 'země', 'země'];

// Try edit me
document.getElementById("try").addEventListener("click", function year () {
                   var year = document.getElementById("year").value;    
var mod = year%12;
var e = year%10;
  
if (isNaN(year) == true || year === "") {
  document.getElementById("result").innerHTML = "Zadejte rok v číselnem formátu."} 
else {
  var result = "Rok "+year+" je ve znamení "+animal[mod]+" s živlem "+element[e];
  document.getElementById("result").innerHTML = result} });
