import {Book} from "./book";

let miBook = new Book("Sinsajo", 422, "978-987-609-244-9", "Collins, Suzanne", "Molino");
console.log(miBook);
console.log(miBook.gettitle());
console.log(miBook.getnPages());
console.log(miBook.getisbn());
console.log(miBook.getauthor());
console.log(miBook.geteditorial());
console.log(miBook.toString());
miBook.settitle("La leyenda de Sleepy Hollow");
console.log(miBook.gettitle());
miBook.setnPages(73);
console.log(miBook.getnPages());
miBook.setisbn("978-84-9824-686-5");
console.log(miBook.getisbn());
miBook.setauthor("Washington Irving");
console.log(miBook.getauthor());
miBook.seteditorial("Editorial Alba");
console.log(miBook.geteditorial());


