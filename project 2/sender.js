var k;

var randomColor = Math.floor(Math.random()*99999999).toString(16);
console.log(randomColor);
const ola = document.getElementById("ola");

function hue(){
  var randomColor = Math.floor(Math.random()*7777777).toString(16);
  document.body.style.backgroundColor = randomColor
  console.log(randomColor);
  ola.innerHTML = "#"+randomColor;
  
}
function changeOla(){
  
}