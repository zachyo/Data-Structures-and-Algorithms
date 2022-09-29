/*Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order. */

//find index using binary search
var findIndex = function (nums, target) {
  var low = 0;
  var high = nums.length - 1;
  while (low <= high) {
    const mid = Math.floor((low + high) / 2);
    if (nums[mid] === target) {
      return mid;
    } else if (nums[mid] < target) {
      low = mid + 1;
    } else high = mid - 1;
  }
  return -1;
};

//if index not found, find the first number bigger than target and return its index
var searchInsert = function (nums, target) {
  var index = findIndex(nums, target);
  if (index === -1) {
    index = 0;
    nums.forEach((num) => {
      target > num && index++;
    });
    return index;
  } else return index;
};
