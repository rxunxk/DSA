let findLargest = (z: number[]): number => {
  let largest = z[0];

  for (let i = 1; i < z.length; i++) {
    if (z[i] > largest) largest = z[i];
  }

  return largest;
};

console.log(findLargest([1, 19, 3, 4, 5]));
