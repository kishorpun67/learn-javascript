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

userOne = new User('KISHOR', 'kishor@gmail.com' , '12334')
console.log(userOne.encryptPassword)