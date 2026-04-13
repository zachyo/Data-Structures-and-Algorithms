/**
 * You are given an integer n.

Define its mirror distance as: abs(n - reverse(n))​​​​​​​ where reverse(n) is the integer formed by reversing the digits of n.

Return an integer denoting the mirror distance of n​​​​​​​.
abs(x) denotes the absolute value of x.

 

Example 1:

Input: n = 25
Output: 27

Explanation:
reverse(25) = 52.
Thus, the answer is abs(25 - 52) = 27.
*/

// O(log n)
function mirrorDistance(n: number): number {
  // this is 1ms and uses very low memory
  return Math.abs(n - Number(n.toString().split("").reverse().join("")));

  // this is almost 0ms but uses extra memory.
  //   let numArr = n.toString().split("");
  //   let reverseArr = [];
  //   for (let i = numArr.length; i > 0; i--) {
  //     reverseArr.push(numArr[i - 1]);
  //   }

  //   return Math.abs(n - Number(reverseArr.join("")));
}
