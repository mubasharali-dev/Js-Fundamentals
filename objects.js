// OBJECTS

// Write a program to sun the values of 3 employees in a company and store the salaries in to sum variable.
let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130,
};
let sum = 0;
for (let key in salaries) {
  sum += salaries[key];
}
console.log(sum);

// Write a JavaScript function to merge two objects into a single object, with the values of the second object overwriting those of the first.
let obj1 = {
  name: "John",
  age: 29,
};
let obj2 = {
  age: 35,
  gender: "male",
  Location: "USA",
};
function mergeObjects(obj1, obj2) {
  return Object.assign({}, obj1, obj2);
}
console.log(mergeObjects(obj1, obj2));

// Write a JavaScript function to shallow clone an object.
let user = {
  name: "Natalia",
  Code: "92",
};
function shallowObject() {
  console.log(Object.assign({}, user));
}
shallowObject();

// Write a JavaScript function to check if an object is empty (has no properties).
let obj = {};
function isEmpty(obj) {
  for (let key in obj) {
    return false;
  }
  return true;
}
console.log(isEmpty(obj));

// Write a JavaScript function to count the properties of an object.
function count(countProperties) {
  countProperties = {
    name: "Cena",
    area: "UK",
    gender: "male",
  };
  console.log(Object.keys(countProperties).length);
}
count();

// Write a JavaScript function to convert an object into an array of key-value arrays.
function objectToArray(newObj) {
  newObj = {
    name: " Dana",
    Location: "USA",
  };
  let newArray = Object.entries(newObj);
  console.log(newArray);
  //   console.log(Array(newArray[0] + " , " + newArray[1]));
  console.log(newArray[0].concat(newArray[1]));
}
objectToArray();
