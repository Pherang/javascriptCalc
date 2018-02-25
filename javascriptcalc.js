
var firstNum = "";
var secondNum = "";
var operator = "";


function storeNum(number){
    firstNum += number;
    console.log(firstNum);
}

function equals(){
    console.log(firstNum);
    return firstNum;
}

/* Setup Event Handlers for all the number buttons on the calculator */
var numZero = document.getElementById("btnZero");
numZero.addEventListener("click", function(){storeNum(0);} );

var numOne = document.getElementById("btnOne");
numOne.addEventListener("click", function(){storeNum(1);} );

var numTwo = document.getElementById("btnTwo");
numTwo.addEventListener("click", function(){storeNum(2);} );

var numThree = document.getElementById("btnThree");
numThree.addEventListener("click", storeNum);

var numFour = document.getElementById("btnFour");
numFour.addEventListener("click", storeNum);

var numFive = document.getElementById("btnFive");
numFive.addEventListener("click", storeNum);

var numSix = document.getElementById("btnSix");
numSix.addEventListener("click", storeNum);

var numSeven = document.getElementById("btnSeven");
numSeven.addEventListener("click", storeNum);

var numEight = document.getElementById("btnEight");
numEight.addEventListener("click", storeNum);

var numNine = document.getElementById("btnNine");
numNine.addEventListener("click", storeNum);

/* Setup Event Handlers for all the operation buttons on the calculator */
var numZero = document.getElementById("btnEquals");
numZero.addEventListener("click", equals);