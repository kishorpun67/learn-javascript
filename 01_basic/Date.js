
let myDate = new Date;
console.log(myDate.toString())
console.log(myDate.toDateString())
console.log(myDate.toLocaleDateString())
console.log(myDate.toLocaleString())

let myCreatedDate = new Date(2023, 5, 23)
console.log(myCreatedDate.toDateString())

console.log(myDate.getDay())
console.log(myDate.getMonth())
console.log(myDate.getTime())

console.log(myDate.toLocaleString('default', {
    weekday:"long",
    // timeZone: "Aisa/kathmandu"
}))

