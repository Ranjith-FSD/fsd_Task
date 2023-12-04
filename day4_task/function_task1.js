/*
Do the below programs in anonymous function & IIFE

//A.Print odd numbers in an array
//Anonymous function:
var a = [1, 2, 3, 4, 5, 6, 7, 8, 9];

(function (arr) {
    for (var i = 0; i < arr.length; i++) {
        if (function (num) {
            return num % 2 !== 0;
        }(arr[i])) {
            console.log(arr[i]);
        }
    }
})(a);

//IIFE function:
(function (arr) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] % 2 !== 0) {
            console.log(arr[i]);
        }
    }
})([1, 2, 3, 4, 5, 6, 7, 8, 9]);
*/
/*
//B.Convert all the strings to title caps in a string array
//Anonymous function:
var stringArray = ["hello world", "good morning", "javascript is fun"];

(function (arr) {
    for (var i = 0; i < arr.length; i++) {
        arr[i] = (function (str) {
        //in this lower line add one star(*) after S
           return str.replace(/\w\S/g, function (txt) {
           
                return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
            });
        })(arr[i]);
    }
})(stringArray);

console.log(stringArray);

//IIFE function:

var stringArray = ["hello world", "good morning", "javascript is fun"];

(function (arr) {
    for (var i = 0; i < arr.length; i++) {
        arr[i] = (function (str) {
        //in this lower line add one star(*) after S
            return str.replace(/\w\S/g, function (txt) {
                return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
            });
        })(arr[i]);
    }
})(stringArray);

console.log(stringArray);
*/
/*
//c.Sum of all numbers in an array
//Anonymous function:

var numberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];

var sum = function (arr) {
    var a = 0;
    for (var i = 0; i < arr.length; i++) {
        a += arr[i];
    }
    return a;
}(numberArray);

console.log("Sum:", sum);

//IIFE function:
var numberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];

var sum = (function (arr) {
    var a = 0;
    for (var i = 0; i < arr.length; i++) {
        a += arr[i];
    }
    return a;
})(numberArray);

console.log("Sum:", sum);
*/

/*
//d.Return all the prime numbers in an array
//Aaonymous function:
var numberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

var primeNumbers = (function (arr) {
    function isPrime(num) {
        if (num < 2) {
            return false;
        }
        for (var i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) {
                return false;
            }
        }
        return true;
    }

    return arr.filter(function (num) {
        return isPrime(num);
    });
})(numberArray);

console.log("Prime Numbers:", primeNumbers);

//IIFE function:
var numberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

var primeNumbers = (function (arr) {
    function isPrime(num) {
        if (num < 2) {
            return false;
        }
        for (var i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) {
                return false;
            }
        }
        return true;
    }

    return (function () {
        return arr.filter(function (num) {
            return isPrime(num);
        });
    })();
})(numberArray);

console.log("Prime Numbers:", primeNumbers);
*/

/*
//Return all the palindromes in an array
//Anonymous function:

var stringArray = ["level", "hello", "racecar", "world", "mom", "madam"];

var palindromes = (function (arr) {
    function isPalindrome(str) {
        var reversedStr = str.split('').reverse().join('');
        return str === reversedStr;
    }

    return arr.filter(function (word) {
        return isPalindrome(word);
    });
})(stringArray);

console.log("Palindromes:", palindromes);

//iife function:

var stringArray = ["level", "hello", "racecar", "world", "mom", "madam"];

var palindromes = (function (arr) {
    return (function () {
        function isPalindrome(str) {
            var reversedStr = str.split('').reverse().join('');
            return str === reversedStr;
        }

        return arr.filter(function (word) {
            return isPalindrome(word);
        });
    })();
})(stringArray);

console.log("Palindromes:", palindromes);
*/
/*
//f.Return median of two sorted arrays of the same size 
//Anonymous function:
function findMedianSortedArrays(arr1, arr2) {
    const n = arr1.length;


    if (n !== arr2.length) {
        throw new Error("Arrays must be of the same size");
    }

    const mid = Math.floor(n / 2);

    const correspondingElement = arr2[mid];

    return (arr1[mid] + correspondingElement) / 2;
}
const arr1 = [1, 2, 3, 4, 5];
const arr2 = [6, 7, 8, 9, 10];

const median = findMedianSortedArrays(arr1, arr2);
console.log("Median:", median);

//IIFE function:

var arr1 = [1, 2, 3, 4, 5];
var arr2 = [6, 7, 8, 9, 10];

var median = (function (arr1, arr2) {
    const n = arr1.length;

    // Ensure both arrays are of the same length
    if (n !== arr2.length) {
        throw new Error("Arrays must be of the same size");
    }

    // Find the middle index
    const mid = Math.floor(n / 2);

    // Find the corresponding element in the other array
    const correspondingElement = arr2[mid];

    // The median is the average of the middle elements
    return (arr1[mid] + correspondingElement) / 2;
})(arr1, arr2);

console.log("Median:", median);
*/
/*
//g.Remove duplicates from an array
//Anonymous function:
var array = [1, 2, 3, 4, 1, 2, 5, 6, 3, 7, 8, 9];

var uniqueArray = (function (arr) {
    return arr.filter(function (item, index, self) {
        return self.indexOf(item) === index;
    });
})(array);

console.log("Array with Duplicates:", array);
console.log("Array without Duplicates:", uniqueArray);

//IIFE function
var array = [1, 2, 3, 4, 1, 2, 5, 6, 3, 7, 8, 9];

var uniqueArray = (function (arr) {
    return (function () {
        return arr.filter(function (item, index, self) {
            return self.indexOf(item) === index;
        });
    })();
})(array);

console.log("Array with Duplicates:", array);
console.log("Array without Duplicates:", uniqueArray);
*/

/*
//h.Rotate an array by k times
//Anonymous function:

var array = [1, 2, 3, 4, 5];
var k = 2;

var rotatedArray = (function (arr, k) {
    k = k % arr.length; // Handle cases where k is greater than the array length

    // Use slice to create a rotated version of the array
    return arr.slice(k).concat(arr.slice(0, k));
})(array, k);

console.log("Original Array:", array);
console.log("Rotated Array:", rotatedArray);

//IIFE function:

var array = [1, 2, 3, 4, 5];
var k = 2;

var rotatedArray = (function (arr, k) {
    return (function () {
        k = k % arr.length; // Handle cases where k is greater than the array length

        // Use slice to create a rotated version of the array
        return arr.slice(k).concat(arr.slice(0, k));
    })();
})(array, k);

console.log("Original Array:", array);
console.log("Rotated Array:", rotatedArray);
*/
