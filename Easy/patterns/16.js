let str = "";

let c = ["A", "B", "C", "D", "E"];
for (let a = 0; a < 5; a++) {
  for (let b = 0; b <= a; b++) {
    str += c[a];
  }
  str += "\n";
}

console.log(str);
