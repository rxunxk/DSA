var arr = [32, 57, 11, 68, 96, 12, 89, 90, 7];
var selectionSort = function (z) {
    for (var a = 0; a < z.length - 1; a++) {
        var smallIndex = a;
        for (var b = a; b < z.length; b++) {
            if (z[b] < z[smallIndex]) {
                smallIndex = b;
            }
        }
        var temp = z[a];
        z[a] = z[smallIndex];
        z[smallIndex] = temp;
    }
    return z;
};
console.log(selectionSort(arr));
