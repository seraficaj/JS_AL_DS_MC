// Insertion Sort

const insertionSort = (arr) => {
  for (let i = 1; i < arr.length; i++) {
    let currentVal = arr[i];
    // inner loop goes backward because comparison goes backwards until start of left half
    for (let j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
      arr[j + 1] = arr[j];
    }
    arr[j + 1] = currentVal;
  }
  return arr;
};

insertionSort([2, 1, 7, 9, 76, 4]);
