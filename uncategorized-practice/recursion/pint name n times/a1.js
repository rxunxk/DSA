let printName = (n) => {
  if (n === 0) return 0;
  printName(n - 1);
  console.log("Raunak Pandey");
};

console.log(printName(5));
