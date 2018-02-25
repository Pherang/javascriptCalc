
var firstNum = "";
var secondNum = "";
var operator = "";


function dogshit(number){
    firstNum += number;
    console.log(firstNum);
}

function equals(){
    console.log(firstNum);
    return firstNum;
}

/* Setup Event Handlers for all the number buttons on the calculator */
var numZero = document.getElementById("btnZero");
numZero.addEventListener("click", function(){dogshit(0);} );

var numOne = document.getElementById("btnOne");
numOne.addEventListener("click", function(){dogshit(1);} );

var numTwo = document.getElementById("btnTwo");
numTwo.addEventListener("click", function(){dogshit(2);} );

var numThree = document.getElementById("btnThree");
numThree.addEventListener("click", dogshit);

var numFour = document.getElementById("btnFour");
numFour.addEventListener("click", dogshit);

var numFive = document.getElementById("btnFive");
numFive.addEventListener("click", dogshit);

var numSix = document.getElementById("btnSix");
numSix.addEventListener("click", dogshit);

var numSeven = document.getElementById("btnSeven");
numSeven.addEventListener("click", dogshit);

var numEight = document.getElementById("btnEight");
numEight.addEventListener("click", dogshit);

var numNine = document.getElementById("btnNine");
numNine.addEventListener("click", dogshit);

/* Setup Event Handlers for all the operation buttons on the calculator */
var numZero = document.getElementById("btnEquals");
numZero.addEventListener("click", equals);