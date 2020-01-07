"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var BinaryHeap = /** @class */ (function () {
    function BinaryHeap(items) {
        var _this = this;
        this._arr = [];
        if (items !== undefined) {
            items.forEach(function (item) {
                _this.insert(item);
            });
        }
    }
    BinaryHeap.prototype.swap = function (a, b) {
        var t = this._arr[a];
        this._arr[a] = this._arr[b];
        this._arr[b] = t;
    };
    BinaryHeap.prototype.siftDown = function (index) {
        var left;
        var right;
        var flag = true;
        var idx = index;
        var maxIndex = this._arr.length - 1;
        var minChildrenIndex;
        while (flag) {
            left = 2 * idx + 1;
            right = 2 * idx + 2;
            if (left > maxIndex) {
                flag = false;
            }
            else {
                minChildrenIndex = left;
                if (right <= maxIndex && this._arr[left].compareTo(this._arr[right]) > 0) {
                    minChildrenIndex = right;
                }
                if (this._arr[idx].compareTo(this._arr[minChildrenIndex]) > 0) {
                    this.swap(idx, minChildrenIndex);
                    idx = minChildrenIndex;
                }
                else {
                    flag = false;
                }
            }
        }
    };
    ;
    BinaryHeap.prototype.siftUp = function (index) {
        var parentIndex = Math.floor(index / 2);
        while (parentIndex >= 0 && this._arr[parentIndex].compareTo(this._arr[index]) > 0) {
            this.swap(parentIndex, index);
            index = parentIndex;
            parentIndex = Math.floor(parentIndex / 2);
        }
    };
    ;
    Object.defineProperty(BinaryHeap.prototype, "count", {
        get: function () { return this._arr.length; },
        enumerable: true,
        configurable: true
    });
    BinaryHeap.prototype.extractMin = function () {
        var len = this._arr.length;
        if (len === 0) {
            throw Error("no elements");
        }
        var result = this._arr[0];
        this._arr[0] = this._arr[len - 1];
        this._arr.splice(len - 1, 1);
        this.siftDown(0);
        return result;
    };
    ;
    BinaryHeap.prototype.insert = function (val) {
        this._arr.push(val);
        this.siftUp(this._arr.length - 1);
    };
    ;
    return BinaryHeap;
}());
exports.default = BinaryHeap;
