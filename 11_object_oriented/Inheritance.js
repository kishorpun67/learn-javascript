class User {
    constructor(username) {
        this.username = username;
    }

    logMe() {
        console.log(`Username ${this.username}`)
    }
}

class Teacher extends User {
    constructor(username, email, password) {
        super(username);
        this.email = email;
        this.password = password;
    }

    addCourse() {
        console.log(`A new course was added by ${this.username}`)
    }

}

let newTeacher = new Teacher('Leon', 'leon@gmail.com', '123');
newTeacher.addCourse()

console.log(newTeacher instanceof Teacher)
console.log(newTeacher instanceof User)
