"use strict";
exports.__esModule = true;
var Sorting = /** @class */ (function () {
    function Sorting(arr, sort) {
        this._arr = arr;
        this._sort = sort;
    }
    Sorting.prototype.sort = function () {
        return this._sort.sort(this._arr);
    };
    return Sorting;
}());
exports["default"] = Sorting;
