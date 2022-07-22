import {Contacts} from "./contacts";
import {Person} from "./Person";

let contactos = new Contacts();

let persona1 = new Person("diana", 30, "Calle profesor enrique tierno galvan");;
let persona2 = new Person("Mariangel", 9, "Calle dolores alcaide");
let persona3 = new Person("Darwin", 10, "Calle dolores alcaide");

contactos.people.push(persona1, persona2, persona3);
contactos.printCalendar();





