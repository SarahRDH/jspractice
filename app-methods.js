//forEach
const numbers = [20, 21, 22, 23];

numbers.forEach(function (num) { //uses an anonymous function to do the same thing as below
    console.log(num * 2);
})

function printTriple(n) { //uses a reusable function to do the same thing as above
    console.log(n * 3);
}

numbers.forEach(printTriple);

const books = [{
    title: 'Good Omens',
    authors: ['Terry Pratchett', 'Neil Gaiman'],
    rating: 4.25
},
{
    title: 'Bone: The Complete Edition',
    authors: ['Jeff Smith'],
    rating: 4.42
}
]

books.forEach(function(book) {
    console.log(book.title.toUpperCase());
})

//or write it with a for of loop
for (let book of books) {
    console.log(book.title.toUpperCase());
}

//or write it with a good ole for loop
for (let i = 0; i < books.length; i ++) {
    console.log(books[i].title.toUpperCase());
}

numbers.forEach(function (num, idx) {
    console.log(idx, num);
})

//map
const texts = ['rofl', 'lol', 'omg', 'ttyl'];
const caps = texts.map(function (t) {
    return t. toUpperCase();
})
texts; //rofl, lol, omg, ttyl
caps; //ROFL, LOL, OMG, TTYL

const words = ['asap', 'byob', 'rsvp', 'diy'];

const doubles = numbers.map(function(num) {
    return num *2;
})

const evenOdd = numbers.map(function(n) {
    return {
        value: n,
        isEven: n % 2 === 0
    }
})

const doubles2 = [];
for (let num of numbers) {
    doubles2.push(num * 2) //this is pushing each number one at a time into the new array. a better way is to use .map
}

const abbrevs = words.map(function(word) {
    return word.toUpperCase().split('').join('.');
})


const titles = books.map(function (b) {
    return b.title;
})

//arrow functions explanation
const square2 = function(x) {
    return x * x;
}
const square = (x) => {//can take the parens off!
    return x * x;
}

const isEven = (num) => {
    return num % 2 === 0;
}
const isEven2 = function (num) {
    return num % 2 === 0;
}

const multiply = (x, y) => {//can not take the parens off!
    return x * y;
}

const greet = () => {
    console.log('hi');
}

//three ways to write the same thing more simply, but you can only use this if there is only one thing to return in the function.
const square3 = n => {
    return n * n; //normal arrow function
}
const square4 = n => (
    n * n //implicit return without word 'return' or curlys or ;
)
const square5 = n => n * n; //one liner still needs ;

const nums = [0, 2, 3, 4, 5, 6, 7];

const dbl1 = nums.map(function (num) {
    return num * 2;
})

const dbl2 = nums.map(num => {
    return num * 2;
})

const dbl3 = nums.map(num => num * 2);

//end arrow functions

//find
//find returns the value of the first element in the array that meets the requirements
let movies = [
    'The Fantastic Mr. Fox',
    'Mr. and Mrs. Smith',
    'Mrs. Doubtfire',
    'Mr. Deeds'
]

const movie = movies.find(movie => {
    return movie.includes('Mrs'); //returns mr and mrs smith because it's the first one it came to with mrs in it somewhere
})
const movie2 = movies.find(movie => {
    return movie.indexOf('Mrs') === 0; //returns mrs doubtfire because it's the first mrs at index 0 of each string
})

const goodBook = books.find(b => b.rating >= 4);
const neilBook = books.find(b => b.authors.includes('Neil Gaiman'));

//filter
