// Arrow Function  introduce in ES6 alternate of functions..

// 1) function declaration

abc()

function abc(){
    console.log("function declaration call...")
}   


// 2) function expression / anonymous function

let abc = 12;


  
faraz()

const faraz = function(){
    console.log("anonymous function call...")

}
  

// 3) arrow function /fat arrow function


let func = (a,b)=> a+b


console.log(func(10,40))


// higher order function



let abc = (call)=>{
    call()

}

let xyz = ()=>{
    console.log("xyz function call...")

}


abc(xyz)

let abc = ()=>{

    console.log("data transfer successfully...")
    
}

setTimeout(()=>{
    abc()
},3000);





let num = (a)=>{
    return (b)=>{
        return (c)=>{
            return (d)=>{
                console.log(a*b*c*d)
            }
        }
    }
}

num(2)(2)(2)(2)

// ------------------------------------------------------------

let abc = ()=>{
    return ()=>{
         return "function call.."
    }
}

abc()()

console.log(abc()())

console.log(abc()())



let fun1 = (a)=>{
    a()
}

let fun2 = ()=>{
    console.log("fun2 call")
}

fun1(()=>{
    fun2()
})


let timer = ()=>{
    console.log("function call..")
}

setTimeout(timer,2000);


let name = ()=>{
    console.log("outer function call..")
    return ()=>{
        console.log("inner function call..")

    }

}   

name()()


// Array methods


// 1) Map()


let arr = [2,3,4,5,5,6,7];

let newArray = arr.map((element,index)=>{
    return element + 10
});

console.log(newArray)

console.log(arr)



let arr = 
[
    {num:2},{num:4},{num:4},{num:4},
    {num:4},{num:4},{num:4}
];

let total = arr.every((ele,ind)=>{
    return ele.num == 4
})

console.log(total)


let newArray = arr.reduce((s,e)=>{
    return {num:s.num+e.num}
})

console.log(newArray)



let cities = ["karachi","lahore","quetta","islamabad"];

let newArray = cities.findIndex((ele,ind)=>{
    return ele === "lahore"
})

console.log(newArray)
