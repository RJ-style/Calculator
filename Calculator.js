const userInput1=document.getElementById('inputnumber1');

const userInput2=document.getElementById('inputnumber2');

const addBtn=document.getElementById('+');
const subtractBtn=document.getElementById('-');
const multiplyBtn=document.getElementById('*');
const divideBtn=document.getElementById('/');
const currentResultOutput=document.getElementById('current-result');
const currentResultCalculationOutput=document.getElementById('Calculationdescription');
function outputResult(result,text) {
    currentResultOutput.textContent=result;
    currentResultCalculationOutput.textContent=text;
}

function getUserInputNumber1() {

  return (userInput1.value);

}
function getUserInputNumber2(){
  return (userInput2.value);
}

//cosole
let logArray=[];
function writeToLog(input1,input2,operation,operator,output){
  const logList={
    input1:input1,
    input2:input2,
    operation:operation,
    operator:operator,
    output:output
  }
  logArray.push(logList);
  console.log(logList);
}

function calculationOutput(operator, mathOperator,operation) {
  const enteredNumber1= getUserInputNumber1();
  const enteredNumber2=getUserInputNumber2();
  if (
    (operator !== "add" &&
      operator !== "subtract" &&
      operator !== "multiply" &&
      operator !== "division") ||
    enteredNumber1==0&&
    enteredNumber2==0
  ) {
    alert("Enter valid value!");
    return;
  }
  var calculationDescription = ` ( ${enteredNumber1} ) ${mathOperator} ( ${enteredNumber2} ) `;
  if (operator === "add") {
    currentResult=parseFloat(enteredNumber1)+parseFloat(enteredNumber2);
  } else if (operator === "subtract") {
    currentResult =enteredNumber1-enteredNumber2;
  } else if (operator === "multiply") {
    currentResult =(enteredNumber1*enteredNumber2);
  } else if (operator === "division") {
    currentResult =enteredNumber1/enteredNumber2;
  }
  outputResult(currentResult, calculationDescription);
  writeToLog(enteredNumber1,enteredNumber2,operation,mathOperator,currentResult);
}

function add() {
  calculationOutput("add","+",'Addition');
}
addBtn.addEventListener("click", add);

function subtract() {
  calculationOutput("subtract","-",'Subtraction');
}
subtractBtn.addEventListener("click", subtract);

function multiply() {
  calculationOutput("multiply","*",'Multiplication');
}
multiplyBtn.addEventListener("click", multiply);

function division() {
  calculationOutput("division","/",'Division');
}
divideBtn.addEventListener("click", division);
