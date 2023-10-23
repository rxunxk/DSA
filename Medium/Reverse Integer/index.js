/**
 * https://leetcode.com/problems/reverse-integer/
 * @param {number} x
 * @return {number}
 */
let reverse = function (x) {
  let rev = 0;
  let copy = x < 0 ? x * -1 : x;

  while (copy > 0) {
    rev = rev * 10 + (copy % 10);
    copy = ~~(copy / 10);
  }

  rev = x < 0 ? rev * -1 : rev;
  if (rev < -Math.pow(2, 31) || rev > Math.pow(2, 31) - 1) {
    return 0;
  }

  return rev;
};

console.log(reverse(1534236469));
