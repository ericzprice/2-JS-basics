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

// var year, yearJohn, yearMark;
// now = 2018;
// ageJohn = 28;
// ageMark = 33;

// Math operators
// var yearJohn = now - ageJohn;
// var yearMark = year - ageMark;
//
// console.log(yearJohn);
//
// console.log(now + 2);
// console.log(now * 2);
// console.log(now / 10);
//
// Logical Operators
// var johnOlder = ageJohn > ageMark;
// console.log(johnOlder);
// = false

// var johnOlder = ageJohn < ageMark;
// console.log(johnOlder);
// = true
//
// typeOf operator
// console.log(typeof johnOlder);
// = Boolean
// console.log(typeof ageJohn);
// = number
// console.log(typeof 'Mark is older than John');
// = string
// var x;
// console.log(typeof x);
// = undefined
//
//
// ******************************************
// Operator Precedence
//*******************************************
// var now = 2018;
// var yearJohn = 1989;
// var fullAge = 18;

// Multiple Operators
// var isFullAge = now - yearJohn >= fullAge;
//true , - has Precedence before >=
// console.log(isFullAge);
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence TABLE

// Grouping
// var ageJohn = now - yearJohn;
// var ageMark = 35;
// var average = ageJohn + ageMark / 2;
// Division takes Precedence over +, so the calculation wont be read in the prop order
//
// var average = (ageJohn + ageMark) / 2;
// console.log(average);

// Multimle Assignments
// var x, y;
// x = y = (3 + 5) + 4 - 6;
// The Table has a middle column of Associativity which is the direction of operations...it goes right to left in this case and x = y
// 8 * 4 - 6 // 32 - 6 //
// 26
// console.log(x, y);


// More operators
// x = x * 2;
// is the same as
// x *= 2;
// colsole.log(x);
// x += 10;
// console.log(x);
// = x = x + 10

// All three are the same effect
// x = x + 1;
// x += 1;
// x++;
// x--;
//
//
//******************************************
// Coding Challenge 1
//*******************************************

// Mass Values
var markMass, johnMass;
markMass = 88;
johnMass = 68;

// Height Values
var markHeight, johnHeight;
markHeight = 2.1;
johnHeight = 1.8;

// Mark's BMI
var markBmi = markMass / (markHeight * 2);
console.log(markBmi);

// John's BMI
var johnBmi = johnMass / (johnHeight * 2);
console.log(johnBmi);

// Mark VS John
var isMarkHigher = markBmi > johnBmi;
console.log(isMarkHigher);

// Print to result to console
console.log("Is Mark's BMI higher than John's BMI? " + isMarkHigher);
