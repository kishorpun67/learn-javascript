let map = new Map()
map.set('np', 'nepal')
map.set('in', 'india')
// console.log(map)
// console.log(typeof map);
// for(let [key, value] of map) {
//     console.log(`${key} :- ${value}`);
// }
for(let [value, key] in map){
    console.log(value)
}

map.forEach((val,key, arr) =>{
    console.log(val,key, arr)
})
