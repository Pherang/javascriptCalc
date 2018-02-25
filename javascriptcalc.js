var aNumber = "";
var operator = "";
var equation = [];
var answerBox = document.getElementById("calcAnswer");

function storeNum(number){
        
    if (Number.isInteger(test)) {
        console.log("already a num");
        equation = [];
        aNumber = "";
    }
    aNumber += number;
    answerBox.textContent = aNumber;
}

function equalResult(){
    console.log("Equation time!");
    console.log(aNumber);
    equation.push(aNumber);
    aNumber = "";
    var result = eval(equation.join(""));
    if (Number.isNaN(result)){
        result = "Error";    
    }
    answerBox.textContent = result;
    console.log(result);
    return result;
}

function operation(mathoper){
    equation.push(aNumber);
    aNumber = "";
    if (equation[0]){
        equation.push(mathoper);
    }
    
}

function clearMem(){
    aNumber = "";
    operator = "";
    equation = [];
    answerBox.textContent = "";
}

/* Setup Event Handlers for all the number buttons on the calculator */
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