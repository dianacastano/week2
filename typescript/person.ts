class Person {

   public name: string;
   public age: number;
   private address: string;

   
   constructor(name:string, age:number, address:string)
   {
       this.name = name;
       this.age = age;
       this.address = address;
    }

    public printname(){
        return this.name
    }

    public yearoOfBirth(currentYear:number):number{
        return currentYear - this.age
    }

    public setaddress(address:string):void{
        this.address = address
    }

    public getaddress():string{
        return this.address
    }
       
}

export {Person}

