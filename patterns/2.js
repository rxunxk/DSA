let str = "";

for (let x = 0; x < 5; x++) {
  for (let y = 0; y <= x; y++) {
    str += "*";
  }
  str += "\n";
}

console.log(str);
