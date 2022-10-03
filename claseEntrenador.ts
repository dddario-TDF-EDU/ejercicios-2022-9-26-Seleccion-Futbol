import { Futbolista } from "./claseFutbolista.js";
import { Persona } from "./clasePersona.js";

export {
    Persona
}from "./clasePersona.js";

export {
    Futbolista
}from "./claseFutbolista.js";

export class Entrenador extends Persona {
    private titulares: Futbolista[];
    private suplentes: Futbolista[];

    constructor(auxName : string, auxID : number, auxTitulares: Futbolista[], auxSuplentes: Futbolista[], auxSueldo?: number){
        if (auxSueldo === undefined){
            super(auxName, auxID);
        } else {
            super(auxName, auxID, auxSueldo);
        }

        this.titulares = auxTitulares;
        this.suplentes = auxSuplentes;
    }

    private addTitular(index: number): void {
        this.titulares.push(this.suplentes[index]);
        this.suplentes.splice(index,1);
    }

    private removeTitular(index: number): void {
        this.suplentes.push(this.titulares[index])
        this.titulares.splice(index,1);
    }

    public setTitulares(): void {
        for (let i = 0; i < this.titulares.length; i++ ) {
            console.log ( i + "_ Jugador " + this.titulares[i].getName())
        }
        let readlineSync = require('readline-sync');
        let decision : number = readlineSync.question("Si desea eliminar uno de los titulares ingrese el numero correspondiente.");
        if (decision <= this.titulares.length && decision >= 0) {
            this.removeTitular(decision);
            console.log ("Cambio realizado")
        }
    }

    public getTitulares(): Futbolista[] {
        return this.titulares;
    }

    public setSuplentes(): void {
        for (let i = 0; i < this.titulares.length; i++ ) {
            console.log ( i + "_ Jugador " + this.suplentes[i].getName())
        }
        let readlineSync = require('readline-sync');
        let decision : number = readlineSync.question("Si desea ascender uno de los suplentes ingrese el numero correspondiente.");
        if (decision <= this.suplentes.length && decision >= 0) {
            this.addTitular(decision);
            console.log ("Cambio realizado")
        }
    }

    public getSuplentes(): Futbolista[] {
        return this.suplentes;
    }

}