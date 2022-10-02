import { Futbolista } from "./claseFutbolista.js";
import { Persona } from "./clasePersona.js";

export {
    Persona
}from "./clasePersona.js";

export {
    Futbolista
}from "./claseFutbolista.js";

class Masajista extends Persona {
    private grupoAsignado: Futbolista[];

    constructor(auxName : string, auxID : number, auxGrupo: Futbolista[], auxSueldo?: number){
        if (auxSueldo === undefined){
            super(auxName, auxID);
        } else {
            super(auxName, auxID, auxSueldo);
        }

        this.grupoAsignado = auxGrupo;
    }

    public addFutbolista(auxFutbolista: Futbolista): void {
        this.grupoAsignado.push(auxFutbolista);
    }

    private removeFutbolista(index: number): void {
        this.grupoAsignado.splice(index,1);
    }

    public getGrupo(): void {
        for (let i = 0; i < this.grupoAsignado.length; i++ ) {
            console.log ( i + "_ Jugador " + this.grupoAsignado[i].getName())
        }
        let readlineSync = require('readline-sync');
        let decision : number = readlineSync.question("Si desea eliminar uno del grupo ingrese el numero correspondiente.");
        if (decision <= this.grupoAsignado.length) {
            this.removeFutbolista(decision);
        }
    }

    public darBono(): void {
        this.sueldo += (this.sueldo*0.05);
    }

}