let count = 0;

const h1number = document.querySelector(".Number")

let value = h1number.textContent;
console.log(Date());

function log(){
  value++;
  h1number.textContent = value;
}

const color = document.getElementById("div3");
const random = document.getElementById("random_btn");

random.addEventListener("click", function(){
  color.style.backgroundColor = "blue";
})