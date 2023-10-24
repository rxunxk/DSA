let printN21 = (n) => {
  if (n === 0) return 0;
  console.log(n);
  printN21(n - 1);
};

console.log(printN21(5));
