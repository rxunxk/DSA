//Hashmaps

const twoSum = (nums, target) => {
  const map = new Map();
  for (let x = 0; x < nums.length; x++) {
    if (map.has(target - nums[x])) {
      return [map.get(target - nums[x]), x];
    }
    map.set(nums[x], x);
  }

  return null;
};

console.log(twoSum([3, 3], 6));
