//Do the below programs in arrow functions.
//a.Print odd numbers in an array
/*
let array = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let printOddNumbers = arr => {
    arr.forEach(num => {
        let isOdd = num % 2 !== 0;
        if (isOdd) {
            console.log(num);
        }
    });
};

printOddNumbers(array);
*/

//b. Convert all the strings to title caps in a string array
/*
const stringArray = ["hello world", "good morning", "javascript is fun"];

const convertToTitleCase = arr => {
    return arr.map(str => {

    //in the down line add * after S
        return str.replace(/\w\S/g, txt => {
            return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
        });
    });
};

const titleCaseArray = convertToTitleCase(stringArray);

console.log("Original Array:", stringArray);
console.log("Title Case Array:", titleCaseArray);
*/

//c.Sum of all numbers in an array
/*
const numberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const sum = arr => arr.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

console.log("Sum:", sum(numberArray));
*/
//d.Return all the prime numbers in an array
/*
let numberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let isPrime = num => {
    if (num < 2) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
};

let primeNumbers = arr => arr.filter(num => isPrime(num));

console.log("Original Array:", numberArray);
console.log("Prime Numbers:", primeNumbers(numberArray));
*/

//e.Return all the palindromes in an array

let stringArray = ["level", "hello", "racecar", "world", "madam"];

let isPalindrome = str => {
    const reversedStr = str.split('').reverse().join('');
    return str === reversedStr;
};

let palindromeArray = arr => arr.filter(word => isPalindrome(word));

console.log("Original Array:", stringArray);
console.log("Palindromes:", palindromeArray(stringArray));
