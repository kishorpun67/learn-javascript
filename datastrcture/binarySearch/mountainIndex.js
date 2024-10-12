

let array = [1,2,3,4,5,4,3,1]

function largestIndex(array) {
    let first = 0;
    let last  = array.length-1;
    while(first<= last) {
        let mid = Math.floor(first + (last-first)/2)
        // console.log([mid, array[mid-1], array[mid], array[mid+1]])
        if(array[mid-1] < array[mid] && mid[mid+1] < array[mid]) {
            return [array[mid], mid];
        } else if(array[mid-1]<array[mid]) {
            first = mid+1
        } else {
            last = mid -1
        }
    }
    return -1
}

console.log(largestIndex(array))