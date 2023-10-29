var z = [23, 18, 21, 9, 13, 6];
var quickSort = function (s, e) {
    if (s >= e)
        return;
    var left = s;
    var right = e;
    var mid = Math.floor((left + right) / 2);
    var pivot = z[mid];
    while (left <= right) {
        while (z[left] < pivot) {
            left++;
        }
        while (z[right] > pivot) {
            right++;
        }
        if (left <= right) {
            var temp = z[left];
            z[left] = z[right];
            z[right] = temp;
            left++;
            right--;
        }
    }
    quickSort(s, right);
    quickSort(left, e);
};
quickSort(0, z.length - 1);
console.log(z);
