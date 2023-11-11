// const user ={
//     name:"kishor",
//     email:"kishorpun55@gmail.com",
//     getUserDetail : ()=>{
//         console.log(`my name is ${this.name} and email is ${this.email} `)
//         console.log(this)
//     }
// }
// user.getUserDetail()

function User(username, loginCount, isLoggedIn) {
    this.username = username
    this.loginCount = loginCount
    this.isLoggedIn = isLoggedIn
    return this;
}

const userOne = new User("kishor", 12, true)
const userTwo = new User("Kripesh", 12, true)

console.log(userOne)
