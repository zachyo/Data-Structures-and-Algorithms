/*Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order. */

//BigO here is 0(n^2) because of the double loops
var twoSum = function (numbers, target) {
  for (let i = 0; i < numbers.length; i++) {
    for (let j = 0; j < numbers.length; j++) {
      const val = numbers[i] + numbers[j];
      if (i !== j && target === val) {
        return [i + 1, j + 1];
      }
    }
  }
};

//BigO here is 0(log n) using binarySearch algorithm to search thru
var twoSum1 = function (numbers, target) {
  let l = 0;
  let r = numbers.length - 1;

  while (l < r) {
    let total = numbers[l] + numbers[r];

    if (total < target) {
      l++;
    } else if (total > target) {
      r--;
    } else {
      return [l + 1, r + 1];
    }
  }
};