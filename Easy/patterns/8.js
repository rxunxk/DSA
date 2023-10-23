let str = "";

for (let x = 0; x < 5; x++) {
  for (let y = 0; y < x; y++) {
    str += " ";
  }
  for (let z = 0; z < 9 - x * 2; z++) {
    str += "*";
  }
  for (let i = 0; i <= x; i++) {
    str += " ";
  }
  str += "\n";
}

console.log(str);
