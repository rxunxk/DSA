//Without String conversion

const isPalindrome = (x) => {
  let revX = 0;
  for (let n = x; n > 0; n = ~~(n * 0.1)) {
    let lastDigit = n % 10;
    revX = revX * 10 + lastDigit;
  }

  return revX === x;
};

console.log(isPalindrome(1221));
