const myArray = [1,2,3,4,5,6,7];
const myHeros = ['Iorn Man', 'Thor', 'Hulk'];

// for(let number of myArray) {
//     console.log(number)
// }

myArray.push(8); //insert the value end of the array

myArray.pop() // remove the last element of the array

// The at() method of Array instances takes an integer value and returns the item at that index, 
// allowing for positive and negative integers.
//  Negative integers count back from the last item in the array.
// console.log(`this is how can use at in javascirpt array for expamle myarray in index 2 contain 
// numberis ${myArray.at(1)}`)

console.log(myArray.copyWithin(2,3))


const initialValue = 0;
const sumWithInitial = myArray.reduce((accumulator, currentValue) => accumulator + currentValue, initialValue);
// accumulator + currentValue, initialValue
// console.log(sumWithInitial)

let array3 = myArray.concat(myHeros) // The concat() method of Array instances is used to merge two or more arrays
// console.table(array3)


