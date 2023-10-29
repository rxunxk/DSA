var z = [23, 18, 21, 9, 13, 6];
var mergeSort = function (a, b) {
    //base case
    if (a >= b)
        return [z[a]];
    //mid formula
    var mid = Math.floor((a + b) / 2);
    //recursive calls
    var fc1 = mergeSort(a, mid);
    var fc2 = mergeSort(mid + 1, b);
    var temp = [];
    var left = 0;
    var right = 0;
    while (left < fc1.length && right < fc2.length) {
        if (fc1[left] < fc2[right]) {
            temp.push(fc1[left]);
            left++;
        }
        else {
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
