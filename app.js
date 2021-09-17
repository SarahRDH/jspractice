//alert("it's alive!");

if (1==1) {
console.log("it's true!");
}

let rating = 5;
if (rating === 3) {
    console.log('you are a superstar!');
}

// rating =2;
else if (rating === 2) {
    console.log('meets expectaions');
}
else if (rating === 1) {
    console.log('needs improvement');
}
else {
    console.log('whoops');
}

let highScore = 1430;
let userScore = 1500;

if(userScore >= highScore) {
    console.log(`Congrats, you have new high score of ${userScore}`);
    //now update userScore to be the new high score
    highScore = userScore;
    
}
else {
    console.log(`Good game! your score of ${userScore} did not beat the high score of ${highScore}`);
}
console.log(highScore);


// let num = 37;

// if (num % 2 !== 0) {
//     console.log('odd number!');
// }


// let password = 'hellokitty';
// if (password.length >= 6) {
//     if (password.indexOf(' ') === -1) {
//         console.log("valid password!");
//     }
//     else {
//         console.log("password is long enough, but cannot contain spaces");
//     }
// }
// else {
//     console.log("password must be longer");
// }

let password = "chickenGal";
if (password.length >= 6 && password.indexOf(' ') === -1) {
    console.log("valid password!");
}
else {
    console.log("invalid password");
}

let num = 3;
if(num >= 1 && num <=10) {
    console.log('number is 1 -10');
}
else {
    console.log('please guess again');
}

let mystery = 'string';

if (mystery) { //when there is  no comparision, it's implied you're asking "is this parameter true"
    console.log('truthy');
}
else {
    console.log('falsey');
}


let day = 3;
// if (day === 1) {
//     console.log("monday");
// }


switch (day) {
    case 1:
        console.log("monday");
        break; //without the break, it will console log monday and tuesday- until it sees the next break
    case 2:
        console.log("tuesday");
        break;
    case 3:
        console.log("tuesday");
        break;
    case 4:
        console.log("tuesday");
        break;
    case 5:
        console.log("tuesday");
        break;
    case 6:
        console.log("tuesday");
        break;
    case 7:
        console.log("tuesday");
        break;        
}

//ternary operators
let num2 = 7 ;

// if (num2 === 7) {
//     console.log('lucky!');
// }
// else {
//     console.log('bad!');
// }

// write the same thing as a ternary statement
num2 === 7 ? console.log('lucky') : console.log('bad!');


// let status = "offline";

// let color;
// if (status === "offline") {
//     color = "red";
// }
// else {
//     color = "green";
// }
// console.log(color);

let color = status === 'offline' ? 'red' : 'green';
console.log(color);

let shoppingList = ['cereal', 'cheese', 'ice'];
shoppingList[1] = "whole Milk";
shoppingList[2] = 'ice cream';
shoppingList[shoppingList.length] = 'tomatoes';



let lotto = [45, 12, 23, 24];

let myCollection = [12, 'dog', true, null, NaN];

// new Array()
// let myArray[]

let topSongs = [
    'first time ever i saw your face',
    'god only knows',
    'a day in the life',
    'life on mars'
];

topSongs.push('fortunate son');

let dishesToDo = ['plate', 'cup', 'fork'];
dishesToDo.unshift('fork', 'knife');


let fruits = ["apple", "banana"];
let veggies = ["carrot", "asparagus"];
console.log(fruits.concat(veggies));

let ingredients = [
    'water',
    'corn starch',
    'flour',
    'cheese',
    'brown sugar',
    'shrimp',
    'eel',
    'butter',
];
if (ingredients.includes('flour')) {
    console.log('yuk');
}
// 
ingredients.reverse()
// ingredients.reverse()

let food = ingredients.slice(0, 3);
let yummy = ingredients.slice(4);
let sugar = ingredients.slice(-3);


ingredients.splice(1, 0, 'berries');
ingredients.splice(1, 4, 'chocolate');


//sort will alphabetize strings, but not numbers. Sort actually converts the characters to UTF-16 values and organizes those, so you can't use it with numbers unless you pass in a function.
let people = ['Ryan', 'Sarah', 'Olivia'];
people.sort();

let streetAddress = [4250, 4300, 70, 1];
streetAddress.sort();

 //storing a value as a primitive type will store that literal thing you typed. storing a value as an array or object just stores a reference point in memory.
 //that's why an array or object stored as a const can still be changed- it's not saved literally like a primitive type. What is stored in memory is the array's container- it's contents can be changed.

 const animalPairs = [
     ['hamster', 'guinnea pig'],
     ['cat', 'dog'],
     ['fish', 'snake']
 ];
//nested arrays often used in games
 const tictactoeBoard = [
     ['O', null, 'X'],
     [null, 'X', 'O'],
     ['X', 'O', null]
 ];

 //objects
 //inside the object literal are key:value pairs. the key is stored as strings, even if you use a number for a key.
 //comma is placed at the end of a property declaration
 const fitbitData = {
     totalSteps :       308727,
     totalMiles :       211.7,
     avgCalorieBurn :   5755,
     workoutsThisWeek : '5 of 7',
     avgGoodSleep :     '2:13',
     45: "that's the number",     //can't get it with . notation
     '76 trombones' : 'great song'
 }

//how to get data out of a numeral property key
fitbitData[45]; //this works because the brackets convert the numeral to a string and matches it with the string key '45'
fitbitData['76 trombones']; //have to have quotes because  of the space-- really should always use quotes with bracket notation in accessing values.

const palette = {
    red : '#eb4d4b',
    yellow : '#f9ca24',
    blue : '#30336b'
}

let mysteryColor = 'yellow';
palette[mysteryColor]; //gives value #f9ca24 because it sees that mysteryColor is 'yellow' and plugs that into palette as a key

//updating object data
const userReviews = {};

userReviews['queenBee49']  = 4.0;
userReviews.mrSmith78 = 3.5;
userReviews.mrSmith78++;
userReviews.queenBee49+=2;
userReviews.colt = 6;
userReviews['colt'] += 4;

//nesting objects and arrays
const tictacGame = {
    player1 : {
        username: 'Ryan',
        mark : 'X'
    },
    player2 : {
        username : 'Sarah',
        mark : 'O'
    },
    board : [
        ['O', null, 'X'],
        [null, 'X', 'O'],
        ['X', 'O', null]
    ]
};
    
//comparing objects and arrays
let numbs = [1,2,3];
let numbs2 = [1,2,3];
// numbs === numbs2 is false because they have 2 different locations in memory and that's what's being compared.
let moreNums = numbs;
// now numbs === moreNums is true because they live in the same memory spot.

const user = {
    username : 'CherryGarcia8',
    email : 'garcia@gamil.com',
    notifications : []
};
//below will not work because you're trying to comparing two arrays. Would either have to convert the array first, or ask in a different way.
// if(user.notifications === []) {
//     console.log('no new notifications');
// }
if(user.notifications.length === 0) { //asking if the length of the array is zero works
    console.log('no new notifications');
}
if(!user.notifications.length) { //or asking if there is no user.notifications.length works. 
    console.log('no new notifications');
}
