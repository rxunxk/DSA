let arr = [32, 57, 11, 68, 96, 12, 89, 90, 7];

const selectionSort = (z: number[]): number[] => {
  for (let a = 0; a < z.length - 1; a++) {
    let smallIndex = a;
    for (let b = a; b < z.length; b++) {
      if (z[b] < z[smallIndex]) {
        smallIndex = b;
      }
    }
    let temp = z[a];
    z[a] = z[smallIndex];
    z[smallIndex] = temp;
  }
  return z;
};

console.log(selectionSort(arr));
