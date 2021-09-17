//functions

function rollDie() {
    let roll = Math.floor(Math.random() *6) + 1;
    console.log(`Rolled: ${roll}`);
}

// function throwDice() {
//     rollDie();
//     rollDie();
//     rollDie();
//     rollDie();
//     rollDie();
//     rollDie();
// }

// throwDice()

function throwDice(numRolls) {
    for (let i=0; i<numRolls; i++) {
        rollDie();
    }
}

throwDice(1);

function greet(nickname) {
    console.log(`Hi, ${nickname}!`);
}
greet('Sarah');

function sum(x, y) {
    console.log(x + y);
}

function divide(a, b) {
    console.log(a / b);
}
divide(5,3);
divide(4,2);
divide(5);
sum(4,3);

//return statements
//can only return once in a function
//return is also like break
function add(x, y) {
    console.log(x + y); //will print it to console, but you can't save it as variable
}

function subtract(x, y) {
    return x - y; //will also print it to console AND actually run the equation so it is in memory and able to be stored as variable
}

function isPurple(color) {
    if(color.toLowerCase() === 'purple') {
        return true;
    }
    else {
        return false; 
    }
}

function isPurple(color) {
    if(color.toLowerCase() === 'purple') {
        return true;
    }  
        return false; //we don't even need to write else. just write return false. because the function will stop if it hits true and by default continue to return false.
}

function isPurple(color) {
    return color.toLowerCase() === 'purple'; //the boolean comparison IS the if statement since the if statement is returning true or false. 
}

function containsPurple(arr) {
    for (let color of arr) {
        if (color === 'purple' || color === 'magenta') {
            return true;
        }
    }
    return false;
}

// containsPurple(['red', 'blue', 'gold', 'magenta']);
