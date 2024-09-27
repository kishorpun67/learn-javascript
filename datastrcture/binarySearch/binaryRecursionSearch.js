let array  =  [1,2,3,4,5,6,7,8,9,10,11,12,13]

function binarySearch(value, array, start, end) {
    while(start<=end) {
        let mid  = Math.round(start + (end-start)/2)
        if(value < array[mid]) {
            return binarySearch(value,array, start, mid-1)
        } else if (value > array[mid]) {
            return binarySearch(value,array, mid+1, end)
        } else {
            return [mid, array[mid] ]
        }
    }

    return -1
}

console.log(binarySearch(13, array, 0, array.length-1))
 