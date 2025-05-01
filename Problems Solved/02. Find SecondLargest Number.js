function findSecondLargetNumber(array) {
  let largest = 0,
    secondLargest = 0;

  for (let i = 0; i < array.length; i++) {
    if (array[i] > largest) {
      secondLargest = largest;
      largest = array[i];
    } else if (array[i] < largest && array[i] > secondLargest) {
      secondLargest = array[i];
    }
  }

  if (secondLargest === 0) return null;

  return secondLargest;
}

findSecondLargetNumber([5, 3, 4, 6, 7, 1, 2]);
