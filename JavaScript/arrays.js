let marks = [97, 85, 75, 56, 48];
console.log(marks);
console.log(marks.length);

//Array indices
let marks1 = [97, 85, 75, 56, 48];
console.log(marks1[2]);
marks1[3] = 87;
console.log(marks1[3]);
// Arrays are mutable
// Strings are immutable

// Looping over an array
let heroes = ["ironman", "thor", "hulk", "shaktiman", "spiderman", "antman", "captain America"];
// for-loop : lenght property
for (let idx=0; idx < heroes.length; idx++){
    console.log(heroes[idx]);
}

// for-of loop
for(let hero of heroes){
    console.log(hero);
}

let cities = ["delhi", "pune", "mumbai", "hyderabad", "gurgaon"];
for(let city of cities){
    console.log(city.toLocaleUpperCase());
}

// Find the avg marks of the entire class
 let mrks = [85, 97, 44, 37, 76, 60];
 let sum = 0;
 console.log(mrks);
 for (let val of mrks){
    sum += val;
 }

 let avg = sum / mrks.length;
 console.log(`avg marks os the class = ${avg}`);


// Apply 10% offer to every price in an array
let price = [250, 645, 300, 900, 50];
let p = 0;

for (let val of price){
    console.log(`value at index ${p} = ${val}`);
    let offer = val / 10;
    price[p] = price[p] - offer;
    console.log(`value after offer = ${price[p]}`);
    p++;
}

// Array Methods
// Create an array to store companies
let companies = ["Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"];
console.log(companies);

// Remove the first company from the array
let rem = companies.shift();
console.log(rem)
console.log(companies);

// Remove Uber and add Ola
let uber = companies.splice(1, 1, "Ola");
console.log(uber);
console.log(companies);


// Add Amazon at the end
let amazon = companies.pop();
console.log(amazon);
console.log(companies);
