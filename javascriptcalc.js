var aNumber = "";
var operator = "";
var equation = [];
var answerBox = document.getElementById("calcAnswer");
// Process and store number to be added to equation.
function storeNum(number){
    // Check if the result of an equation was obtained and stored. If it was start with a fresh equation.
    if (isFinite(equation[equation.length-1])){
        console.log("already a num");
        equation = [];
        aNumber = "";
    }
    // If the number doesn't already contain a decimal place then add a decimal.
    if (aNumber.indexOf(".") > 0 && number == "."){
        number="";
    }
    aNumber += number;
    answerBox.textContent = aNumber;
}
// Evaluate equation and send results to the display on calculator
function equalResult(){
    equation.push(aNumber);
    aNumber = "";
    console.log(equation);
    var result = eval(equation.join(""));
    equation = [];
    equation.push(result);
    if (Number.isNaN(result)){
        result = "Error";    
    }
    answerBox.textContent = result;
    console.log(result);
    return result;
}
// Add arithimetic operator to equation.
function operation(mathoper){
    // If the minus sign was pushed and there was no number pushed store the minus sign to make the number negative.
    if(aNumber == "" && mathoper == "-" && !equation[equation.length-1]){
        aNumber = mathoper;
    }else {
        if ( isFinite(Number.parseInt(aNumber)) || isFinite(Number.parseFloat(aNumber))){
            equation.push(aNumber);
            aNumber = "";
        }
    }
    // if there was a number before an arithmetic operator button was pushed put that number into the equation.
    if (equation[0]){
        equation.push(mathoper);
    }
}
// Clears the memory of the calculator.
function clearMem(){
    aNumber = "";
    operator = "";
    equation = [];
    answerBox.textContent = "";
}

/* Setup Event Handlers for all the number buttons on the calculator */
var dot = document.getElementById("btnDot");
dot.addEventListener("click", function(){storeNum(".");} );

var numZero = document.getElementById("btnZero");
numZero.addEventListener("click", function(){storeNum(0);} );

var numOne = document.getElementById("btnOne");
numOne.addEventListener("click", function(){storeNum(1);} );

var numTwo = document.getElementById("btnTwo");
numTwo.addEventListener("click", function(){storeNum(2);} );

var numThree = document.getElementById("btnThree");
numThree.addEventListener("click", function(){storeNum(3);} );

var numFour = document.getElementById("btnFour");
numFour.addEventListener("click", function(){storeNum(4);} );

var numFive = document.getElementById("btnFive");
numFive.addEventListener("click", function(){storeNum(5);} );

var numSix = document.getElementById("btnSix");
numSix.addEventListener("click", function(){storeNum(6);} );

var numSeven = document.getElementById("btnSeven");
numSeven.addEventListener("click", function(){storeNum(7);} );

var numEight = document.getElementById("btnEight");
numEight.addEventListener("click", function(){storeNum(8);} );

var numNine = document.getElementById("btnNine");
numNine.addEventListener("click", function(){storeNum(9);} );

/* Setup Event Handlers for all the operation buttons on the calculator */
var equals = document.getElementById("btnEquals");
equals.addEventListener("click", equalResult);

var add = document.getElementById("btnAdd");
add.addEventListener("click", function(){ operation("+");});

var subtract = document.getElementById("btnSubtract");
subtract.addEventListener("click", function(){ operation("-");});

var multiply = document.getElementById("btnMultiply");
multiply.addEventListener("click", function(){ operation("*");});

var divide = document.getElementById("btnDivide");
divide.addEventListener("click", function(){ operation("/");});

var clearAll = document.getElementById("btnClear");
clearAll.addEventListener("click", clearMem);