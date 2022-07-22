"use strict";
exports.__esModule = true;
exports.Person = void 0;
var Person = /** @class */ (function () {
    function Person(name, age, address) {
        this.name = name;
        this.age = age;
        this.address = address;
    }
    Person.prototype.printname = function () {
        return this.name;
    };
    Person.prototype.yearoOfBirth = function (currentYear) {
        return currentYear - this.age;
    };
    Person.prototype.setaddress = function (address) {
        this.address = address;
    };
    Person.prototype.getaddress = function () {
        return this.address;
    };
    return Person;
}());
exports.Person = Person;
