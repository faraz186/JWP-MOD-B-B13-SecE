// var    
// reinitialize (y)
// reassign (y)
// hoisting (y)  
// blockscope (y)


var a = "Mohammad";

var abc;

var a = "faraz";

console.log(a);
   
var a = "Muhammad";


// Function scope var keyword

function abc() {
  var a = "faraz";
  console.log(a);
}
abc();


// const
// reinitialize (n)
// reassign (n)
// hoisting (n)
// blockscope (y)


const a = 12;

{
  const a = 10;
  console.log(a);
}
console.log(a);


// let
// reinitialize (n)
// reassign (y)
// hoisting (n)
// blockscope (y)

let a = 12;

{
  let a = 10;
  console.log(a);
}
console.log(a);

// Function scope const keyword

function abc() {
  const a = 100;
}

abc();

console.log(a);

const a = 12;

a = 10;  

console.log(a);

const firstName = "Muhammad";
const firstName = "usman";

console.log(firstName);

console.log(abc);

var abc = true;

abc();

function abc() {
  console.log("abc");
}

console.log(abc);

const abc = 12;



// Template literals

let firstName = "Muhammad";
let lastName = "faraz";

// console.log("Welcome to " + firstName + " " + lastName);  Way to ES5 execution


console.log(`Welcome to ${firstName} ${lastName}. I am a web developer`); // ES6



// Task to generate multiplication table

let user = +prompt("Enter a number to generate table");
let len = +prompt("Enter length");

for (var i = 1; i <= len; i++) {
  document.write(`${user} x ${i} = ${user * i} <br>`);
}
