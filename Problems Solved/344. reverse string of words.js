/*Write a function that reverses a string. The input string is given as an array of characters s.*/


//reverse one string already an array
var reverseString = function (s) {
  return s.reverse();
};


//reverse string of words
var reverseWords = function (s) {
  const rev = [];
  s.split(" ").forEach((word) => rev.push(word.split("").reverse().join("")));
  return rev.join(" ");
};
