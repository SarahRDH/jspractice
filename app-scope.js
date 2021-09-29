//BLOCK SCOPE

//-------------------------------------
let bird = 'mandarin duck';
    //((((((((((((((((((()))))))))))))))))))
    function birdWatch() {

        let bird = 'golden pheasant';
        bird; //golden pheasant
    }
    //((((((((((((((((((()))))))))))))))))))
bird; //mandarin duck
//-------------------------------------
//bird is scoped to (inside of) birdWatch function, but if bird is called outside of birdWatch function, it only sees mandarin duck.
//it will see whatever is closest inside the function. if they're nested functions, the innermost function wins

//let and const ARE block scoped. So if you declare a variable within a function with let and var, it's only accessible inside that function or that block
//var is not scoped. So if you declare a variable with var, even inside a block or function, it can be accessed anywhere and it can be changed anywhere.
//do not declare loop iteration variables with var


//LEXICAL SCOPE
//nested functions are scoped to their parent functions

function outer() {
    let movie = 'Amadeus';

    function inner() {
        let x = 10;
        console.log(movie.toUpperCase())
    }
    inner();
    console.log(x); //will not work because x is block scoped to inner function
}

function outer() {
    let movie = 'Amadeus';

    function inner() {
        let movie = 'The Shining';
        console.log(movie.toUpperCase())
    }
    inner(); //will print THE SHINING because it will use whatever variable is in the innermost function/block  
}

function outer() {
    let movie = 'Amadeus';

    function inner() {
        let movie = 'The Shining';

        function extrainner() {
            console.log(movie.toUpperCase())

        }
    }
    inner(); //will print THE SHINING because it will use whatever variable is in the innermost function/block  
}

function outer() {
    let movie = 'Amadeus';

    function inner() {

        function extrainner() {
            console.log(movie.toUpperCase())

        }
    }
    inner(); //will print AMADEUS because it will keep looking up through function/block till it gets to a parent that has that variable 
}



//HOISTING
//var is hoisted, but not the value.
//let and const are not hoisted
//function declarations are hoisted
//function expressions are not hoisted

var animal = "tapir";
console.log(animal); //tapir

console.log(animal);
var animal = "tapir"; //undefined
//computer sees animal, but not what's saved in animal. so it hoisted the variable declaration first, but waits to store it.

let shrimp = "Harlequin Shrimp";
console.log(shrimp); //Harlequin Shrimp

console.log(shrimp); //Harlequin Shrimp
let shrimp = "Harlequin Shrimp"; //uncaught reference error, cannot access 'shrimp 'before initialization. so it isn't hoisted at all.

howl();
function howl() {
    console.log("awoooo"); //works because function declarations are hoisted. this function isn't stored in a variable. The interpreter runs these lines first.
}

hoot();
var hoot = function () {
    console.log("hoo hoo"); //uncaught type error, hoot is not a function. it sees the variable hoot, but not the function attached. this is a function expression.
}

hoot();
let hoot = function () {
    console.log("hoo hoo"); //uncaught referrence error, cannot access hoot before initialization. none of it is hoisted. this is a function expression.
}
