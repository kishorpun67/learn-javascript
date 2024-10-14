let array =[1,1,2,3,3,4,4,5,5,6,6]


function sortedBinarySearch(array) {
    let st = 0;
    let end = array.length-1 
    while(st<=end) {
        let mid = Math.floor(st+ (end-st)/2)
        if(mid==0 && array[0] !== array[1]) return array[mid];
        if(mid==array.length-1 && array[array.length-1] !== array[array.length-2]) return array[mid];

        if(array[mid-1] !== array[mid] && array[mid]!==array[mid+1]) {
            return array[mid]
        }
        if(mid%2==0) {
            if(array[mid-1]==array[mid]) {
                end = mid-1
            } else {
                st = mid+1
            }
        } else {
            if(array[mid-1] == array[mid]) {
                st= mid+1
            } else {
                end = mid-1
            }
        }
    }

    return -1
}

console.log(sortedBinarySearch(array))