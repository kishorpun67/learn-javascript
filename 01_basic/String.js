let name = "kishor";
let repo = 20;

console.log(`Hello my name is ${name} and my repo count is ${repo}`)

let string = new String('kishor');
console.log(string[0])
console.log(__proto__)
console.log(string.charAt(2))
console.log(string.toUpperCase())

console.log(string.indexOf('h'))

console.log(string.substring(0,3))


console.log(string.slice(1,3))

let newString = " test "
console.log(newString)
console.log(newString.trim())

const url = "https://kishorpun.com/kishor%20pun"
console.log(url.replace('%20', '-'))
console.log(url.includes('kishor'))

let testString = " lorem test hello worl "
 testString =  testString.trim("lorem test hello worl")
console.log(testString.split(" "))