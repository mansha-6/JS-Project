// Question 1

//code
let number = 5; 
if (number % 2 === 0) {
    console.log(`${number} is Even.`);
} else {
    console.log(`${number} is Odd.`);
}

if (number > 0) {
    console.log(`${number} is Positive.`);
} else if (number < 0) {
    console.log(`${number} is Negative.`);
} else {
    console.log(`${number} is Zero.`);
}


//Input
5
//Output
5 is Odd.
5 is Positive.

// Question 2
// code
let N = 10; 
let sum = (N * (N + 1)) / 2;

console.log(`The sum of the first ${N} natural numbers is: ${sum}`);

//Input
10
//Output
The sum of the first 10 natural numbers is: 55

//Question 3
//code
// Program to calculate the factorial of a given number

// Define the number
let number = 5; 
let factorial = 1;
for (let i = 1; i <= number; i++) {
        factorial *= i;
    }
    console.log(`The factorial of ${number} is: ${factorial}`);
//Input
5
//Output
The factorial of 5 is: 120

//Question 4
//code
// Program to find the factors of a given number

// Define the number
let number = 28; 
    console.log(`Factors of ${number} are:`);
    for (let i = 1; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
            console.log(i); 
            if (i !== number / i) {
                console.log(number / i); 
            }
    }
}
//Input
28
//Output
Factors of 28 are:
1
28
2
14
4
7

//Question 5
//code
let number = 29;
function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false; 
        }
    }
    return true; 
}

if (isPrime(number)) {
    console.log(`${number} is a Prime number.`);
} else {
    console.log(`${number} is not a Prime number.`);
}
//Input
29
//Output
29 is a Prime number.

//Question 6
//code
let terms = 10; 
function generateFibonacci(n) {
    let sequence = [0, 1]; 
    for (let i = 2; i < n; i++) {
        let nextTerm = sequence[i - 1] + sequence[i - 2];
        sequence.push(nextTerm);
    }
    return sequence;
}
let fibonacciSequence = generateFibonacci(terms);
console.log(`Fibonacci sequence up to ${terms} terms:`, fibonacciSequence);
//Input
10
//Output
Fibonacci sequence up to 10 terms: [
    0, 1,  1,  2,  3,
    5, 8, 13, 21, 34
  ]

//Question 7
//code
let inputString = "racecar"; 
function isPalindrome(str) {
    let normalizedStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');
    let reversedStr = normalizedStr.split('').reverse().join('');
    return normalizedStr === reversedStr;
}

if (isPalindrome(inputString)) {
    console.log(`${inputString} is a palindrome.`);
} else {
    console.log(`${inputString} is not a palindrome.`);
}
//Input
racecar
//Output
racecar is a palindrome.


Question 8
//code
let number = 1234; 
function sumOfDigits(num) {
    let sum = 0;
    while (num > 0) {
        let digit = num % 10; // Extract the last digit
        sum += digit; // Add the digit to the sum
        num = Math.floor(num / 10); // Remove the last digit
    }
    return sum;
}
let sum = sumOfDigits(number);
console.log(`The sum of digits of ${number} is: ${sum}`);
//Input
1234
//Output
The sum of digits of 1234 is: 10

//Question 9
//code
let number = 153;
function isArmstrong(num) {
    let sum = 0;
    let temp = num;
    let digits = num.toString().length;

    while (temp > 0) {
        let digit = temp % 10;
        sum += Math.pow(digit, digits);
        temp = Math.floor(temp / 10);
    }

    return sum === num;
}
if (isArmstrong(number)) {
    console.log(`${number} is an Armstrong number.`);
} else {
    console.log(`${number} is not an Armstrong number.`);
}

//Input
153
//Output
153 is an Armstrong number.

//Question 10
//code
let year = 2024;

function isLeapYear(y) {
    if (y % 4 === 0) {
        if (y % 100 === 0) {
            if (y % 400 === 0) {
                return true; 
            } else {
                return false; 
            }
        } else {
            return true;
        }
    } else {
        return false; 
    }
}
if (isLeapYear(year)) {
    console.log(`${year} is a leap year.`);
} else {
    console.log(`${year} is not a leap year.`);
}
//Input
2024
//Output
2024 is a leap year.

//Question 11
//code
let num1 = 56; 
let num2 = 98; 
function gcd(a, b) {
    while (b !== 0) {
        let temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}
let result = gcd(num1, num2);
console.log(`The greatest common divisor (GCD) of ${num1} and ${num2} is: ${result}`);
//Input
56 and 98
//Output
The greatest common divisor (GCD) of 56 and 98 is: 14

//Question 12
//code

let num1 = 12; 
let num2 = 15; 
function gcd(a, b) {
    while (b !== 0) {
        let temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}

function lcm(a, b) {
    return (a * b) / gcd(a, b);
}
let result = lcm(num1, num2);
console.log(`The least common multiple (LCM) of ${num1} and ${num2} is: ${result}`);

//Input
12 and 15
//Output
The least common multiple (LCM) of 12 and 15 is: 60

//Question 13
//code
let string1 = "listen";  
let string2 = "silent"; 
function areAnagrams(str1, str2) {
    let normalizedStr1 = str1.replace(/\s/g, '').toLowerCase();
    let normalizedStr2 = str2.replace(/\s/g, '').toLowerCase();

    // Check if lengths are the same
    if (normalizedStr1.length !== normalizedStr2.length) {
        return false;
    }
    let charCount1 = {};
    let charCount2 = {};

    for (let char of normalizedStr1) {
        charCount1[char] = (charCount1[char] || 0) + 1;
    }
    for (let char of normalizedStr2) {
        charCount2[char] = (charCount2[char] || 0) + 1;
    }
    for (let char in charCount1) {
        if (charCount1[char] !== charCount2[char]) {
            return false;
        }
    }
    return true;
}
if (areAnagrams(string1, string2)) {
    console.log(`"${string1}" and "${string2}" are anagrams.`);
} else {
    console.log(`"${string1}" and "${string2}" are not anagrams.`);
}
//Input
listen and silent 
//Output
"listen" and "silent" are anagrams.

//Question 14
// code
class Solution {
    areNumbersAscending(s) {
        // Split the sentence into tokens
        const tokens = s.split(" ");
        
        // Extract numbers from the tokens
        const numbers = tokens
            .filter(token => !isNaN(token)) // Check if the token is a number
            .map(Number); // Convert to numbers

        // Check if numbers are strictly increasing
        for (let i = 0; i < numbers.length - 1; i++) {
            if (numbers[i] >= numbers[i + 1]) {
                return false;
            }
        }

        return true;
    }
}

// Example usage
const s = "1 box has 3 blue 4 red 6 green and 12 yellow marbles";
const solution = new Solution();
const output = solution.areNumbersAscending(s);
console.log(output); 

// Input
"1 box has 3 blue 4 red 6 green and 12 yellow marbles"

//Output
true

//Question 15
//Code
class Solution {
    missingNumber(nums) {
        // Calculate the expected sum of numbers from 0 to n
        const n = nums.length;
        const expectedSum = (n * (n + 1)) / 2;
        
        // Calculate the actual sum of the numbers in the array
        const actualSum = nums.reduce((acc, num) => acc + num, 0);
        
        // The difference is the missing number
        return expectedSum - actualSum;
    }
}

const solution = new Solution();

const nums1 = [3, 0, 1];
console.log(solution.missingNumber(nums1)); // Output: 2

const nums2 = [0, 1];
console.log(solution.missingNumber(nums2)); // Output: 2

//Input
[3,0,1]
//Output
2








