let str = "";

for (let x = 1; x <= 5; x++) {
  for (let y = 1; y <= x; y++) {
    str += x;
  }
  str += "\n";
}

console.log(str);
