let arr = [10, 5, 10, 15, 10, 5];

let map = new Map();

for (let a = 0; a < arr.length; a++) {
  map.set(arr[a], (map.get(arr[a]) || 0) + 1);
}

console.log(map);
