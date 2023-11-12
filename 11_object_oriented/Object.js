function Multiplayer (num) {
    return num*5
}

Multiplayer.power = 2;
// console.log(Multiplayer(5))
// console.log(Multiplayer.power)

// console.log(Multiplayer.prototype)

function createUser(username, score) {
    this.username = username;
    this.score = score;
}

createUser.prototype.increment = function() {
    this.score++
}
createUser.prototype.printMe =function() {
    console.log(`Score is ${this.score}`)
}

const userOne = new createUser("kishor",34)
const userTwo = new createUser('Hikmat', 66)

userOne.printMe()