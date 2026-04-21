/**
 * 1952. Three Divisors

Given an integer n, return true if n has exactly three positive divisors. Otherwise, return false.

An integer m is a divisor of n if there exists an integer k such that n = k * m.

*/
// Current: Brute-Force Search / Enumeration
// Suggested: Brute-Force Search / Prime Number Sieve
// Complexity: O(n)
// Suggested: O(sqrt(n))

function isThree(n: number): boolean {
  let divisorCount = 0;
  for (let i = 1; i < n + 1; i++) {
    if (n % i === 0) {
      divisorCount++;
    }
  }

  return divisorCount + 1 === 3 ? true : false;
}

function isThree2(n: number): boolean {
  let divisorCount = 0;
  for (let i = 1; i * i <= n; i++) {
    if (n % i === 0) {
      // i and n/i are both divisors unless i === n/i (perfect square)
      // if i === n/i, it means n is a perfect square
      // because it's divisors can only be 1,p,p^2.
      // we add 2 for 1, add 1 when we find p, p+1 breaks the loop so we have 3 as divisorCount
      divisorCount += i === n / i ? 1 : 2;
    }
  }
  return divisorCount === 3;
}
