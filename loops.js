// LOOPS QUESTIONS WITH ANSWERS

// How to loop through an array and print each element?
let loopArr = [5, 6, 7, 8];
for (let i of loopArr) {
  console.log(i);
}

// How to loop through an object and print each property?
let obj1 = {
  name: "Harry",
  age: 25,
  gender: "male",
};
for (let property in obj1) {
  console.log(property + ":" + obj1[property]);
}

// How to use forEach to loop through an array and print each element?
let names = ["John", "Natalia", "Porter"];
names.forEach(function (element) {
  console.log(element);
});

// How to use a while loop to sum numbers from 1 to 10?
let initialSum = 0;
let i = 1;
while (i <= 10) {
  initialSum += i;
  i++;
}
console.log(initialSum);

// How to use a do-while loop to print "Hello, world!" 5 times?
let j = 1;
do {
  console.log("Hello World!");
  j++;
} while (j <= 5);
