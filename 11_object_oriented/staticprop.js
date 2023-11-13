class User {
    constructor(username) {
        this.username = username;
    }
    logMe() {
        console.log(`Username ${this.username}`)
    }

    static createId() {
        return `123`;
    }
}

let newUser = new User("kishor");
// console.log(newUser.createId())

class Teacher extends User {
    constructor(username, email) {
        super(username);
        this.email = email;
    }

}

const newTeacher = new Teacher('Kirman', 'kishor@gmail.com')
console.log(newTeacher.createId())