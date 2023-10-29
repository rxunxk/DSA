var findLargest = function (z) {
    var largest = z[0];
    for (var i = 1; i < z.length; i++) {
        if (z[i] > largest)
            largest = z[i];
    }
    return largest;
};
console.log(findLargest([1, 19, 3, 4, 5]));
