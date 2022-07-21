import {Contacts} from "./contacts.js";

import {Person} from "./Person.js";

let persona1 = new Person("diana","castaño", 66, 1.58, 1992,["cantar", "bailar", "ver tv"] );
let persona2 = new Person("camilo","castaño", 50, 1.90, 2000,["cocinar", "bailar", "ver tv"] );
let persona3 = new Person("adrian","guerra", 78, 1.78, 1995,["jugar futboll", "bailar", "ver tv"] );

let contacto = new Contacts(persona1, persona2, persona3);
console.log(contacto);
contacto.printPerson();