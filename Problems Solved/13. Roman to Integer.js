// leetcode
var romToInt = function (s) {
  const romValueMap = {
    I: 1,
    V: 5,
    x: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  var total = 0;
  //roman numerals is written from largest to smallest L-R, the moment a small number shows up before a larger number, you subtract it

  for (let i = 0; i < s.length; i++) {
    const current = romValueMap[s[i]];
    const next = romValueMap[s[i + 1]];

    if (next > current) {
      total -= current;
    } else total += current;
  }
  return total;
};
