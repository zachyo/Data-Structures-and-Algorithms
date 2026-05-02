/**
 * 
Given a circular array nums, find the maximum absolute difference between adjacent elements.
Note: In a circular array, the first and last elements are adjacent.

Example 1:
Input: nums = [1,2,4]
Output: 3

Explanation:
Because nums is circular, nums[0] and nums[2] are adjacent. 
They have the maximum absolute difference of |4 - 1| = 3.
 *
 */

// Current: Array / Simulation
// Current implementation has time complexity of O(n) and space complexity of O(1).

function maxAdjacentDistance(nums: number[]): number {
  let maxAbs = -Infinity;
  for (let i = 0; i < nums.length; i++) {
    if (i === nums.length - 1) {
      if (Math.abs(nums[i] - nums[0]) > maxAbs)
        maxAbs = Math.abs(nums[i] - nums[0]);
    } else {
      if (Math.abs(nums[i] - nums[i + 1]) > maxAbs)
        maxAbs = Math.abs(nums[i] - nums[i + 1]);
    }
  }

  return maxAbs;
}
