const checkDuplicate = (nums) => {
  const set = new Set();

  for (const i of nums) {
    if (set.has(i)) {
      return true;
    } else {
      set.add(i);
    }
  }

  return false;
};

console.log(checkDuplicate([1, 2, 3, 1]));
