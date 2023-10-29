let secondLargest = (z: number[]) => {
  let large1 = z[0];
  let small1 = z[0];
  let large2 = z[0];
  let small2 = z[1];

  for (let i = 1; i < z.length; i++) {
    if (z[i] > large1) {
      large2 = large1;
      large1 = z[i];
    }
    if (z[i] < small1) {
      small2 = small1;
      small1 = z[i];
    }
  }

  return [small2, large2];
};

console.log(secondLargest([1, 2, 3, 4, -1, 6]));
