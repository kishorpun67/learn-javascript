class User {
    constructor(username, email, password) {
        this.username = username;
        this.email = email;
        this.password = password
    }

    encryptPassword() {
        return `${this.password}abc`
    }
}

User.prototype.upperCase = function(){
    return this.username.toUpperCase();
}

userOne = new User('KISHOR', 'kishor@gmail.com' , '12334')
console.log(userOne.encryptPassword())
console.log(userOne.upperCase())