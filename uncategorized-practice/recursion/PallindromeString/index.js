/**
 * @param {string} s
 * @return {boolean}
 */

//code does not work
var isPalindrome = function (s) {
  let reverseString = (i) => {
    if (~~(s.length / 2) > i) return;
    let temp = s[i];
    s[i] = s[s.length - 1 - i];
    s[s.length - 1 - i] = temp;
    reverseString(i + 1);
  };
  console.log(s);
};
