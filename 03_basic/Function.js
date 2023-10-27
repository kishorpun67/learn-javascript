// function test(arguments=null) {
//     if(!arguments) { return "none";}
//     return arguments;
// }


// console.log(test())

function test() {
    let name = "kishor"
    // console.log(this.name)
    this.lastName = "pun"
    console.log(this)
}
// test()


// function check() {
//     throw new Error('Error: Parms is required')
// }

// function printName(name=check()) {
//     console.log(name)
// }
// printName("")


let arrowFunction = () =>{
    let username = "kishor pun"
    console.log(this)
    this.email= "test@gmail.com"
    console.log(this)
}

arrowFunction()

// console.log(typeof arrowFunction)

const addTwoNumber = (num1, num2) => (num1+num2)
console.log(addTwoNumber(2,5))

// memory exuction 
// function =defination  
// variables = undefined

// exucation phase
// variables = assign value 
// function adddNUm(a,b) = create new environment and execution thread  





