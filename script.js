// console.log('Hello World!');
// ****************************************
// // Variables and data types
//

// //
// var firstName = 'John';
// console.log(firstName);
//
// var lastName = 'Smith';
// var age = 28;
//
// var fullAge= true;
// console.log(fullAge);
//
// var job;
// console.log(job);
//
// job = 'Teacher';
// console.log(job);
//
// // Var naming rules
// // All var names must start with a $, _, or letter...and NOT JS names like var, if...
// var _3years = 3;
// var john/mark = 'John and Mark';
// var if = 23;

// ******************************************
// Variable mutation and type coercion
//*******************************************
// var firstName = 'John';
// var age = 28;
//
// // Type coercion
// console.log(firstName + ' ' + age);
//
// var job, isMarried;
// job = 'teacher';
// isMarried = false;
//
// console.log(firstName + ' is a ' + age + ' year old ' + job + '. Is he married? ' + isMarried);
//
// // Variable mutation
// // Changeing value of a var after var is already declared with a value above in the code
// age = 'twenty eight';
// job = 'driver';
// alert(firstName + ' is a ' + age + ' year old ' + job + '. Is he married? ' + isMarried);
//
// var lastName = prompt('What is his last Name?');
// console.log(firstName + ' ' + lastName);

// ******************************************
// Basic Operators
//*******************************************

var year, yearJohn, yearMark;
now = 2018;
ageJohn = 28;
ageMark = 33;

// Math operators
var yearJohn = now - ageJohn;
var yearMark = year - ageMark;

console.log(yearJohn);

console.log(now + 2);
console.log(now * 2);
console.log(now / 10);

// Logical Operators
var johnOlder = ageJohn > ageMark;
console.log(johnOlder);
// = false

var johnOlder = ageJohn < ageMark;
console.log(johnOlder);
// = true
//
// typeOf operator
console.log(typeof johnOlder);
// = Boolean
console.log(typeof ageJohn);
// = number
console.log(typeof 'Mark is older than John');
// = string
var x;
console.log(typeof x);
// = undefined
