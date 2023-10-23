let str = "";

let start = 1;
for (let i = 0; i < 5; i++) {
  if (i % 2 === 0) start = 1;
  else {
    start = 0;
  }
  for (let j = 0; j <= i; j++) {
    str += start;
    start = 1 - start;
  }
  str += "\n";
}

console.log(str);
