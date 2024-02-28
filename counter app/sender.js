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
count = 0

random.addEventListener("click", function(){
  
  if(count%2==0){
    color.style.backgroundColor = "blue";
    document.getElementById("header").innerHTML = "Blue";
  }
  else{
    color.style.backgroundColor = "purple";
    document.getElementById("header").innerHTML = "Purple";
  }
  count++;
})
