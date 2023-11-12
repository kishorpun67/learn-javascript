let myName = "hitesh    ";
String.prototype.trueLegth = function(){
    console.log(`true length is : ${this.trim().length}`)
}

"hellowss ".trueLegth()
myName.trueLegth()

// let myHeros = ['thor', 'spiderman']

// let heroPower = {
//     thor:'hammer',
//     spiderman:'sling',
//     getSpiderPower: function() {
//         console.log(`Spidy power is ${this.spiderman}`)
//     }


// }

// Object.prototype.kisor = function() {
//     console.log('kisor is present in all objects')
// }

// Array.prototype.heyKisor = function() {
//     console.log('hey kishor')
// }
// heroPower.kisor()
// myHeros.heyKisor()


// // inheritance 

// const User = {
//     name: 'kishor',
//     email: 'kishoe@gmail.com'
// }
// const Teacher = {
//     makeVideo :true
// }

// const TeachingSupport = {
//     isAvailable:true,
// }

// const TASupport = {
//     makeAssignment: 'js assignment',
//     fullTime:true,
//     __proto__ : TeachingSupport
// }

// Teacher.__proto__ = User;

// // modern syntax 

// Object.setPrototypeOf(TeachingSupport, Teacher)