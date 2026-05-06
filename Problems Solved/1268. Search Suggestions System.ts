/**
 * You are given an array of strings products and a string searchWord.

Design a system that suggests at most three product names from products after each character of searchWord is typed. 
Suggested products should have common prefix with searchWord. 
If there are more than three products with a common prefix return the three lexicographically minimums products.
Return a list of lists of the suggested products after each character of searchWord is typed.

Example 1:

Input: products = ["mobile","mouse","moneypot","monitor","mousepad"], searchWord = "mouse"
Output: [["mobile","moneypot","monitor"],["mobile","moneypot","monitor"],["mouse","mousepad"],["mouse","mousepad"],["mouse","mousepad"]]
Explanation: products sorted lexicographically = ["mobile","moneypot","monitor","mouse","mousepad"].
After typing m and mo all products match and we show user ["mobile","moneypot","monitor"].
After typing mou, mous and mouse the system suggests ["mouse","mousepad"].
 */

// Current: Sorting / Brute-Force Search / String Matching
// Suggested: Sorting / Binary Search / Two Pointers
// Key Idea: Efficiently finding lexicographically sorted strings with a specific prefix using sorting and binary search.

// Current complexity: O(n⋅m⋅l)
// Suggested complexity: O(mlogm+l+n)
// Suggestions: Sort once, then use binary search to find the prefix range instead of filtering repeatedly.
function suggestedProducts(products: string[], searchWord: string): string[][] {
  const sortedProducts = products.sort();
  let res = [];
  for (let i = 0; i < searchWord.length; i++) {
    const ar = sortedProducts
      .filter((p) => p.startsWith(searchWord.slice(0, i + 1)))
      .filter((_, j) => j < 3);
    res.push(ar);
  }

  return res;
}

function suggestedProducts2(
  products: string[],
  searchWord: string,
): string[][] {
  const sorted = products.sort();
  const res: string[][] = [];
  let prefix = "";

  for (const char of searchWord) {
    prefix += char;

    // Binary search: find leftmost index where sorted[mid] >= prefix
    let lo = 0,
      hi = sorted.length;
    while (lo < hi) {
      const mid = (lo + hi) >> 1;
      if (sorted[mid] < prefix) lo = mid + 1;
      else hi = mid;
    }

    // From lo, collect up to 3 products that still match the prefix
    const suggestions: string[] = [];
    for (let i = lo; i < Math.min(lo + 3, sorted.length); i++) {
      if (sorted[i].startsWith(prefix)) suggestions.push(sorted[i]);
      else break; // sorted order means no further matches possible
    }

    res.push(suggestions);
  }

  return res;
}
