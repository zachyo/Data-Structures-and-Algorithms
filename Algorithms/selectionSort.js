function selectionSort(arr) {
  let smallest;
  let smallIndex = 0;

  for (let i = 0; i < arr.length; i++) {
    let min = i;
    smallest= arr[min]
    for (let j = i+1; j < arr.length; j++) {
      //compares and looks for the next smallest number
      if (arr[j] <= smallest) {
        smallest = arr[j];
        smallIndex = j;
      }
    }

    if(min != smallIndex) {
        let tmp = arr[min]
        //swap here
        arr[min] = smallest;
        arr[smallIndex] = tmp
    }
  }

  return arr;
}

console.log(selectionSort([2,3,5,1,2,4,6,8,7,4,4,0,7,8,8,9,599,-87,5,14]))
