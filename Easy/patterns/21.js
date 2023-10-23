let str = "";

for (let a = 0; a < 4; a++) {
  for (let b = 0; b < 4; b++) {
    if (a == 0 || a == 4 - 1 || b == 0 || b == 4 - 1) {
      str += "*";
    } else {
      str += " ";
    }
  }
  str += "\n";
}

console.log(str);
