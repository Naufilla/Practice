console.log("Hello JavaScript");

let name = "Shaikh Naufilla";
console.log(name);
console.log(typeof (name));

// Operators

// Arithmetic operators
console.log("Arithmetic operators")
let a = 5
let b = 8
const PI = 3.14

console.log("a = ", a)
console.log("b = ", b)

console.log("a + b = ", a + b);
console.log("a - b = ", a - b);
console.log("a * b = ", a * b);
console.log("a / b = ", a / b);
console.log("a % b = ", a % b);
console.log("a ** b = ", a ** b);

//Unary Operators
console.log("Unary operators")
console.log("a++ = ", a++);
console.log("++a = ", ++a);
console.log("b-- = ", b--);
console.log("--b = ", --b);

//Assignment Operators
console.log("Assignment operators")
console.log("a += 3 = ", a += 3);
console.log("a -= 3 = ", a -= 3);
console.log("a *= 3 = ", a *= 3);
console.log("a /= 3 = ", a /= 3);
console.log("a %= 3 = ", a %= 3);
console.log("a **= 3 = ", a **= 3);

//Comparison Operators
console.log("Comparison operators")
let x = 10;
let z = "10";

console.log(x == z, "x == z");
console.log(x === z, "x === z");
console.log(x > 5, "x > 5");
console.log(x <= 10, "x <= 10");

//Logical Operators

console.log("Logical operators")
let m = 10;
let n = 20;

console.log(m > 5 && n > 15, "m > 5 && n > 15");
console.log(m > 15 || n > 15, "m > 15 || n > 15");
console.log(!(m > n), "!(m > n)");

//Conditional Statements

// if statement

console.log("if statement")
let age = 20;
if (age < 18) {
    console.log("You cannot Vote");
}
if (age >= 18) {
    console.log("You can Vote");
}

// if-else statement

console.log("if-else statement")
let mode = "dark";
let color;
if (mode === "dark") {
    color = "black"
}
else {
    color = "white"
}
console.log(color);

let num = 12;
if (num % 2 === 0) {
    console.log(num, "is even");
} else {
    console.log(num, "is odd");
}

// else-if statement

console.log("else-if statement")
let Mode = "pink"
let colorful;

if (Mode === "dark") {
    colorful = "black";
} else if (Mode === "blue") {
    colorful = "blue"
} else if (Mode === "pink") {
    colorful = "pink"
} else {
    colorful = "white";
}
console.log(colorful);

// Ternary operators

console.log("Ternary Operators");
let newAge = 21;
let result = newAge >= 18 ? "adult" : "not adult";
console.log(result);

//Switch statement
console.log("Switch Statement");

let day;
let date = new Date().getDay();
switch (date) {
    case 0:
        day = "Sunday";
        break;
    case 1:
        day = "Monday";
        break;
    case 2:
        day = "Tuesday";
        break;
    case 3:
        day = "Wednesday";
        break;
    case 4:
        day = "Thursday";
        break;
    case 5:
        day = "Friday";
        break;
    case 6:
        day = "Saturday";
}
document.getElementById("demo").innerHTML = "Today is " + day;


// Q1
alert("warning")
let newNum = prompt("Enter a number")
console.log(newNum)

if (newNum % 5 === 0) {
    console.log(newNum, "is a multiple of 5");
} else {
    console.log(newNum, "is not a multiple of 5");
}

// Q2 Write a code which can give grades to students accordibg to their scores
// 90 - 100 A 
// 70 - 89 B 
// 60 - 69 C 
// 50 - 59 D 
// 00 - 49 F 

let score = 75;
let grade;

if (score >= 90 && score <= 100) {
    grade = "A"
} else if (score >= 70 && score <= 89) {
    grade = "B"
} else if (score >= 60 && score <= 69) {
    grade = "C"
} else if (score >= 50 && score <= 59) {
    grade = "D"
} else if (score >= 0 && score <= 49) {
    grade = "F"
}

console.log("According to your scores, your grade is ", grade);