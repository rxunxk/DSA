let z = [23, 18, 21, 9, 13, 6];

let mergeSort = (a: number, b: number): number[] => {
  //base case
  if (a >= b) return [z[a]];

  //mid formula
  let mid = Math.floor((a + b) / 2);

  //recursive calls
  let fc1 = mergeSort(a, mid);
  let fc2 = mergeSort(mid + 1, b);

  let temp: number[] = [];

  let left = 0;
  let right = 0;

  while (left < fc1.length && right < fc2.length) {
    if (fc1[left] < fc2[right]) {
      temp.push(fc1[left]);
      left++;
    } else {
      temp.push(fc2[right]);
      right++;
    }
  }

  while (left < fc1.length) {
    temp.push(fc1[left]);
    left++;
  }
  while (right < fc2.length) {
    temp.push(fc2[right]);
    right++;
  }
  return temp;
};

console.log(mergeSort(0, z.length - 1));
