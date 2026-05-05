/**
 * You are given a string s. s[i] is either a lowercase English letter or '?'.

For a string t having length m containing only lowercase English letters, we define the function cost(i) for an index i as the number of characters equal to t[i] that appeared before it, i.e. in the range [0, i - 1].

The value of t is the sum of cost(i) for all indices i.

For example, for the string t = "aab":

cost(0) = 0
cost(1) = 1
cost(2) = 0
Hence, the value of "aab" is 0 + 1 + 0 = 1.
Your task is to replace all occurrences of '?' in s with any lowercase English letter so that the value of s is minimized.

Return a string denoting the modified string with replaced occurrences of '?'.
If there are multiple strings resulting in the minimum value, return the lexicographically smallest one.

Example 1:
Input: s = "???"
Output: "abc"

Explanation: In this example, we can replace the occurrences of '?' to make s equal to "abc".
For "abc", cost(0) = 0, cost(1) = 0, and cost(2) = 0.
The value of "abc" is 0.
Some other modifications of s that have a value of 0 are "cba", "abz", and, "hey".
Among all of them, we choose the lexicographically smallest.
 */

// almost there but not tracking the frequency of each character that has already appeared in the string
// for the lexicographically smallest part
function minimizeStringValue1(s: string): string {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  let stringArr: string[] = s.split("");
  const set: Set<string | undefined> = new Set(s.replaceAll("?", "").split(""));
  const repArr = [];
  const repCounter = [];

  for (let i = 0; i < stringArr.length; i++) {
    if (stringArr[i] === "?") {
      repCounter.push(i);
      // console.log(set)
      if (set.size === 26) set.clear();
      for (const letter of alphabet) {
        if (!set.has(letter)) {
          repArr.push(letter);
          set.add(letter);
          break;
        } else if (letter === "z") {
          repArr.push("z");
        }
      }
    }
  }
  // console.log({repArr, repCounter})

  repArr.sort();
  for (const num in repCounter) {
    // console.log({stringArr, num})
    stringArr[repCounter[num]] = repArr[num];
  }

  return stringArr.join("");
}

function minimizeStringValue(s: string): string {
  // Count existing character frequencies
  const freq = new Array(26).fill(0);
  for (const c of s) {
    // a -> 0, b -> 1, etc.
    if (c !== "?") freq[c.charCodeAt(0) - 97]++;
  }

  // For each '?', greedily pick the letter with lowest frequency
  // Use a min-heap approach: just scan freq array (26 letters = O(26) = O(1))
  const replacements: string[] = [];
  for (const c of s) {
    if (c === "?") {
      // Find letter with minimum frequency
      let minIdx = 0;
      for (let i = 1; i < 26; i++) {
        if (freq[i] < freq[minIdx]) minIdx = i;
      }
      // adds by minimum frequency to replacements and updates frequency array
      replacements.push(String.fromCharCode(97 + minIdx));
      freq[minIdx]++;
    }
  }

  // Sort replacements so '?' positions get lexicographically smallest assignment
  replacements.sort();

  // Fill in the '?' positions
  const arr = s.split("");
  let ri = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "?") arr[i] = replacements[ri++];
  }

  return arr.join("");
}
