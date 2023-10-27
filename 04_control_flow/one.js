let number = 6;

if(number == "6") {
    console.log('ello')
}

let agru =1
switch (agru) {
    case 1:
        console.log('sunday')
        break;
    default:
        break;
}

let num = [];
if(num.length == 0) {
    console.log('empty')
}

let object = {};

if(Object.keys(object).length ==0) {
    console.log('empty')
}



//  nullish colaescing operator (??) :nulll undefined

let val;
val  = 5 ?? 6;
let val1 = null ?? 20;
let val2 = undefined ?? 30;
console.log(val)
console.log(val1)
console.log(val2)

let test = null ?? undefined ?? 9;
console.log(test)