"use strict";
exports.__esModule = true;
function binarySearch(arr, value) {
    var l = -1;
    var r = arr.length;
    var m;
    if (arr.length) {
        while (l < r - 1) {
            m = Math.floor((l + r) / 2);
            if (arr[m] === value) {
                return m;
            }
            else if (arr[m] < value) {
                l = m;
            }
            else {
                r = m;
            }
        }
    }
    return -1;
}
exports.binarySearch = binarySearch;
