const piValue = Object.getOwnPropertyDescriptor(Math,'PI');

Math.PI =5;
console.log(Math.PI)
console.log(piValue)

const chai = {
    name : 'black tea',
    price : 2,
    isAvailable : true,
}
console.log(Object.getOwnPropertyDescriptor(chai, 'name'))

const user = Object.defineProperty(chai, 'name', {writable:false,enumerable:false, configurable:true})
console.log(Object.getOwnPropertyDescriptor(chai, 'name'))

for (const [key, val] of Object.entries(chai)) {
    console.log(key,val)
    
}