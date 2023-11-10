const promiseOne = new Promise((resolve, reject)=>{
    //do any task
    // db calls, cryptography, network
    setTimeout(()=>{
        console.log('Async task is compelete')
        resolve('hello')
        console.log('testone')
    },1000);
    console.log('trest')
});

promiseOne.then((resutl)=>{
    console.log(resutl)
    console.log('Promise Consume')
});

new Promise((resolve, reject)=>{
    setTimeout(() => {
        console.log('async task 2')
        resolve()
    }, 1000);
}).then(()=>{
    console.log('resolve of two')
})


const promiseThree = new Promise((resolve, reject)=>{
    setTimeout(() => {
        resolve({username:"kishor",email:"kishorpun@gmail.com"})
    }, 1000);
}).then((data)=>{
    console.log(data)
})


const promiseFour = new Promise((resolve, reject)=>{
    setTimeout(() => {
        let error = false;
        if(!error){
            resolve({name:"hello worl"})
        } else {
            reject(error)
        }
    },1000);
}).then((user)=>{
    return user.name;
}).then((username)=>{
   console.log(username)
}).catch((error)=>{
    console.log('Error: js went wrong')
}).finally(()=> console.log('The promise is either resolved or rejected'))


const promisesFive =  new Promise((resolve, reject)=>{
    setTimeout(() => {
        let check = true;
        if(!check) {
            resolve({name:"Hikmate Chettri", email:"hikmat@gmail.colm", address:"Kathmandu"})
        } else {
            reject('Error: js occur error')
        }
    }, 1000);
})


async function consumePromiseFive(){
    try {
        const  response = await promisesFive;
        console.log(response)
    } catch (error) {
        console.log(error);
    }
 
}

consumePromiseFive()

async function getAllUsers() {
    try {
        const response  = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await response.json()
        console.log(data)
    } catch (error) {
        console.log(error)
    }
}
// getAllUsers()

fetch('https://jsonplaceholder.typicode.com/users').then((response)=>{
    return response.json()
}).then((data)=>{
    console.log(data)
}).catch((error) =>{
    console.log(error)
})