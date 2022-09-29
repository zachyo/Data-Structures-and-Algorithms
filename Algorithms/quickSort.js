function quickSort(arr) {
    //declarations
    const pivot = arr[0];
    const less = [];
    const greater = [];
    //base case
  if (arr.length < 2) {
    return arr;
  } else {
    //recursive case
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] < pivot) {
        less.push(arr[i]);
      } else greater.push(arr[i])
    }
    //concat to join the arrays
    return quickSort(less).concat(pivot, quickSort(greater));
  }
}

console.log(
  quickSort([2, 3, 5, 1, 2, 4, 6, 8, 7, 4, 4, 0, 7, 8, 8, 9, 599, -87, 5, 14])
);

