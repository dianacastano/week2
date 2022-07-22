"use strict";
exports.__esModule = true;
exports.Book = void 0;
var Book = /** @class */ (function () {
    function Book(title, nPages, isbn, author, editorial) {
        this.title = title;
        this.nPages = nPages;
        this.isbn = isbn;
        this.author = author;
        this.editorial = editorial;
    }
    Book.prototype.gettitle = function () {
        return this.title;
    };
    Book.prototype.getnPages = function () {
        return this.nPages;
    };
    Book.prototype.getisbn = function () {
        return this.isbn;
    };
    Book.prototype.getauthor = function () {
        return this.author;
    };
    Book.prototype.geteditorial = function () {
        return this.editorial;
    };
    Book.prototype.toString = function () {
        return "Title" + "-" + this.title + "   " +
            "Number of Pages" + "-" + this.nPages + "  " +
            "ISBN" + "-" + this.isbn + "  " +
            "Author" + "-" + this.author + "  " +
            "Editorial" + "-" + this.editorial;
    };
    Book.prototype.settitle = function (title) {
        this.title = title;
    };
    Book.prototype.setnPages = function (nPages) {
        this.nPages = nPages;
    };
    Book.prototype.setisbn = function (isbn) {
        this.isbn = isbn;
    };
    Book.prototype.setauthor = function (author) {
        this.author = author;
    };
    Book.prototype.seteditorial = function (editorial) {
        this.editorial = editorial;
    };
    return Book;
}());
exports.Book = Book;
