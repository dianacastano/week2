import {Vector} from "./Vector";

let miVector = new Vector(10,20);
let miVector1 = new Vector(39, 150);

miVector.print();

console.log(miVector.add(miVector1));
console.log(miVector.subs(miVector1));
console.log(miVector.mult(miVector1));
console.log(miVector.multNumber(6));
