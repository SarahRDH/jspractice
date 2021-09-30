//default parameters
//old way
function multiply1(x, y) {
    if (typeof y === 'undefined') {
        y = 1;
    }
    return x * y;
}
//multiply(4, 3) returns 12
//multiply(4) returns 4 because y=1

//old way using ternary operator
function multiply2(x, y) {
    y = typeof y === 'undefined' ? 1 : y //does the typeof y equal 'undefined'? if so, y equals 1
    return x * y;
}

//new way
function  multiply(a, b = 1) { //b will default to one if you don't pass in a value
    return a * b;
}

multiply(4);
multiply(4, 5);
// function  multiply(a = 1, b) { //can't have the default parameter first
//     return a * b;
// }
//multiply(2) returns NaN 
//multiply(2, 3) returns 6

const greet1 = (person, greeting = 'hi') => {
    console.log(`${greeting}, ${person}!`);
}

const blah = (x, y=[1,2,3]) => {
    console.log(x, y);
}

const greet = (person, greeting = 'hi', punctuation = '!') => { //order matters. You can't have a default parameter at the beginning
    console.log(`${greeting}, ${person}, ${punctuation}`);
}
greet('anya', '?'); //returns ?, anya !
greet('anya'); //returns hi, anya !



//spread
//spread expands an iterable (array, string, object) //if breaks up the array into each element, or the string into each char
const nums = [ 9, 3, 2, 8 ];
Math.max(nums); //NaN
//but if we use spread (which is three dots ...)
Math.max(...nums); //9
//same as calling: Math.max(9,3,2,8);

function giveMeFour(a, b, c, d) {
    console.log('q', a)
    console.log('r', b)
    console.log('s', c)
    console.log('t', d)
}

const colors = ['red', 'orange', 'yellow', 'green']
giveMeFour(...colors);

const str = 'GOAT';
giveMeFour(...str);

