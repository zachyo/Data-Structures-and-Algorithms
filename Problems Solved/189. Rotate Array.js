/*Given an array, rotate the array to the right by k steps, where k is non-negative.*/

var rotate = function (nums, k) {
  let timesOfRotation = k % nums.length;
  nums.unshift(...nums.splice(-timesOfRotation));
  return nums;
};