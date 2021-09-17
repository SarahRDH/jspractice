// for(initial initialExpression; condition; incrementExpression) {
//     do something
// }

for (let i = 1; i <= 10; i++) {
    console.log('hello:', i);
}
// for (let i = 3; i <= 10; i++) {
//     console.log('hello:', i);
// }
// for (let i = 5; i <= 10; i+2) {
//     console.log('hello:', i);
// }

for (let j = 1; j <= 20; j++) {
    console.log(`${j}x${j} = ${j*j}`);
}
//start at 50, subtract 10 each time, until you get to 0
for (let k = 50; k >=0; k -= 10) {
    console.log(k); //50 40 30 20 10 0
}

const examScores = [98, 77, 84, 91, 34, 66];
//print all exam scores
for(let i = 0; i <= examScores.length-1; i++) {
    console.log (i, examScores[i]);
}

const myStudents = [
    {
       firstName : 'Zeus',
       grade : 86 
    },
    {
        firstName : 'Artemis',
        grade: 97
    },
    {
        firstName : 'Hera',
        grade : 72
    }
];

let total = 0; //have to have this outside the loop or it will recalculate total to 0 every time the loop runs
for (let i = 0; i < myStudents.length; i++) {
    console.log(`${myStudents[i]}`); //just prints the fact that there are 3 objects
    let student = myStudents[i]; //assigns student to each unique object so we can access data
    console.log(student); //prints each unique object info
    console.log(`${student.firstName} scored ${student.grade}`);

    total += student.grade; //adds grades together
}
console.log(total/myStudents.length); //takes the class avg


const word = 'stressed';
for (let i = word.length-1; i >= 0; i--) {
    console.log(word[i]);
}

//nested for loop
for (let i = 1; i <= 10; i ++) {
    console.log('OUTER LOOP:', i);
    for (let j = 10; j >=0; j --) {
        console.log('  inner loop:', j);
    }
}

//need two loops nested to access two arrays nested
const gameBoard = [
    [4, 32, 8, 4],
    [64, 8, 32, 2],
    [8, 32, 16, 4],
    [2, 8, 4, 2]
];

for (let i = 0; i < gameBoard.length; i ++) {
    console.log(gameBoard[i]);
    let row = gameBoard[i];
    for(let j = 0; j < row.length; j ++) {
        console.log(row[j]);
    }
}
console.log('next are while loops');

//while loops
//while(some condition)
//in the loop, update or attempt to make that condition false
//this for loop is the same as the while loop below
for (let i = 0; i <= 5; i++) {
    console.log(i);
}
//this while loop is the same as the for loop above
let j = 0;
while (j <= 5) {
    console.log(j);
    j++;
}
//NOTE: it is best practice not to declare loop variables outside the loop, but you have to when using while loops

const target = Math.floor(Math.random() * 10);
let guess = Math.floor(Math.random() * 10); // use let because the guess will change
while(guess !== target) {
    console.log(`Target: ${target} Guess: ${guess}`); //prints all except the correct match
    guess = Math.floor(Math.random() * 10);
}
console.log(`Target: ${target} Guess: ${guess}`);//prints the correct match
console.log("it's a match!");

//another way to write the same thing using break
// const target = Math.floor(Math.random() * 10);
// let guess = Math.floor(Math.random() * 10); // use let because the guess will change
// while(true) { //this will be an infinite loop without the break below
//     if(target === guess) break; //break stops the loop
//     console.log(`Target: ${target} Guess: ${guess}`); //prints all except the correct match
//     guess = Math.floor(Math.random() * 10);
// }
// console.log(`Target: ${target} Guess: ${guess}`);//prints the correct match

// console.log("it's a match!");


//for of loop (new) to iterate each char in strings, each element in arrays
//so much easier and cleaner! let's you declare your iterable and name it
let subreddits = ['soccer', 'popheads', 'cringe', 'books'];
for (let sub of subreddits) {
    console.log(sub);
}

for (let char of 'cockadoodledoo') {
    console.log(char.toUpperCase());
}

//nested for loop versus nested for of loop
const magicSquare = [
    [2, 7, 6],
    [9, 5, 1],
    [4, 3, 8]
];

for (let i = 0; i <magicSquare.length; i++) {
    let row = magicSquare[i];
    let sum = 0;//reset each sum to 0 so it doesn't add all the numbers in the whole outer array together
    for (let j = 0; j < row.length; j++) {
        sum += row[j];
    }
    console.log(`${row} summed to ${sum}`);
}

for (let row of magicSquare) {
    let sum = 0;
    for (let num of row) {
        sum += num;
    }
    console.log(`${row} still summed to ${sum}`);
}
//when you need the index of the array, just use traditional for loop
const words1 = ['mail', 'milk', 'bath'];
const words2 = ['box', 'jug', 'tub'];

for (let i = 0; i < words1.length; i++) {
    console.log(`${words1[i]}${words2[i]}`);//how does this know to iterate through words2 without declaring it in the for loop?
}


//looping over objects

const movieReviews = {
    Arrival     : 9.5,
    Alien       : 9,
    Amelie      : 8,
    'In Bruges' : 9,
    Amadeus     : 10,
    'Kill Bill' : 8,
    'Little Miss Sunshine' : 8.5,
    Coraline    : 7.5
};

// for(let x of movieReviews) { //this does not work because objects are not iterable
//     console.log(x);
// }

for (let movie of Object.keys(movieReviews)) {
    console.log(movie, movieReviews[movie]);
}

const ratings = Object.values(movieReviews);
let totals = 0;
for(let r of ratings) {
    totals +=r;
}
totalAvg = totals /= ratings.length;
console.log(totalAvg);

//you could use a regular for loop and grab the index from Object.keys and Object.values
//BUT there's a better way! Just use for in and you don't have to use Object.keys or .values at all

//for in loops to be used in objects, not recommended for arrays
const jeopardyWinnings = {
    regularPlay         : 2522700,
    watsonChallenge     : 300000,
    tournamentOfChampions   : 500000,
    battleOfTheDecades  : 100000
};

for (let prop in jeopardyWinnings) {
    console.log(prop);//prints keys
    console.log(jeopardyWinnings[prop]);//prints values
}

let totalWin=0;
for (let prop in jeopardyWinnings) {
    totalWin += jeopardyWinnings[prop]; 
}
console.log(totalWin);
