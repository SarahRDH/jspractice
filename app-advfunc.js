function add(x, y) {
    return x + y;
}

const subtract = function (x, y) {
    return x - y;
}

const multiply = function (x, y) {
    return x * y;
}

const divide = function (x, y) {
    return x / y;
}

const operations = [add, subtract, multiply, divide];

//call operations[0](100, 4) to add
//or call operations[1](5, 4) to subtract
//etc

for (let func of operations) {
    let result = func(30, 5);
    console.log(result); // gives answers for add, sub, mult, div of 30 and 5
}
//adding a function to an object creates a method!
const thing = {
    doSomething: multiply
}
//run thing //shows that it is an obj
//run thing.doSomething //shows that it is an object containing the function multiply(x,y) return x*y
//run thing.doSomething(50,2) //returns 100


//------------------------------------
//higher order functions are functions that accept functions as arguments OR return a function

function callThreeTimes(f,g) {
    f();
    f();
    f();
    g();
}

function cry() {
    console.log('boo hoo i am so sad'); 
}

function rage() {
    console.log('I hate everything');
}

function repeatNTimes(action, num) {
    for (let i = 0; i < num; i++) {
        action();
    }
}

repeatNTimes(rage, 13);

function pickOne(f1, f2) {
    let rand = Math.random();
    console.log(rand);
    if (rand < 0.5) {
        f1();
    } else {
        f2();
    }
 }


 //93. functionas as return values 
//  const triple = multiplyBy(3);
//  triple(5);//15

//  const double = multiplyBy(2);
//  double(8);//16

 function multiplyBy(num) {
     return function(x) {
        return x * num;
    }
 }

 //this way of writing triple is the same as below
// const triple = function (x) {
//     return x * 3;
// } 
// triple(3); //returns 9

//this way of writing triple is the same as above
const triple = multiplyBy(3);
const double = multiplyBy(2);
const quintuple = multiplyBy(5);

//could write makeBetweenFunc this way OR
// function makeBetweenFunc(x,y) {
//     return function(num) {
//         if (num >= x && num <= y) {
//             return true;
//         }
//         return false;
//     }
// }

function makeBetweenFunc(x,y) {
    return function(num) {
        return num >= x && num <= y;
    }
}

//could write isChild like this OR
// makeBetweenFunc(0,18); 
// const isChild = function (num) {
//     return num >= 0 && num <= 18;
// }

const isChild = makeBetweenFunc(0,18);

isChild(17);

const isNineties = makeBetweenFunc(1990, 2000);

const isNiceWeather = makeBetweenFunc(60-79);

//callbacks
function callTwice(func) {
    func();
    func();
}

function laugh() {
    console.log("hahahahah");
}

callTwice(laugh);//here, laugh is the callback function


function grumpus() {
    alert("ga go away");
}
//setTimeout(func, 5000)    //setTimeout expects a function and some milliseconds to wait until executing that funcion.
// setTimeout(grumpus, 5000);

setTimeout(function() { //pass in anonymous function that you don't have to use anywhere else again
    alert('whoa');
}, 2000);

const btn = document.querySelector('button');
// btn.addEventListener('click', grumpus);

btn.addEventListener('click', function() {
    alert("why did you click me");
});