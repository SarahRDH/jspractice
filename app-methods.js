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
    rating: 4.25,
    genres: ['fiction', 'fantasy']
},
{
    title: 'Bone: The Complete Edition',
    authors: ['Jeff Smith'],
    rating: 4.42,
    genres: ['nonfiction', 'essays']
},
{
    title: 'Changing My Mind',
    authors: ['Zadie Smith'],
    rating: 3.83,
    genres: ['nonfiction', 'essays']
},
{
    title: 'American Gods',
    authors: ['Neil Gaiman'],
    rating: 4.11,
    genres: ['fiction', 'fanatasy']
},
{
    title: 'The Way of Kings',
    authors: ['Brandon Sanderson'],
    rating: 4.65,
    genres: ['fantasy', 'epic']
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
//returns a new array with the filtered out info

const nums2 = [34, 35, 67, 89, 34, 25, 9];

const odds = nums2.filter(n => n % 2 === 1);
const evens = nums2.filter(n => n % 2 === 0);

const bigNums = nums2.filter(n => nums2 > 50);

const goodBooks = books.filter(b => b.rating > 5);
const fantasyBooks = books.filter(book => (
    book.genres.includes('fantasy')
));
const shortForm = books.filter(book => (
    book.genres.includes('short stories') || 
    book.genres.includes('essays')
));

const query = 'THE'; //searches the object books for the title including 'the' in any case
const results = books.filter(book => {
    const title = book.title.toLowerCase();
    return title.includes(query.toLowerCase())
});

//every and some
//every is boolean test function. does every element in this array have x?

const words2 = ['dot', 'dig', 'log', 'bag', 'wag'];
const all3Lets = words2.every(word => word.length === 3); //returns true
const allEndInG = words2.every(word => { //returns false
    const last = word.length -1;
    return word[last] === 'g'
});

//some is boolean test function. do some elements in ths array have x?

const someStartD = words2.some(word => word[0] === 'd');
const everyStartD = words2.every(word => word[0] === 'd');

const allGoodBooks = books.every(book => book.rating > 3.5);
const anyGoodAuthors = books.some(book => book.author === 2);

//sort
const prices = [400.50, 3000, 99.99, 35.99, 12.00, 9500]; //just calling sort() will return 12, 3000, 35.99, 400.5, 9500, 99.9, 9

prices.sort(); //without a callback function, sort converts numbers into strings and compares the stings which isn't correct

//so we use arr.sort(compare(a, b))
//compare(a,b) will subtract either a - b or b - a (whatever we specify) and order the elements either in ascending or descending order (whatever we specify)

const ascendingSort = prices.sort((a, b) => a - b);//but sort mutates the original array
const descendingSort = prices.sort((a, b) => b - a); //but sort mutates the original array
//so we should slice them first to save them as separate arrays

const badSort = prices.slice().sort();
const ascSort = prices.slice().sort((a, b) => a - b);
const descSort = prices.slice().sort((a, b) => b - a);

books.sort((a, b) => b.rating - a.rating);

//reduce
const nums3 = [3, 4, 5, 6, 7];
const product = nums3.reduce((total, currentVal) => {
    return total * currentVal;
});

let grades = [89, 96, 58, 77, 62, 93, 81, 99, 73];

const topScore = grades.reduce((accumulator, currVal) => {
    if (currVal > accumulator) return currVal;
    return accumulator;
})
topScore;

const maxGrade = grades.reduce((max, currVal) => { 
    return Math.max(max, currVal) //Math.max or Math.min will return the max or min number in an array
});
const minGrade = grades.reduce((min, currVal) => ( //implicit return without {}
    Math.min(min, currVal)
));

const sums = [10, 20, 30, 40, 50].reduce((sums, currVal) => {
    return sums + currVal;
})
const sums2 = [10, 20, 30, 40, 50].reduce((sums2, currVal) => {
    return sums2 + currVal;
}, 1000) //setting the initial value to 1000 as the starting accumulator, so will return 1150 instead of 150

//using reduce for an object
const votes = ['y', 'y', 'n', 'y', 'y', 'y', 'n', 'y', 'n', 'n', 'n', 'y', 'y', 'undecided'];

// const results = votes.reduce(( , ), {}); //initial value is set to an empty object so it can fill it
const results1 = votes.reduce((tally, val) => {
    if(tally[val]) {
        tally[val]++;
    } else {
        tally[val] = 1;
    } 
    return tally
}, {});

// {
//     y: 12,
//     n: 5
// }

// const results = votes.reduce((tally, val)) => { //another way to write the same thing
//     tally[val] = (tally[val] || 0) + 1;
//     return tally;
// }, {})

const groupedByRatings = books.reduce((groupedBooks, book) => {
    const key = Math.floor(book.rating);
    if(!groupedBooks[key]) groupedBooks[key] = [];
    groupedBooks[key].push(book)
    return groupedBooks;
}, {})

