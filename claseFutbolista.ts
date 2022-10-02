import { Persona } from "./clasePersona.js";

export {
    Persona
}from "./clasePersona.js";

export class Futbolista extends Persona {
    private goles: number;
    private asistencias: number;

    constructor(auxName : string, auxID : number, auxSueldo?: number){
        if (auxSueldo === undefined){
            super(auxName, auxID);
        } else {
            super(auxName, auxID, auxSueldo);
        }
        this.goles = 0;
        this.asistencias = 0;    
    }

    public setGoles(auxGoles: number): void {
        this.goles = auxGoles;
    }

    private getGoles(): number {
        return this.goles;
    }

    public setAsistencias(auxAsistencia: number): void {
        this.asistencias = auxAsistencia;
    }

    private getAsistencias(): number {
        return this.asistencias;
    }

    public darBono(): void {
        let plusRendimiento : number = (Number(this.getAsistencias) + Number(this.getGoles)) / 10;
        this.sueldo += (this.sueldo * plusRendimiento); 
    }

}