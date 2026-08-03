 //1.Write a loop to print numbers from 1 to 10
 console.log("   Question 1:  ");
for (let i = 1; i <= 10; i++) {
    console.log(i);
}

// 2. Function to return the sum of an array
console.log("   Question 2:");
function sumArray(arr) {
    return arr.reduce((sum, num) => sum + num, 0);
}
console.log(sumArray([1, 2, 3, 4]));

// 3. Function to find the largest number in an array
console.log("   Question 3:");
function largestNumber(arr) {
    return Math.max(...arr);
}
console.log(largestNumber([10, 25, 8, 50, 15]));

// 4. Function to check if a number is even or odd
console.log("   Question 4:");
function checkEvenOdd(num) {
    return num % 2 === 0 ? "Even" : "Odd";
}
console.log(checkEvenOdd(7));

// 5. Function to reverse a string
console.log("   Question 5:");
function reverseString(str) {
    return str.split("").reverse().join("");
}
console.log(reverseString("Hello"));

// 6. Merge two arrays using the spread operator
console.log("   Question 6:");
const a = [1, 2];
const b = [3, 4];
const result = [...a, ...b];
console.log(result);

// 7. Return even numbers using ES6 filter
console.log("   Question 7:");
const numbers = [1, 2, 3, 4, 5, 6];
const evenNumbers = numbers.filter(num => num % 2 === 0);
console.log(evenNumbers);

// 8. Rewrite using template literals
console.log("   Question 8:");
const name = "Alice";
const msg = `Hello ${name}, welcome!`;
console.log(msg);

// 9. Rewrite using an arrow function
console.log("   Question 9:");
const greet = (name) => `Hello, ${name}`;
console.log(greet("Alice"));
