// CONDITIONAL BRANCHING

// How to use an if statement to check if a number is positive?
let inputNum = 4;
if (inputNum >= 0) {
  console.log(`${inputNum} is positive`);
} else {
  console.log(`${inputNum} is a negative number`);
}

// Use the switch statment to print what day is today ?
let day = "Sunday";
switch (day) {
  case "Monday":
    console.log("Today is Monday");
    break;

  case "Tuesday":
    console.log("Today is Tuesday");
    break;

  case "Wednesday":
    console.log("Today is Wednesday");
    break;

  case "Thursday":
    console.log("Today is Thursday");
    break;

  case "Friday":
    console.log("Today is Friday");
    break;

  case "Saturday":
    console.log("Today is Saturday");
    break;

  case "Sunday":
    console.log("Today is Sunday");
    break;

  case "Monday":
    console.log("Today is Monday");
    break;
}

// Q: Write a JavaScript function that takes two numbers as arguments and returns the largest of them.
function maxNum(a, b) {
  if (a > b) {
    console.log(`${a} is greater than ${b}`);
  } else {
    console.log(`${b} is greater than ${a}`);
  }
}
maxNum(4, 3);

// Q: Write a JavaScript program to check if a number is positive, negative, or zero.
let num = 0;
if (num > 0) {
  console.log(`${num} is positive`);
} else if (num < 0) {
  console.log(`${num} is negative`);
} else {
  console.log(`${num} is Zero`);
}

// Q: Write a JavaScript program that checks if a number is odd or even.
let givenNum = 4;
if (givenNum % 2 == 0) {
  console.log("Number is Even");
} else {
  console.log("Number is odd");
}
