/**
 *
2729. Check if The Number is Fascinating

You are given an integer n that consists of exactly 3 digits.
We call the number n fascinating if, after the following modification, 
the resulting number contains all the digits from 1 to 9 exactly once and does not contain any 0's:

Concatenate n with the numbers 2 * n and 3 * n.
Return true if n is fascinating, or false otherwise.

Concatenating two numbers means joining them together. 
For example, the concatenation of 121 and 371 is 121371.

Example 1:

Input: n = 192
Output: true
Explanation: We concatenate the numbers n = 192 and 2 * n = 384 and 3 * n = 576. 
The resulting number is 192384576. This number contains all the digits from 1 to 9 exactly once.
 */

// O(1) complexity
function isFascinating(n: number): boolean {
  const numToCheck = [n, n * 2, n * 3].join("");
  const set = new Set(numToCheck.split(""));

  // makes sure there are no zeros or repeated numbers
  if (numToCheck.length !== 9) {
    return false;
  }

  // once a number is missing from set, return false
  for (let i = 1; i < 10; i++) {
    if (!set.has(i.toString())) {
      return false;
    }
  }

  // if all conditions are not triggered, return true
  return true;
}
