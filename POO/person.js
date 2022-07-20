
class Person 
{

    constructor(nombre, apellido, peso, altura, yearOfBirth, hobbies )
    {
        this.nomb = nombre;
        this.apelli = apellido;
        this.pes = peso;
        this.altu = altura
        this.yearOfBi = yearOfBirth;
        this.hobb = hobbies;
    }

    calcularImc() {
        return this.pes / (this.altu * this.altu);
      }

    calcularedad(){
        return this.yearOfBi - (2022)
    }

    printall(){
     console.log( 
            "nombre" + "-" + this.nomb,
            "apellido" + "-" + this.apelli,
            "altura" + "-" + this.altu,
            "peso" + "-" + this.pes,
            "yearOfBirth" + "-" + this.yearOfBi,
            "hobbies" + "-" + this.hobb  );
    }

    printhobbies(){
        return this.hobb
    }

}

export {Person}
