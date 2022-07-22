import {Book} from "./book";

class Library {

    private Books: Book[];
    private address: string;
    private manager: string;

    constructor (Books:Book[], address: string, manager: string)
    {
        this.Books = Books;
        this.address = address;
        this.manager = manager

    }
    public getaddress():string{
        return this.address
    }

    public getmanager():string{
        return this.manager
    }

    public toString(){
        let salida:string = '';
    
        for(let i = 0; i < this.Books.length; i++){
          salida += this.Books[i].toString + '\n'
        }
    
        return salida;
      }

    public setaddress(address:string):void{
        this.address = address
    }

    public setmanager(manager:string):void{
        this.manager = manager
    }

    public getNumberOfBooks():number{
        return this.Books.length
    }
    
    public findByAuthor(author:string):Book[]{
        return this.Books.filter(book => book.author === author)
      }
}

export {Library}