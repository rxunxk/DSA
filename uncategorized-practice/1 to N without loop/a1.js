const getNos = (n) => {
  if (n === 0) return;
  getNos(n - 1);
  console.log(n);
};

console.log(getNos(5));
