/*3866. First Unique Even Element

You are given an integer array nums.

Return an integer denoting the first even integer (earliest by array index) that appears exactly once in nums. 
If no such integer exists, return -1.

An integer x is considered even if it is divisible by 2.
*/

// Current: Array / Brute-Force Search / Simulation
// Suggested: Hash Table / Counting
// Key Idea: Finding the first unique even number using frequency counting or tracking.

// Current complexity: O(N^2)
// Suggested complexity: O(N)
// Suggestions: Replace array searches with a hash map to achieve linear time complexity.
function firstUniqueEven(nums: number[]): number {
  let uniqueEvens: number[] = [];
  let alreadyAppeared: number[] = [];
  let uniqueEven = -1;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] % 2 == 0) {
      if (uniqueEvens.includes(nums[i])) {
        uniqueEvens.splice(uniqueEvens.indexOf(nums[i]), 1);
        alreadyAppeared.push(nums[i]);
      } else if (uniqueEven == -1) {
        uniqueEven = nums[i];
        uniqueEvens.push(nums[i]);
      } else if (!alreadyAppeared.includes(nums[i])) {
        uniqueEvens.push(nums[i]);
      }
    }
    // console.log({uniqueEvens, alreadyAppeared})
  }

  return uniqueEvens.length > 0 ? uniqueEvens[0] : -1;
}

// Correct Solution
//  Map.get() is O(1)
function firstUniqueEven2(nums: number[]): number {
  const count = new Map<number, number>();

  for (const n of nums) {
    if (n % 2 === 0) {
      count.set(n, (count.get(n) ?? 0) + 1);
    }
  }

  for (const n of nums) {
    if (count.get(n) === 1) return n;
  }

  return -1;
}
