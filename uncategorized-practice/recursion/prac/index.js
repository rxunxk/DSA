let fn = (n, arr) => {
  if (n === 0) return [];
  return [...fn(n - 1, arr.slice(1, n)), arr[0]];
};

console.log(fn(6, [5, 7, 8, 1, 6, 3]));
