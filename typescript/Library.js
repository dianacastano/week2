"use strict";
exports.__esModule = true;
exports.Library = void 0;
var Library = /** @class */ (function () {
    function Library(Books, address, manager) {
        this.Books = Books;
        this.address = address;
        this.manager = manager;
    }
    Library.prototype.getaddress = function () {
        return this.address;
    };
    Library.prototype.getmanager = function () {
        return this.manager;
    };
    Library.prototype.toString = function () {
        var salida = '';
        for (var i = 0; i < this.Books.length; i++) {
            salida += this.Books[i].toString + '\n';
        }
        return salida;
    };
    Library.prototype.setaddress = function (address) {
        this.address = address;
    };
    Library.prototype.setmanager = function (manager) {
        this.manager = manager;
    };
    Library.prototype.getNumberOfBooks = function () {
        return this.Books.length;
    };
    Library.prototype.findByAuthor = function (author) {
        return this.Books.filter(function (book) { return book.author === author; });
    };
    return Library;
}());
exports.Library = Library;
