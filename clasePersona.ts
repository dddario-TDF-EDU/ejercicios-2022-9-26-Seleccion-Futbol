export class Persona {
    private name: string;
    private ID: number;
    private contratado: boolean;
    private sueldo: number;

    constructor(auxName : string, auxID : number, auxSueldo?: number) {
        this.name = auxName;
        this.ID = auxID;
        this.contratado = true;
        if (auxSueldo === undefined) {
            this.sueldo = 1000; 
        } else {
            this.sueldo = auxSueldo;
        }
    }

    protected getName(): string {
        return this.name;
    }

    protected setName(auxName): void {
        this.name = auxName;
    } 
    protected setContratado(): void {
        this.contratado = true;
        console.log(this.name + " contratado");
    }

    protected setDespido(): void {
        this.contratado = false;
        console.log(this.name + " despedido");
    }

    protected getEstadoContrato(): boolean {
        return this.contratado;
    }

    protected getSueldo(): number {
        return this.sueldo; 
    }

    protected setSueldo(auxSueldo): void {
        this.sueldo = auxSueldo;
    }

    protected darBono(): void {
        this.sueldo += (this.sueldo*0.01);
    }

}