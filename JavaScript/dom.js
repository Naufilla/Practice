// DOM Manipulation

// Selecting with id
// document.getElementById("myId")

// Selecting with class
// document.getElementsByClassName("myClass")

// Selecting with tag
// document.getElementsByTagName("p")

// Query Selector
// document.querySelector("myId/myClass/tag")
// returns first element

// document.querySelectorAll("myId/myClass/tag")
// returns a NodeList

  
let para = document.querySelector("p");
console.dir(para);
console.log(para.getAttribute("class"));

// Insert Element
let newBtn = document.createElement("button")
newBtn.innerText = "Click Me";
console.log(newBtn);

let div = document.querySelector("div")


// div.prepend(newBtn);

// div.before(newBtn);

// div.after(newBtn);

let newHeading = document.createElement("h1");
newHeading.innerHTML = "<i>Hi, I am new";

document.querySelector("body").prepend(newHeading);

let parah = doocument.querySelector("p");
parah.remove();

