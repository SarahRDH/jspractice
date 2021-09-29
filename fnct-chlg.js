function isValid(password, username) {
    if (password.length >= 8 && password.indexOf(' ') !== -1 && password.indexOf(username) !== -1) {
        return true;
    }
    else {
        return false;
    }
}

// function isValid(password, username) {
//     if (password.length < 8) {
//         return false;
//     }
//     if (password.indexOf(' ') !== -1) {
//         return false;
//     }
//     if (password.indexOf(username) !== -1) {
//         return false;
//     }
//     return true;
// }

const arrOne = [0, 50];
const arrTwo = [75, 76, 80, 95, 100];

function takeAvg(arr) {
    let sum = 0; //don't forget to set variable to zero outside the for loop
    for (let x of arr) {
        sum += x;       
    }
    let avg = sum / arr.length; //could just say return avg = sum / arr.length;
    console.log(sum);
    return avg; 
}


// function isPangram(words) {
//     //.sort the string
//     //.split the string
//     //.split the alphabet
//     //compare .indexOf both chars
//     let alphabet = 'abcdefghijklmnopqrstuvwxyz';
//     let sentence = 'The quick brown fox jumped over the lazy dog';
//     let sentenceChars = sentence.split('');
//     let alphaArr = alphabet.split('');
//     console.log(sentenceChars);
//     console.log(alphaArr);

//    if (words.indexOf(alphaArr) === -1) {
//        return true;
//    }
//    return false;
// }

function isPangram(words) {
    let lowerWords = words.toLowerCase();
    let alphabet = 'abcdefghijklmnopqrstuvwxyz';
    for (let char of alphabet) {       
        if (lowerWords.indexOf(char) === -1) {
            console.log(char); //this prints some of the missing letters! I didn't mean for it too, but it does...
            return false;
        //if (!lowerWords.includes(char)) {
            //return false;
       //}
        }
    }
    return true;
}

function pick(arr) {
    const idx = Math.floor(Math.random() * arr.length);
    return arr[idx];
}

//another way to write getCard using a helper function so we don't have to duplicate code
function getCard() {
    const myValue = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'K', 'Q'];
    const value = pick(myValue);

    const mySuit = ['clubs', 'hearts', 'diamonds', 'spades'];
    const suit = pick(mySuit);

    return {value: value, suit: suit};
}

// function getCard() {
//     const myValue = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'K', 'Q'];
//     const valIdx = Math.floor(Math.random() * myValue.length);
//     const value = myValue[valIdx];

//     const mySuit = ['clubs', 'hearts', 'diamonds', 'spades'];
//     const suitIdx = Math.floor(Math.random() * mySuit.length);
//     const suit = mySuit[suitIdx];

//    return {value: value, suit: suit};
// }


