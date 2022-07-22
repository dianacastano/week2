import {Person} from "./Person";

let mipersona = new Person ("diana", 30, "Calle profesor enrique tierno galvan");
console.log(mipersona);
console.log(mipersona.printname());
console.log(mipersona.yearoOfBirth(2022));
console.log(mipersona.setaddress("Tierno Galvan"));
console.log(mipersona.getaddress());