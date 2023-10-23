const isAnagram = (s, t) => {
  const smap = new Map();
  const tmap = new Map();

  if (s.length !== t.length) {
    return false;
  }

  //for s
  for (let x = 0; x < s.length; x++) {
    let count = 0;
    smap.set(s[x], count);
    for (let y = x + 1; y < s.length; y++) {
      if (s[x] === s[y]) {
        count++;
      }
    }
    if (count) smap.set(s[x], count);
  }

  //for t
  for (let x = 0; x < t.length; x++) {
    let count = 0;
    tmap.set(t[x], count);
    for (let y = x + 1; y < t.length; y++) {
      if (t[x] === t[y]) {
        count++;
      }
    }
    if (count) tmap.set(t[x], count);
  }

  console.log("smap: ", smap.entries());
  console.log("tmap: ", tmap.entries());

  //compare both maps
  for (let [key, value] of smap.entries()) {
    if (!(tmap.get(key) === value)) {
      return false;
    }
  }

  return true;
};

console.log(isAnagram("aacc", "ccac"));
