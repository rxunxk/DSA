//https://www.codingninjas.com/studio/problems/sum-of-all-divisors_8360720?utm_source=striver&utm_medium=website&utm_campaign=a_zcoursetuf

const sumOfDivisors = (n) => {
  let res = 0;
  for (let a = 1; a <= n; a++) {
    for (let b = 1; b <= a; b++) {
      if (a % b == 0) {
        res += b;
      }
    }
  }

  return res;
};

console.log(sumOfDivisors(3));
