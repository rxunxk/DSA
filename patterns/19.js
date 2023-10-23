let str = "";

for (let a = 0; a < 5; a++) {
  for (let b = 5 - a; b > 0; b--) {
    str += "*";
  }
  for (let c = 0; c < a * 2; c++) {
    str += " ";
  }
  for (let b = 5 - a; b > 0; b--) {
    str += "*";
  }
  str += "\n";
}

for (let a = 0; a < 5; a++) {
  for (let b = 0; b <= a; b++) {
    str += "*";
  }
  for (let c = 0; c < 8 - 2 * a; c++) {
    str += " ";
  }
  for (let b = 0; b <= a; b++) {
    str += "*";
  }
  str += "\n";
}

console.log(str);
