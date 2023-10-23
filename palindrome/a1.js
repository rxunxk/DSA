//With String conversion

const isPalindrome = (x) => {
  let str = x.toString();

  for (let x = 0; x < parseInt(str.length / 2); x++) {
    if (str[x] !== str[str.length - 1 - x]) {
      return false;
    }
  }
  return true;
};

console.log(isPalindrome(1221));
