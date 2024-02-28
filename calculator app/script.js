
const screen = document.getElementById("screen");

const operands = document.getElementById("operands");

const answerScreen = document.getElementById("answer");
var value;
var answer;
var stack1 = "";
function getValue(button){
    value = button.innerText;
    if(value === "C"){
        stack1 = "";
        operands.innerText = stack1;
        answerScreen.innerText = stack1;
    }
    else if(value === "="){
        answer = eval(stack1);
        console.log(answer);
        answerScreen.innerText = answer;
        //operands.innerText = stack1;
        stack1 = "";
    }
    else if(value !== "="){
        stack1+= value;
        operands.innerText = stack1;
        
    }
}



