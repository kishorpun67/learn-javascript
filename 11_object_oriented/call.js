function SetUsername(username) {
    this.username = username;
    console.log('CALL')
}

function createUser(username, email, password) {
    SetUsername.call(this, username);
    this.email = email;
    this.password = password;
    
}

const userOne = new createUser('kishor', 'kisor@gmail.com' , '11')
console.log(userOne)