console.log("Learning Typescript!!");  

var num = 10;

console.log(num);

var firstName: string = "faraz";   

var percentage: number = 85;

console.log(firstName, percentage);

var bioData: number | string | boolean = 41;   
  
var abc: number | string = "faraz";
  
abc = "true";

var age: string | number = 20;
  
if (age === 20) {
  console.log("allow");  
} else {
  console.log("not allow");
}

var arr: (string | number | boolean)[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];  

arr.push("faraz");

arr.unshift(true);

console.log(arr);

// Function

function abc(name: string, num?: number) {
  console.log(name + num);
}

abc("faraz");


// Object

// object type casting

// interface

interface Student {
  name: string;
  age: number;
  email: string;
  id?: number;
  status?: boolean;
}

let obj1: Student = {
  name: "faraz",
  age: 24,
  email: "faraz@gmail.com",
  id: 5455,
};

interface Student1 {
  className: string;
  studentdata: Student;
}

let obj2: Student1 = {
  className: "WAM MOD-B",
  studentdata: obj1,
};

console.log("obj1 ", obj1);

console.log("obj2", obj2);
