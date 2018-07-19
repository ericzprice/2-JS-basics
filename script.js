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
// var markMass, johnMass;
// markMass = 88;
// johnMass = 68;

// Height Values
// var markHeight, johnHeight;
// markHeight = 2.1;
// johnHeight = 1.8;

// Mark's BMI
// var markBmi = markMass / (markHeight * 2);
// console.log(markBmi);

// John's BMI
// var johnBmi = johnMass / (johnHeight * 2);
// console.log(johnBmi);

// Mark VS John
// var isMarkHigher = markBmi > johnBmi;
// console.log(isMarkHigher);

// Print to result to console
// console.log("Is Mark's BMI higher than John's BMI? " + isMarkHigher);
//
//
//******************************************
// If/Else Statements
//******************************************
// var firstName = 'John';
// var civilStatus = 'single';
//
// if (civilStatus === 'married') {
//       console.log(firstName + ' is married!');
// } else {
//       console.log(firstName + ' will hopefully marry soon');
// }
//
// var isMarried = false;
// These two if statements are synonymous
// if (isMarried === true) {
//       console.log(firstName + ' is married!');
// }
// if (isMarried) {
//       console.log(firstName + ' is married!');
// }
// else {
//       console.log(firstName + ' will hopefully marry soon');
// }
//
// var markMass, johnMass;
// markMass = 88;
// johnMass = 68;
//
// var markHeight, johnHeight;
// markHeight = 2.1;
// johnHeight = 1.8;
//
// var markBmi = markMass / (markHeight * 2);
// var johnBmi = johnMass / (johnHeight * 2);
//
// if (markBmi > johnBmi) {
//       console.log('Mark\'s BMI is higher than John\'s.');
// }
// else {
//       console.log('John\'s BMI is higher than Mark\'s.');
// }
//******************************************
// Boolean Logic
//******************************************

// var firstName = 'John';
// var age = 20;
//
// if (age < 13) {
//       console.log(firstName + ' is a boy.');
// } else if (age >= 13 && age < 20) {
//       console.log(firstName + ' is a teenager.');
// } else if (age >= 20 && age < 30) {
//       console.log(firstName + ' is a young man.');
// } else {
//       console.log(firstName + ' is a man.');
// }

//******************************************
// The Ternary Operator and Switch Statements
//******************************************
// var firstName = 'John';
// var age = 16;

// Ternary Operator
// age >= 18 ? console.log(firstName + ' dirnks beer.')
// : is the if else
// : console.log(firstName + ' dirnks juice.');

// var drink = age >= 18 ? 'beer' : 'juice';
// console.log(drink);
// IS THE SAME AS...
// if (age >= 18) {
//       var drink = "beer";
// } else {
//       var drink = 'juice';
// }

// Switch statement
// var job = 'reacher';
// switch (job) {
//       case 'teacher':
//       case 'instructor'
//             console.log(firstName + ' teaches kids how to code.');
//             break;
//       case 'driver':
//             console.log(firstName + ' teaches drives an Uber in Boulder.');
//             break;
//       case 'designer':
//             console.log(firstName + ' designs web sites.');
//             break;
//       default:
//             console.log(firstName + ' does something else.')
// }
//
// age = 17;
// switch (true) {
//       case age < 13:
//             console.log(firstName + ' is a boy.');
//             break;
//       case  age >= 13 && age < 20:
//             console.log(firstName + ' is a teenager');
//             break;
//       case  age >= 20 && age < 30:
//             console.log(firstName + ' is a young man.');
//             break;
//       default:
//             console.log(firstName + ' is a man.');
// }


// var firstName = 'John';
// var age = 20;
//
// if (age < 13) {
//       console.log(firstName + ' is a boy.');
// } else if (age >= 13 && age < 20) {
//       console.log(firstName + ' is a teenager.');
// } else if (age >= 20 && age < 30) {
//       console.log(firstName + ' is a young man.');
// } else {
//       console.log(firstName + ' is a man.');
// }
//******************************************
// Truthy and Falsy Values and Equality Operators
//******************************************

// falsy values: undefined, null, 0, '', NaN,
// truthy values: Not falsy Values

// var height;
//
// height = 23;
//
// if (height || height === 0) {
//       console.log('Variable is defined');
// } else {
//       console.log('Variable has NOT been defined');
// }
//
// // Equality Operators
// if (height === '23') {
//       console.log('The == operator does type coercion!');
//
//******************************************
// Coding Challenge 2
//******************************************


// var teamJohn = (89 + 120 + 103) / 3;
// // var teamJohn = (89 + 120 + 133) / 3;
// console.log(teamJohn);
// var teamMike = (116 + 94 + 123) / 3;
// console.log(teamMike);
// var teamMary = (97 + 134 + 105) / 3;

// if (teamJohn > teamMike) {
//       console.log('John\'s team wins with an average score of ' + teamJohn);
// } else if {
//       console.log('Mike\'s team wins with an average score of ' + teamMike);
// } else {
//       console.log('There is a draw');
// }

// if (teamJohn > teamMike && teamJohn > teamMary) {
//      console.log('John\'s team wins with an average score of ' + teamJohn);
// } else if (teamMike > teamJohn && teamMike > teamMary) {
//      console.log('Mike\'s team wins with an average score of ' + teamMike);
// } else if (teamMary > teamJohn && teamMary > teamMike) {
//      console.log('Mary\'s team wins with an average score of ' + teamMary);
// } else {
//      console.log('There is a draw');
// }
//******************************************
// Functions
//******************************************
// function calculateAge(birthYear) {
//       return 2018 - birthYear;
// }
//
// var ageJohn = calculateAge(1990);
// var ageMike = calculateAge(1948);
// var ageJane = calculateAge(1969);
// console.log(ageJohn, ageMike, ageJane);
//
//
// function yearsUntilRetirement(year, firstName) {
//       var age = calculateAge(year);
//       var retirement = 65 - age;
//
//       if (retirement > 0) {
//             console.log(firstName + ' retires in ' + retirement + ' years.');
//       } else {
//             console.log(firstName + ' is alread retired.')
//       }
//
// }
//
// yearsUntilRetirement(1990, 'John');
// yearsUntilRetirement(1948, 'Mike');
// yearsUntilRetirement(1969, 'Jane');

//******************************************
// Functions, Statements and Expressions
//******************************************
// Function Declaration must begin with function
// function whatDoYouDo(job, firstName) {}
//
// A Statement is any line entered into a JavaScript file or script

// Function Expressions = returns a value...unlike a Function Statements
// var whatDoYouDo = function(job, firstName) {
//       switch(job) {
//             case 'teacher':
//                   return firstName + ' teaches kids how to code.';
//             case 'driver':
//                   return firstName + ' drives a cab in Boulder.';
//             case 'designer':
//                   return firstName + ' designs web sites.';
//             default:
//                   return firstName + ' does something else';
//       }
// }
//
// conslole.log(whatDoYouDo('teacher', 'John'));
// conslole.log(whatDoYouDo('designer', 'Jane'));
// conslole.log(whatDoYouDo('retired', 'Mark'));

//******************************************
// Arrays
//******************************************

// INITIALIZE NEW ARRAY
// var names = ['john', 'Mark', 'Jane'];
// var years = new Array(1990, 1969, 1948);
// console.log(names[2]);
// console.log(names.length);

// MUTATE ARRAY DATA
// Changing the value of the index of 1 in the array, so Mark will be replaced with Ben and Mark is gone
// names[1] = 'Ben';
// console.log(names);

// Adding a new index to the array, specifying where you want it to be placed. Only effective if you know the contents of the array already,
// names[5] = 'Mary';
// console.log(names);

// alternatively you can just add a new index to the array knowing that you are doing so at the end of the array, so youre not accidentally replacing the data.
// names[names.length] = 'Mary';
// console.log(names);

// DIFFERNET DATA types
// var john = ['John','Smith', 1990, 'teacher', false]
//
// john.push('blue');
// console.log(john);
// .push method - has hidden code to make it work and would otherwise take 4 more lines of code

// john.push('blue');
// john.unshift('Mr.');
// console.log(john);
// .unshift adds and element to the beggining of the array

// john.pop();
// john.pop();
// .pop removes element from the end of the array and a ssecond line john.pop() removes the second from the end
// john.shift();
// console.log(john);
// removes element from the beggining of the ARRAY

// console.log(john.indexOf(1990));
// returns position of the data that is entered into parantheses

// If we ask the indexOf method to reutrn the index of a value that does not exist in th array, it will return -1
// console.log(john.indexOf(23));
//
// var isDesigner = john.indexOf('designer') === -1 ? 'John is NOT a designer' : 'John IS a designer';
// console.log(isDesigner)
// ? -is a shorter way of writing an if/else statement.
// returns 'John is NOT a designer' bc it's not listed in the array
// you have to make it a variable bc otherwise it's not going to return anything to the console, just like you had to do that w console logging the indexOf above with the year 1990.
// It will store the data, but in order to see the result of the if/else statement, you have to print it somewhere. In this case, youre printing it to the console.


//******************************************
// Coding Challenge 3
//******************************************

// Our Solution is an Expression and his is a Declaration
//
//
// var tipAmount = function (total) {
//       if (total < 50) {
//             return total * 0.2;
//       } else if (total >= 50 && total <= 200) {
//             return total * 0.15;
//       } else {
//             return total * 0.1;
//       }
// }
//
// console.log(tipAmount(124));
// console.log(tipAmount(48));
// console.log(tipAmount(268));
//
// var tipTotal = [18.6, 9.6, 26.8];
// var totalBill = [142.6, 57.6, 294.8];

// Challenge solution
// function tipCalculator(bill) {
//       var percentage;
//       if (bill < 50) {
//             percentage = .2;
//       } else if (bill >= 50 && bill < 200) {
//             percentage = .15;
//       } else {
//             percentage = .1;
//       }
//       return percentage * bill;
// }
//
// var bills = [124, 48, 268];
// var tips = [
//       tipCalculator(bills[0]),
//       tipCalculator(bills[1]),
//       tipCalculator(bills[2])
// ];
// var finalValues = [
//       bills[0] + tips[0],
//       bills[1] + tips[1],
//       bills[2] + tips[2],
// ];
//
// console.log(tips, finalValues);


//******************************************
// Objects and Properties
//******************************************

// THERE ARE TWO WAYS OF CREATING NEW OBJEXTS, OBJECT LITERAL AND NEW OBJECT SYNTAX
// 1-OBJECT LITERAL
var john = {
      firstName: 'John',
      lastName: 'Smith',
      birthYear: 1990,
      family: ['Jane', 'Mark', 'Bob', 'Emily'],
      job: 'teacher',
      isMarried: false
};

// logging to the console the entire John object, displaying all properties and values
console.log(john);

// Multiple ways to log one property and its value, but the first way can be used to get all the results
console.log(john.firstName);
console.log(john['lastName']);
var x = 'birthYear';
console.log(john[x]);

// Mutating or also known as changing data
john.job = 'designer';
john['isMarried'] = true;
console.log(john);

//2- NEW OBJECT SYNTAX

var jane = new Object();
jane.firstName = 'Jane';
jane.birthYear = 1969;
jane[lastName] = 'Smith';
console.log(jane);
