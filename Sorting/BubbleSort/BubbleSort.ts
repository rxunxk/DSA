let arr = [13, 46, 24, 52, 20, 9];

const bubbleSort = (z: number[]): number[] => {
  for (let a = 0; a < z.length - 1; a++) {
    for (let b = 0; b < z.length - a - 1; b++) {
      if (z[b] > z[b + 1]) {
        let temp = z[b];
        z[b] = z[b + 1];
        z[b + 1] = temp;
      }
    }
  }
  return z;
};

console.log(bubbleSort(arr));
