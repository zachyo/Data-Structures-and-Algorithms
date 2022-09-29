/*Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.*/

//NB: note that you must do this in-place without making a copy of the array.
var moveZeroes = function (nums) {
  let c = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] == 0) {
      nums.splice(i, 1);
      i--;
      c++;
    }
  }
  nums.push(...Array(c).fill(0));
};