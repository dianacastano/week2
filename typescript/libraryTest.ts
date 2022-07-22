import { Library } from "./Library";
import { Book } from "./Book";

let myBook = new Book("Don Quijote de la Mancha", 1345,"8468025380", 
"Miguel de Cervantes", "Santillana");

let myBook1 = new Book("Sinsajo", 422, "978-987-609-244-9", "Collins, Suzanne", "Molino");

let myBook2 = new Book("La leyenda de Sleepy Hollow", 73, "978-84-9824-686-5", "Washington Irving", "Editorial Alba");

let mybooks = [ myBook, myBook1, myBook2 ];

let miLibrary = new Library(mybooks,"Sin Calle", "No tiene manager");

miLibrary.setaddress("Carrer de Mariana Pineda, 93, 95");
console.log(miLibrary.getaddress());

miLibrary.setmanager(" Jacobo Smith")
console.log(miLibrary.getmanager());


console.log(miLibrary.getNumberOfBooks());
console.log(miLibrary.findByAuthor("Adrian"));


