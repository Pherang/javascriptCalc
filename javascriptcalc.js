var aNumber = "";
var operator = "";
var equation = [];
var eqtext = "";
var answerBox = document.getElementById("calcAnswer");
var equationBox = document.getElementById("calcEquation");
// Process and store number to be added to equation.
function storeNum(number){
    // Check if the result of an equation was obtained and stored. If it was start with a fresh equation.
    if (isFinite(equation[equation.length-1])){
        equation = [];
        aNumber = "";
    }
    // If the number doesn't already contain a decimal place then add a decimal.
    if (aNumber.indexOf(".") > 0 && number == "."){
        number="";
    }
    aNumber += number;
    eqtext += number;
    
    answerBox.textContent = aNumber;
    equationBox.textContent = eqtext;
}
// Evaluate equation and send results to the display on calculator
function equalResult(){
    equation.push(aNumber);
    aNumber = "";
    var result = math.eval(equation.join(""));
    equation = [];
    equation.push(result);
    if (Number.isNaN(result)){
        result = "Error";    
    }
    answerBox.textContent = result;
    eqtext += " " + "=" + " " + result;
    result = "";
    equationBox.textContent = eqtext;
    eqtext = "";
    
}
// Add arithimetic operator to equation.
function operation(mathoper){
    // Add the previous number into the equation if it hasn't been yet.
    if (Number.isFinite(Number.parseInt(aNumber)) || 
        Number.isFinite(Number.parseFloat(aNumber)) ) {
        equation.push(aNumber);
        equation.push(mathoper);
        eqtext += " " + mathoper + " ";
        equationBox.textContent = eqtext;
        aNumber = "";
        mathoper = ""
    }
    //If there is already a number stored
    if (Number.isFinite(equation[equation.length-1])){
        // Update the text used in the equation box.
        eqtext = equation[equation.length-1] + " " + mathoper + " ";
        equation.push(mathoper);
        equationBox.textContent = eqtext;
        mathoper = "";
    }
    
    // If the operator was subtract and the previous number hasn't been entered then user is trying to 
    // enter a negative number.
    if (mathoper == "-" && aNumber == "") {
        aNumber = mathoper;
    }
}
// Clears the memory of the calculator.
function clearMem(){
    aNumber = "";
    operator = "";
    eqtext = "";
    equation = [];
    answerBox.textContent = "";
    equationBox.textContent = "";
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