export class Persona {
    private name: string;
    private ID: number;
    private contratado: boolean;
    protected sueldo: number;

    constructor(auxName: string, auxID: number, auxSueldo?: number) {
        this.name = auxName;
        this.ID = auxID;
        this.contratado = true;
        if (auxSueldo === undefined) {
            this.sueldo = 1000;
        } else {
            this.sueldo = auxSueldo;
        }
    }

    public getName(): string {
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

    public getSueldo(): number {
        return this.sueldo;
    }

    protected setSueldo(auxSueldo): void {
        this.sueldo = auxSueldo;
    }

    public darBono(): void {
        this.sueldo += (this.sueldo * 0.01);
    }
}