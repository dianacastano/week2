"use strict";
exports.__esModule = true;
var Person_1 = require("./Person");
var mipersona = new Person_1.Person("diana", 30, "Calle profesor enrique tierno galvan");
console.log(mipersona);
console.log(mipersona.printname());
console.log(mipersona.yearoOfBirth(2022));
console.log(mipersona.setaddress("Tierno Galvan"));
console.log(mipersona.getaddress());
