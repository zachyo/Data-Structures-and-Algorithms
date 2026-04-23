/**
 *2373. Largest Local Values in a Matrix
You are given an n x n integer matrix grid.

Generate an integer matrix maxLocal of size (n - 2) x (n - 2) such that:

maxLocal[i][j] is equal to the largest value of the 3 x 3 matrix in grid centered around row i + 1 and column j + 1.
In other words, we want to find the largest value in every contiguous 3 x 3 matrix in grid.

Return the generated matrix.

Example 1:

Input: grid = [[9,9,8,1],[5,6,2,6],[8,2,6,4],[6,2,2,2]]
Output: [[9,9],[8,6]]
Explanation: The diagram above shows the original matrix and the generated matrix.
Notice that each value in the generated matrix corresponds to the largest value of a contiguous 3 x 3 matrix in grid.
 */

// Current: Brute-Force Search / Simulation
// Suggested: Brute-Force Search / Simulation
// Key Idea: Iterating through all possible 3x3 subgrids to find the maximum value in each.

// Complexity: O(n^2)
// Suggested: O(n^2)
// Suggestions: No significant optimization possible as we need to check every 3x3 subgrid.

function largestLocal(grid: number[][]): number[][] {
  let maxLocal: number = grid.length - 2;
  let solution: number[][] = [];

  for (let l = 0; l < maxLocal; l++) {
    let newArr = [];
    for (let k = 0; k < maxLocal; k++) {
      let max = -Infinity;
      for (let i = 0 + l; i < 3 + l; i++) {
        for (let j = 0 + k; j < 3 + k; j++) {
          if (grid[i][j] > max) {
            max = grid[i][j];
          }
        }
      }
      newArr.push(max);
    }
    solution.push(newArr);
  }

  return solution;
}
