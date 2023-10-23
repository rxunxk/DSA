//Approach - 1, Looping through, Bruteforce

const twoSum = (nums, target) => {
  for (let x = 0; x < nums.length; x++) {
    for (let y = x + 1; y < nums.length; y++) {
      if (nums[x] + nums[y] === target) {
        return [x, y];
      }
    }
  }

  return false;
};

console.log(twoSum([3, 3], 9));
