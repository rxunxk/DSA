let str = "";

for (let x = 0; x < 5; x++) {
  for (let y = 0; y < 5 - 1 - x; y++) {
    str += " ";
  }
  for (let z = 0; z < x * 2 + 1; z++) {
    str += "*";
  }
  for (let i = 0; i < 5 - 1 - x; i++) {
    str += " ";
  }
  str += "\n";
}

console.log(str);
