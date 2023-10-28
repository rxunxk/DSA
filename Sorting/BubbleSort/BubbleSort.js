var arr = [13, 46, 24, 52, 20, 9];
var bubbleSort = function (z) {
    for (var a = 0; a < z.length - 1; a++) {
        for (var b = 0; b < z.length - a - 1; b++) {
            if (z[b] > z[b + 1]) {
                var temp = z[b];
                z[b] = z[b + 1];
                z[b + 1] = temp;
            }
        }
    }
    return z;
};
console.log(bubbleSort(arr));
