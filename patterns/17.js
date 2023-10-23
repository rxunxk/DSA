let str = "";

let z = ["A", "B", "C", "D"];

for (let a = 0; a < 4; a++) {
  for (let b = 0; b < z.length - 1 - a; b++) {
    str += "`";
  }
  for (let c = 0; c <= a; c++) {
    str += z[c];
  }
  for (let d = a - 1; d >= 0; d--) {
    str += z[d];
  }
  for (let b = 0; b < z.length - 1 - a; b++) {
    str += "`";
  }
  str += "\n";
}

console.log(str);
