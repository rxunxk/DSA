const isAnagram = (s, t) => {
  if (s.length !== t.length) {
    return false;
  }
  for (let i = 0; i < s.length; i++) {
    let contains = false;
    for (let j = 0; j < t.length; j++) {
      if (s[i] === t[j]) {
        contains = true;
        break;
      }
    }
    if (!contains) {
      return false;
    }
  }

  return true;
};

console.log(isAnagram("aacc", "ccac"));
