let array = [3,4,5,6,7,0,1,2]


function rotatedBinarySearch(array, targe) {
    let left = 0;
    let right = array.length-1;
    while(left<=right) {
        let mid  = Math.floor(left + (right-left)/2)
        console.log('mid'+ mid + " left "+ left + " right "+ right)
        if(array[mid] == targe) {
            return mid;
        } 
        if(array[left]<=array[mid]) {
            console.log('tst')
            if(array[left] <=  targe &&  targe <= array[mid]) {
                right = mid-1
            }else {
                left = mid+1
            }
        }else if(array[mid] <= array[right]) {
            console.log([array[mid], array[right]])
            if(array[mid] <=  targe &&  targe <= array[right]) {
                left = mid+1
            }else {
                right = mid-1
            }
        }
    }
    return -1;

}

console.log(rotatedBinarySearch(array, 2))
