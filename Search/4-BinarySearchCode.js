function binarySearch(arr, val) {
    // making pointers
    let start = 0;
    let end = arr.length - 1;
    let middle = Math.floor((start + end) / 2);

    // loop while val is not found
    while(arr[middle] !== val && start <= end) {
        if(val < arr[middle]) {
            end = middle - 1;
        } else {
            start = middle + 1
        }
        // set middle in new window
        middle = Math.floor((start + end) / 2);
    }
    if (arr[middle] === val) {
        return middle;
    }
    return -1;
};

function condensed(arr, val){
        // making pointers
        let start = 0;
        let end = arr.length - 1;
        let middle = Math.floor((start + end) / 2);
        // loop while val is not found
        while(arr[middle] !== val && start <= end) {
            if(val < arr[middle]) end = middle - 1;
             else start = middle + 1
            // set middle in new window
            middle = Math.floor((start + end) / 2);
        }
        return arr[middle] === val ? middle : -1;
}

binarySearch([2,5,6,9,12,15,28], 15)