// primitives 

// 7 types = string, number, boolean, BigInt, null, undefined, Symbol, non Reference

const id = Symbol("123")
const anotherId =Symbol("123")
console.log(id,anotherId)
// console.log(id==anotherId)

const bigInteger = 3423535n;

const array = [2,4,'test']
const MyObject = {
    'nme' :'kishor',
    'email' : "kishorpun55@gmail.com",
}
const varibaleFunction = function() {
    console.log('hell0')
}
console.log(typeof null)
console.log(typeof id)
console.log(typeof bigInteger)
console.log(typeof array)
console.log(typeof MyObject)
console.log(typeof varibaleFunction)
