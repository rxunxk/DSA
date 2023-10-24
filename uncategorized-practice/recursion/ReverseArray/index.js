//swapping

let fn = (n, arr) => {
  let reverseArray = (i) => {
    if (i > ~~(n / 2)) return;
    let temp = arr[i];
    arr[i] = arr[n - i - 1];
    arr[n - i - 1] = temp;
    reverseArray(i + 1);
  };
  reverseArray(0);
  console.log(arr);
};

console.log(fn(5, [4, 7, 2, 9, 1]));
