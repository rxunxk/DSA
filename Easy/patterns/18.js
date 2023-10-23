let str = "";

let z = ["A", "B", "C", "D", "E"];

for (let a = 0; a < 5; a++) {
  for (let b = a; b >= 0; b--) {
    str += z[z.length - 1 - b];
  }
  str += "\n";
}

console.log(str);
