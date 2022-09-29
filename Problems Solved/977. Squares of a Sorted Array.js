/*Given an integer array nums sorted in non-decreasing order, return an array of the squares of each number sorted in non-decreasing order. */


var sortedSquares = function (nums) {
  let squares = nums.map((num) => num * num);
  let sortedSquares = squares.sort((a, b) => a - b);
  return sortedSquares;
};

//quicksort can also be used to sort the squared array