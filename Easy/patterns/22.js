let str = "";
n = 4;

for (let a = 0; a < 2 * n - 1; a++) {
  for (let b = 0; b < 2 * n - 1; b++) {
    let t = a;
    let bt = 2 * n - 2 - a;
    let l = b;
    let r = 2 * n - 2 - b;
    str += n - Math.min(t, bt, l, r);
  }
  str += "\n";
}

console.log(str);
