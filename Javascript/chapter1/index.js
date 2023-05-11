// 1. ways to print in  javascript
// console.log("hello world");
// alert("hello");
// document.write("this is document write");

// 2.javascript console API
// console.log("this is console log");
// console.warn("this is warning");
// console.error("this is an error");

// 3.javascript variables
// what are variables?- containers to store data value
// var number1 = 34;
// var number2 = 56;
// console.log(number1 + number2);
// 4. data types of javascript
// number
var number1 = 34;
var number2 = 56;
// string
var str1 = "this is string 1";
var str2 = "this is string 2";
// objects
var marks = {
  ravi: 10,
  hariyam: 40,
  hira: 90,
};
// booleans
// var a = true;
// var b = false;

// undefined
var und;
// null
var n = null;
// console.log(n);

// At a very high level, there are two types of data types in javascript
// 1.primitve data types = undefined, null, number, string, boolean, symbol;
// 2.Reference data types = arrays and objects;
//  array
// var arr = [1, 2, 3, 4, 5];

// operators of javascript
// arithmetic operations
// var a = 100;
// var b = 10;
// console.log("the value of a+b is", a + b);
// console.log("the value of a-b is", a - b);
// console.log("the value of a*b is", a * b);
// console.log("the value of a/b is", a / b);

// assignment operators
// var c = b;
// c += 2;
// console.log(c);

// logical operators
// console.log(true && true);
// console.log(false && true);
// console.log(true && false);
// console.log(false && false);

//  logical or
// console.log(true || true);
// console.log(false || true);
// console.log(true || false);
// console.log(false || false);

// logical not[sach ko jhoot , jhoot ko sach ]
// console.log(!false);
// console.log(!true);

// functions of javascript
// dry= do not repeat yourself
// function avg(a, b) {
//   return (a + b) / 2;
// }
// c1 = avg(4, 6);
// c2 = avg(10, 10);

// console.log(c1, c2);

//  conditionals in javascript

// var age = 19;
// if (age > 18) {
//   console.log("you can drink alcohol");
// }
// else {
//   console.log("you can't drink alcohol");
// }
// ladder
// age = 32;
// if (age > 42) {
//   console.log("boy");
// } else if (age > 22) {
//   console.log("girl");
// } else {
//   console.log("false");
// }

// for loop

var arr = [1, 2, 3, 4, 5, 6, 7];

// for (var i = 0; i < arr.length; i++) {
//   if (i == 2) {
//     // break;
//     // continue;
//   }
//   console.log(arr[i]);
// }

// arr.forEach(function (element) {
//   console.log(element);
// });

// while loop
// let j = 0;
// while (j < arr.length) {
//   console.log(arr[j]);
//   j++;
// }

// do while is used to single
// do {
//   console.log(arr[j]);
//   j++;
// } while (j < arr.length);

// methods of array
let myArr = ["fan", "camera", 34, null, true];

console.log(myArr.length);
// myArr.pop();
// myArr.shift();
// myArr.push("boy");
// myArr.unshift("harry");
console.log(myArr);
