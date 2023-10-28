var arr = [1, 56, 8, 12, 3, 89, 18];
var insertionSort = function (z) {
    for (var a = 0; a < z.length; a++) {
        for (var b = a; b >= 0; b--) {
            if (z[b] < z[b - 1]) {
                var temp = z[b];
                z[b] = z[b - 1];
                z[b - 1] = temp;
            }
        }
    }
    return z;
};
console.log(insertionSort(arr));
