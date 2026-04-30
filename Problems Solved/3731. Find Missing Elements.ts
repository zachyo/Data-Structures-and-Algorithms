/**
 * 
 * You are given an integer array nums consisting of unique integers.
Originally, nums contained every integer within a certain range. 
However, some integers might have gone missing from the array.
The smallest and largest integers of the original range are still present in nums.
Return a sorted list of all the missing integers in this range. 
If no integers are missing, return an empty list.


Example 1:
Input: nums = [1,4,2,5]
Output: [3]

Explanation:
The smallest integer is 1 and the largest is 5, so the full range should be [1,2,3,4,5]. 
Among these, only 3 is missing.
 */

// Current: Sorting / Brute-Force Search
// Suggested: Two Pointers / Sorting
// Key Idea: Find missing integers in a bounded range using sorted traversal or set lookup.

// Current complexity: O(N*M)
// Suggested complexity: O(N+M)
// Suggestions: Sort once, then use two pointers to scan the range and input together.

function findMissingElements(nums: number[]): number[] {
  const sorted = nums.sort((a, b) => a - b);
  const min = sorted[0];
  const max = sorted[sorted.length - 1];
  let missing = [];

  for (let i = min; i < max + 1; i++) {
    if (!nums.includes(i)) {
      missing.push(i);
    }
  }

  return missing;
}

// Correct Solution
// Set.has() is O(1)
// Math.min() and Math.max() are O(N)
// Set creation is O(N)
// The loop runs O(N)
function findMissingElements2(nums: number[]): number[] {
  const set = new Set(nums);
  const min = Math.min(...nums);
  const max = Math.max(...nums);
  const missing: number[] = [];

  for (let i = min + 1; i < max; i++) {
    if (!set.has(i)) missing.push(i);
  }

  return missing;
}
