"use strict";
exports.__esModule = true;
var utils_1 = require("../system/utils");
var InsertionSorting = /** @class */ (function () {
    function InsertionSorting() {
    }
    InsertionSorting.prototype.sort = function (val) {
        var i;
        var j;
        var len = val.length;
        for (i = 1; i < len; i++) {
            j = i - 1;
            while (j >= 0 && val[j].compareTo(val[j + 1]) > 0) {
                utils_1.swap(val, j, j + 1);
                j--;
            }
        }
        return val;
    };
    return InsertionSorting;
}());
exports["default"] = InsertionSorting;
