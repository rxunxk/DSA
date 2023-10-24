/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  let low = 0;
  let high = s.length - 1;

  while (low <= high) {
    let charLow = s[low].toLowerCase();
    let charHigh = s[high].toLowerCase();
    if (
      !(
        (charLow >= "a" && charLow <= "z") ||
        (charLow >= "0" && charLow <= "9")
      )
    )
      low++;
    if (
      !(
        (charHigh >= "a" && charHigh <= "z") ||
        (charHigh >= "0" && charHigh <= "9")
      )
    )
      high--;

    if (low !== high) return false;
    low++;
    high--;

    return true;
  }
};
