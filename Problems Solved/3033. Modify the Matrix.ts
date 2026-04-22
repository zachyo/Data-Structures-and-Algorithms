/**
 * Given a 0-indexed m x n integer matrix matrix, create a new 0-indexed matrix called answer. Make answer equal to matrix, then replace each element with the value -1 with the maximum element in its respective column.

Return the matrix answer.

Example 1:

Input: matrix = [[1,2,-1],[4,-1,6],[7,8,9]]
Output: [[1,2,9],[4,8,6],[7,8,9]]
Explanation: The diagram above shows the elements that are changed (in blue).
- We replace the value in the cell [1][1] with the maximum value in the column 1, that is 8.
- We replace the value in the cell [0][2] with the maximum value in the column 2, that is 9.
 */

// My bad solution
// Current: Array / Sorting / Simulation
// Suggested: Array / Simulation
// Key Idea: Iterate through columns to find maximums and update specific cells in place.

// Current Complexity: O(m * n * log(m))
// Suggested: O(m * n)
// Suggestions: Replace sorting with a single pass to find column maximums and avoid deep copying the matrix.
function modifiedMatrix(matrix: number[][]): number[][] {
  let columnsMax = [];
  let answer = matrix;
  //   mistake here was creating a new array for each column and sorting it
  //  I should have just iterated through the matrix and found the maximum value of each column and save it
  for (let i = 0; i < matrix[0].length; i++) {
    let col = [];
    for (let j = 0; j < matrix.length; j++) {
      col.push(matrix[j][i]);
    }
    columnsMax.push(col.sort((a, b) => b - a)[0]);
  }

  // mistake here was reassignment, I could have mutated matrix directly
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      if (matrix[i][j] === -1) {
        answer[i][j] = columnsMax[j];
      }
    }
  }

  return answer;
}

// Better solution
function modifiedMatrix2(matrix: number[][]): number[][] {
  const m = matrix.length;
  const n = matrix[0].length;
  // create a negative infinty array to store the maximum value of each column
  const colMax = new Array(n).fill(-Infinity);

  // Single pass to find column maximums
  for (let i = 0; i < m; i++)
    for (let j = 0; j < n; j++)
      // if the current element is greater than the maximum value of its particular column
      if (matrix[i][j] > colMax[j]) colMax[j] = matrix[i][j];

  // Replace -1 in place
  for (let i = 0; i < m; i++)
    for (let j = 0; j < n; j++)
      // if the current element is -1, replace it with the maximum value of its particular column
      if (matrix[i][j] === -1) matrix[i][j] = colMax[j];

  return matrix;
}
