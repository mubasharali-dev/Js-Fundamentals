//  FUNCTIONS

// 1. Write a JavaScript function that reverse a number.
function reverseNum(num) {
  num = num + "";
  console.log(num.split("").reverse().join(""));
}
reverseNum(123);

// Write a JavaScript function that checks whether a passed string is palindrome or not?
function isPalindrome(str) {
  str = str.toLowerCase();
  console.log(str.split("").reverse().join(""));
}
isPalindrome("Madam");

// Write a JavaScript function to convert Celsius to Fahrenheit.
function celciustoF(c) {
  console.log(c * 1.8 + 32);
}
celciustoF(37);

// Write a JavaScript function to find the greatest common divisor (GCD) of two numbers.
function gcd(a, b) {
  if (b === 0) {
    return a;
  } else {
    console.log(`(${b} , ${a % b})`);
  }
}
gcd(21, 35);

// Write a JavaScript function to generate a random password of a specified length.
function passwordGenerator() {
  let password = "";
  let possibleChars =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  for (let i = 0; i < possibleChars.length; i++) {
    password += possibleChars.charAt(
      Math.floor(Math.random() * possibleChars.length)
    );
  }
  console.log(password);
}
passwordGenerator();
