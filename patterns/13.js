let str = "";

let c = 1;
for (let a = 0; a < 5; a++) {
  for (let b = 0; b <= a; b++) {
    str += c;
    c++;
  }
  str += "\n";
}

console.log(str);
