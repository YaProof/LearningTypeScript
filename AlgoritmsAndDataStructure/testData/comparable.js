"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var User = /** @class */ (function () {
    function User(id, name, age) {
        this._id = id;
        this._name = name;
        this._age = age;
    }
    Object.defineProperty(User.prototype, "id", {
        get: function () { return this._id; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(User.prototype, "name", {
        get: function () { return this._name; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(User.prototype, "age", {
        get: function () { return this._age; },
        enumerable: true,
        configurable: true
    });
    User.prototype.compareTo = function (val) {
        return this._id - val.id;
    };
    ;
    return User;
}());
exports.default = User;
