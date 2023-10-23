let str = "";

for (let i = 0; i < 4; i++) {
  for (let j = 0; j <= i; j++) {
    str += j + 1;
  }
  for (let k = 0; k < 6 - i * 2; k++) {
    str += " ";
  }
  for (let l = i + 1; l > 0; l--) {
    str += l;
  }
  str += "\n";
}

console.log(str);
