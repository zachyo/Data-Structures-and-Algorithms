/*
You are given a string s, where every two consecutive vertical bars '|' are grouped into a pair. In other words, the 1st and 2nd '|' make a pair, the 3rd and 4th '|' make a pair, and so forth.

Return the number of '*' in s, excluding the '*' between each pair of '|'.

Note that each '|' will belong to exactly one pair.
*/

function countAsterisks(s: string): number {
  // split the array by "|" since every two consecutive vertical bars are grouped into a pair
  var strArr = s.split("|");
  var asterisksCount = 0;
  for (let i = 0; i < strArr.length; i++) {
    // if the index is even, it means it is not between a pair of vertical bars
    // so we count the asterisks in that part
    if (i % 2 == 0) {
      // match all asterisks in the current part, add empty array if no asterisks are found
      // add the count to the total count
      asterisksCount += (strArr[i].match(/\*/g) || []).length;
    }
  }

  return asterisksCount;
}
