// for loop
for (let i = 5; i <= 9; i++) {
    console.log("Hello");
}

//Calculate sum of 1 to 10
let sum = 0;
for (let i = 1; i <= 5; i++) {
    sum = sum + i;
}
console.log("sum = ", sum);

//while loop
let p = 1;
while (p <= 10) {
    console.log("Hey");
    p++;
}

//do-while loop
let i = 20;
do {
    console.log("Apna College");
    i++;
} while (i <= 10);


//for-of loop
let str = "ApnaCollege"
for (let i of str) {
    console.log("i = ", i)
}


let abc = "JavaScript";
let size = 0;
for (let val of abc) {
    console.log("val = ", val);
    size++;
}
console.log("String size = ", size)

// for-in loop
let student = {
    name: "Rahul Kumar",
    age: 20,
    cgpa: 7.5,
    isPass: true,
}
for(let key in student){
    console.log("key = ",key, "value = ",student[key]);
}


// Print all even numbers from 1 to 100
for(let num = 0; num<=100; num++){
    if(num % 2 !==0){
        console.log("num = ",num);

    }
}

//Print numbers from 10 to 1 in reverse.
for(let i = 10; i>=2; i--){
    console.log(i);
}

