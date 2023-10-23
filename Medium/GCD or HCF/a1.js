//https://www.codingninjas.com/studio/problems/hcf-and-lcm_840448?utm_source=striver&utm_medium=website&utm_campaign=a_zcoursetuf

const fn = (n, m) => {
  let d = [];
  for (let a = 1; a <= (n > m ? n : m); a++) {
    if (n % a == 0 && m % a == 0) {
      d.push(a);
    }
  }
  return d[d.length - 1];
};

console.log(fn(9, 6));
