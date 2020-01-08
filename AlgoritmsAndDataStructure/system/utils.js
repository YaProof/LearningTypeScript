"use strict";
exports.__esModule = true;
function swap(arr, idxA, idxB) {
    var t = arr[idxA];
    arr[idxA] = arr[idxB];
    arr[idxB] = t;
}
exports.swap = swap;
