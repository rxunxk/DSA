let z = [23, 18, 21, 9, 13, 6];

let quickSort = (s: number, e: number) => {
  if (s >= e) return;

  let left = s;
  let right = e;
  let mid = Math.floor((left + right) / 2);
  let pivot = z[mid];

  while (left <= right) {
    while (z[left] < pivot) {
      left++;
    }
    while (z[right] > pivot) {
      right++;
    }

    if (left <= right) {
      let temp = z[left];
      z[left] = z[right];
      z[right] = temp;
      left++;
      right--;
    }
  }

  quickSort(s, right);
  quickSort(left, e);
};

quickSort(0, z.length - 1);
console.log(z);
