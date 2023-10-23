let str = "";

for (let x = 5; x >= 1; x--) {
  for (let y = 1; y <= x; y++) {
    str += "*";
  }
  str += "\n";
}

console.log(str);
