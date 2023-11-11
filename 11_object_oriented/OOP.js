const user ={
    name:"kishor",
    email:"kishorpun55@gmail.com",

    getUserDetail : ()=>{
        console.log(`my name is ${this.name} and email is ${this.email} `)
        console.log(this)

    }

}
user.getUserDetail()