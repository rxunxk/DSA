let str = "";

for (let x = 0; x < 9; x++) {
  if (x < 5) {
    for (let y = 0; y <= x; y++) {
      str += "*";
    }
  } else {
    for (let y = 9 - x; y > 0; y--) {
      str += "*";
    }
  }
  str += "\n";
}

console.log(str);
