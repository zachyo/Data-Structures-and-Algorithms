/**
 * You are given a 0-indexed m x n integer matrix grid. The width of a column is the maximum length of its integers.

For example, if grid = [[-10], [3], [12]], the width of the only column is 3 since -10 is of length 3.
Return an integer array ans of size n where ans[i] is the width of the ith column.

The length of an integer x with len digits is equal to len if x is non-negative, and len + 1 otherwise.

 

Example 1:

Input: grid = [[1],[22],[333]]
Output: [3]
Explanation: In the 0th column, 333 is of length 3.
Example 2:

Input: grid = [[-15,1,3],[15,7,12],[5,6,-2]]
Output: [3,1,2]
Explanation: 
In the 0th column, only -15 is of length 3.
In the 1st column, all integers are of length 1. 
In the 2nd column, both 12 and -2 are of length 2.
 */

// Current: Array / Simulation
// Suggested: Array / Simulation
//  Key Idea: Iterate through each column to find the maximum string length of integers, accounting for negative signs.

// Current complexity: O(M∗N)
// Suggested complexity: O(M∗N)
// Suggestions: No doubt about it, you've achieved the optimal complexity!
function findColumnWidth(grid: number[][]): number[] {
  let ans: number[] = [];
  for (let i = 0; i < grid[0].length; i++) {
    let maxLength = -Infinity;
    for (let j = 0; j < grid.length; j++) {
      const elementLength = Number(grid[j][i]).toString().length;
      if (elementLength > maxLength) {
        maxLength = elementLength;
      }
    }
    ans.push(maxLength);
  }

  return ans;
}

// this would improve runtime instead of using toString() method
function findColumnWidth2(grid: number[][]): number[] {
  // pre-allocation with zero to remove the need for push
  const ans: number[] = new Array(grid[0].length).fill(0);

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      const x = grid[i][j];
      const len =
        x < 0
          ? // log10(x) + 1 for digits + 1 for minus sign (negative numbers)
            Math.floor(Math.log10(-x)) + 2 // +1 for digits, +1 for minus sign
          : x === 0
            ? 1
            : // log10(x) + 1 for digits (positive numbers)
              Math.floor(Math.log10(x)) + 1;

      if (len > ans[j]) ans[j] = len;
    }
  }

  return ans;
}
