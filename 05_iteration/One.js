const coding = ['jvascript', 'php','python','java', 'dart']

function iteration(data) {
    for (let index = 0; index < data.length; index++) {
        const element = data[index];
        console.log(element)
        return element;
        
    }
}
// const result = iteration(coding)
// console.log(result)


// const result1 = coding.forEach((val,key)=> {
//     console.log(val)
//     return val;
// })

// console.log(result1)
const numArray = [1,2,3,4,5,6,7,8,9]


// const newNum = numArray.filter((val) => val>5)
const newNum = numArray.filter((val) => {
    return val>5
})
console.log(newNum)

const books = [ 
    {
        name : "book one",
        genere : "History"
    },
    {
        name : "book tow",
        genere : "Fiction"
    },
    {
        name : "book three",
        genere : "Novel"
    },    
    {
        name : "book four",
        genere : "History"
    }
]

let userBooks = books.filter((val)=> val.genere == "History")
console.log(userBooks)

const newNums = numArray.map((num) => num +10).map((num)=>num +1).filter((num)=> num > 15)
console.log(newNums)


const intialValue = 0;
const sumWithInitialValue =  numArray.reduce((accumlator, currentValue) => accumlator+currentValue, intialValue)
console.log(sumWithInitialValue) 