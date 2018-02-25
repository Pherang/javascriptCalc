
var aNumber = "";
var operator = "";
var equation = [];
var answerBox = document.getElementById("calcAnswer");

function storeNum(number){
    aNumber += number;
    answerBox.textContent = aNumber;
}

function equalResult(){
    console.log("Equals time!");
    console.log(aNumber);
    equation.push(aNumber);
    aNumber = "";
    var result = eval(equation[0] + equation[1] + equation[2]);
    answerBox.textContent = result;
    console.log(result);
    return result;
}

function operation(mathoper){
    equation.push(aNumber);
    aNumber = "";
    console.log(equation[0]);
    if (equation[0]){
        equation.push(mathoper);
    }
    console.log(equation[1]);
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
numSix.addEventListener("click", storeNum);

var numSeven = document.getElementById("btnSeven");
numSeven.addEventListener("click", storeNum);

var numEight = document.getElementById("btnEight");
numEight.addEventListener("click", storeNum);

var numNine = document.getElementById("btnNine");
numNine.addEventListener("click", storeNum);

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


