let name = "kishor pun";
let anotherName = name;
anotherName = 'Test name';
console.log(name);
console.log(anotherName)

const UserOne = {
    'name':'kishor pun',
    'email' : 'kishorpun55@gmail.com'
}
const UserTow = UserOne;
UserTow.email = "test@gmail.colm"

console.log(UserOne.email);
console.log(UserTow.email)