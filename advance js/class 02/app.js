// Ternary Operator (alternate if else statement)

let age = 18;
let gender = "female";


let check = age >= 18 ?

    gender === "male" ?

        "allowed" : "not allowed" :

    "age not match";

console.log(check)


if (age >= 18) {
    if (gender === "male") {
        console.log("allowed..")
    }
    else {
        console.log("not allowed")
    }
}
else {
    console.log("age not match")
}


let check = age >= 18 ? "allowed.." :
    "not allowed..";



console.log(check)

if (age >= 18) {
    console.log("allowed..")
}
else {
    console.log("not allowed..")


    let marks = 32;

    let check = marks >= 33 && marks <= 50 ? console.log('C Grade') :
        marks >= 51 && marks <= 60 ? console.log('B Grade') :
            marks >= 61 && marks <= 70 ? console.log('A Grade') :
                marks >= 71 && marks <= 90 ? console.log('A+ Grade') : console.log('Failed..')



    // Short Circuit

    // let a = 1; // true
    // let a = 0; // false
    // let a = undefined; false
    // let a = null; false
    // let a = ""; false
    // let a = " " true
    // let a = true;
    // let a = false; false


    if (a) {
        console.log("true")
    }
    else {
        console.log("false")

    }


    console.log("" && "faraz");

    let age = "20";

    let check = age === 20 &&

        "allowed";

    console.log(check)


    let marks = 32;

    if (marks >= 33 && marks <= 50) {
        console.log("c grade..")
    }


    console.log(0 || 0);

    let a = 2;

    let exp = "faraz" + true && undefined && (false + 6);


    console.log(exp)

    //      Destructing of Array

    let [, ele2, ele3, ele4, ele5] = ["faraz", "farooq", "adil", "ali", "ahmed"];

    let [ele1, ele2, ele3, ele4, ele5] = arr

    console.log(ele2, ele3, ele4, ele5);

    console.log(arr[0]);
    console.log(arr[1]);
    console.log(arr[2]);
    console.log(arr[3]);
    console.log(arr[4]);



    //      Destructing of Object

    let obj = {
        name: "faraz",
        city: "karachi",
        email: "faraz@gmail.com"
    }

    obj.school = "Jawan Pakistan"

    console.log(obj)


    function foo({ name, city }) {
        console.log(name, city)
    }

    foo({ name: "faraz", city: "karachi" })

    let obj = {
        name: "faraz",
        city: "karachi",
        email: "faraz@gmail.com"
    }

    let [va1, val2, val3] = Object.values(obj);

    console.log(Object.freeze(obj))


    for (var key in obj) {
        console.log(obj[key])
    }
