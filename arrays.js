// How to find the sum of all elements in an array?
let arr = [1, 2, 3, 4];
let sum = arr.reduce((acc, curr) => acc + curr, 0);
console.log(sum);

// How to find the maximum value in an array?
let givenArr = [1, 2, 3, 4, 5];
let maxNum = Math.max(...givenArr);
console.log(maxNum);

// How to check if an array contains a value?
let arrNum = [1, 2, 3, 10];
let includedNum = arrNum.includes(10);
console.log(includedNum);

// How to reverse an array in place?
let nums = [1, 2, 3, 4, 5];
let reverseArr = nums.reverse();
console.log(nums);

// How to concatinate two arrays?
let arr1 = [1, 2, 3, 4];
let arr2 = [5, 6, 7];
let concatArr = arr1 + "," + arr2;
console.log(concatArr);
