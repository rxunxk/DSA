let arr = [1, 56, 8, 12, 3, 89, 18];

const insertionSort = (z: number[]): number[] => {
  for (let a = 0; a < z.length; a++) {
    for (let b = a; b >= 0; b--) {
      if (z[b] < z[b - 1]) {
        let temp = z[b];
        z[b] = z[b - 1];
        z[b - 1] = temp;
      }
    }
  }
  return z;
};

console.log(insertionSort(arr));
