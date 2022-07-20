import {Person} from "./Person.js";

let persona = new Person("diana","castaño", 66, 1.58, 1992,["cantar", "bailar", "ver tv"] );
console.log(persona);
console.log(persona.calcularImc());
console.log(persona.calcularedad());
persona.printall()
persona.printhobbies();