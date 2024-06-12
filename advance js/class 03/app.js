// Destructing of Array

// ES6

let arr = [1,2,3,4,5,6,7,8,9];

let [ele1,ele2,ele3,ele4,ele5,ele6] = arr

console.log(ele1,ele2,ele3,ele4,ele5,ele6)


// ES5

// let ele1 = arr[0];
// let ele2 = arr[1];
// let ele3 = arr[2];
// let ele4 = arr[3];
// let ele5 = arr[4];
// let ele6 = arr[5];

console.log(arr)

// Destructing of Object

let obj = {
    name:"faraz",
    city:"karachi",
    email:"faraz@gmail.com",
    education:{
        CGPA:3.8,
        skills:"html"
    }
}

let {name:stdName,email:stdEmail,city,education} = obj

let {CGPA,skills} = education


console.log(stdName,stdEmail,city,education,CGPA,skills)


let arr = [1,2,3,4,5,6,7,8,9,{name:"Faraz",age:23}];

let [ele1,ele2,ele3,ele4,ele5,ele6,ele7,ele8,ele9,ele10] = arr

let {name,age} = ele10

console.log(ele1,ele2,ele3,ele4,ele5,ele6,ele7,ele8,ele9,ele10,name,age)


// Pass by value

let num1 = true;

let num2 = num1;

num2 = false

console.log(num1,num2)


let num1 = ["faraz",100,false];

let num2 = num1;

num2[3] = "ali"

console.log(num1,num2)


let num1 = {
    name:"abc",
    email:"abc@gmail.com"
}

let num2 = {
    ...num1
    
};

num2.institute = "Jawan Pakistan";

num2.getName = function(){
    console.log("method call..")
}

console.log(num1,num2)

// Spred Operators


let arr1 = ["faraz","farooq"];

let arr2 = ["ali","ahmed"];

let merge = [...arr1,...arr2]

console.log(merge)

for(var i = 0;i<arr1.length;i++){
    arr2.push(arr1[i])
}
let merge = arr1.concat(arr2);

console.log(arr2)


let arr1 = {
    name:"wxy",
   email:"wxy@gmail.com",
   institute:"JP"
};

let arr2 = {
    name:"xyz",
   email:"xyz@gmail.com"
}

let merge = {...arr1}


console.log(merge)


// PASS BY VALUE

let num1 = "faraz";

let num2 = num1;

num2 = false

console.log(num1,num2)



// PASS BY REFERENCE

let arr1 = ["faraz","farooq"];

let arr2 = [...arr1];

arr2[2] = true

arr1[2] = false

console.log(arr1,arr2)


let StudentObj = {
    stdName:"faraz",
    stdAge:23,
    stdEmail:"faraz@gmail.com",
    stdRoll:1251
}

let obj2 = {...StudentObj};

obj2.stdCity = "karachi"

console.log(StudentObj,obj2)

let StudentObj = {
    stdName:"faraz",
    stdAge:23,
    stdEmail:"faraz@gmail.com",
    stdRoll:1251
}

let TeacherObj = {
    TName:"ali",
    TAge:25,
    TEmail:"ali@gmail.com",
    TRoll:124
}

let merge = {...StudentObj,...TeacherObj};

console.log(merge)

let arr1 = [1,2];

let arr2 = [3,4]

let merge = [...arr1,...arr2];

console.log(merge)

// Reset operators


function foo(num1,num2,...rest){
    let restNumbers = 0;
    for(var i = 0;i<rest.length;i++){
        restNumbers += rest[i]
    }
    console.log(num1+ num2 +restNumbers)


}

foo(2,10,3,4,5,6,7,8,9,12,15,16,1456,1156,156,156,156,1,44,5614,861,861,61,56,156)


// default perameters


function add(a=50,b=50){
    console.log(a+b)
}

add(20,20)
