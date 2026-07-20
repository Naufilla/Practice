// Function
function myFunction() {
    console.log("Hello");
    console.log("World");
}
myFunction();


function sum(x, y) {
    s = x + y;
    // s = 5
    return s;
}
let val = sum(6, 9);
console.log(val);

// Arrow functions
const arrowSum = (a, b) => {
    console.log(a + b);
};

const arrowMul = (x, y) => {
    console.log(x * y);
};

//Write a function named sayHello that prints:Hello, World!
function sayHello() {
    console.log("Hello World!");
};

// Write a function greet(name) that prints: Hello, Naufilla!
function greet(name) {
    console.log("Hello " + name);
}
greet("naufilla");

// Add Two Numbers
// Write a function add(a, b) that returns the sum of two numbers.

function add(a, b) {
    return (a + b);
}
let result = add(5, 7);
console.log(result);

//Find Square
//Write a function square(num) that returns the square of a number.
function square(num) {
    return num * num;
}
console.log(square(5));

// Write a function isEven(num) that returns true if the number is even; otherwise false.
function isEven(num) {
    if (num % 2 === 0) {
        return true;
    } else {
        return false;
    }
}
console.log(isEven(5));

// Write a function findLargest(a, b) that returns the larger number
function findLargest(a, b) {
    if (a > b) {
        return (a);
    } else {
        return (b);
    }
}
console.log(findLargest(2, 7));

//Reverse an array without using reverse().
function reverseArray(arr) {
    let start = 0;
    let end = arr.length - 1;

    while (start < end) {
        let temp = arr[start];
        arr[start] = arr[end];
        arr[end] = temp;

        start++;
        end--;
    }

    return arr;
}

let numbers = [1, 2, 3, 4, 5];

console.log(reverseArray(numbers));


function findMax(arr) { 
    let max = arr[0]; 
    for (let num of arr) { 
        if (num > max) { 
            max = num; 
        } 
    } 
    return max; 
} 
console.log(findMax([50, 122, 3, 24, 97]));