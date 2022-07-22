import {Person} from "./Person";

class Contacts {
    
    public people:Person[];

    constructor() {
        this.people = [];
    }

    public printCalendar():void{
        for(let i = 0; i < this.people.length; i++){
            console.log(this.people[i]);
        }
    }
}
export {Contacts}