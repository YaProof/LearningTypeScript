"use strict";
exports.__esModule = true;
var MergeSorting = /** @class */ (function () {
    function MergeSorting() {
    }
    MergeSorting.prototype.merge = function (val, l, r, mid) {
        var i1 = 0;
        var i2 = 1;
        var result = [];
        while (l + i1 <= mid && mid + i2 <= r) {
            if (val[l + i1].compareTo(val[mid + i2]) > 0) {
                result.push(val[mid + i2]);
                i2++;
            }
            else {
                result.push(val[l + i1]);
                i1++;
            }
        }
        while (l + i1 <= mid) {
            result.push(val[l + i1]);
            i1++;
        }
        while (mid + i2 <= r) {
            result.push(val[mid + i2]);
            i2++;
        }
        result.forEach(function (item, index) {
            val[index + l] = item;
        });
    };
    MergeSorting.prototype.sorting = function (val, l, r) {
        if (r - l >= 1) {
            var mid = Math.floor((l + r) / 2);
            this.sorting(val, l, mid);
            this.sorting(val, mid + 1, r);
            this.merge(val, l, r, mid);
        }
    };
    MergeSorting.prototype.sort = function (val) {
        this.sorting(val, 0, val.length - 1);
        return val;
    };
    return MergeSorting;
}());
exports["default"] = MergeSorting;
