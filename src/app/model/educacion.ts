export class Educacion {
    id?: number;
    nombreE: string;
    descripcionE: string;
    tituloE: string;
    estadoE: string;
    periodoE: string;

    constructor(nombreE: string, descripcionE: string, tituloE: string, estadoE: string, periodoE: string) {
        this.nombreE = nombreE;
        this.descripcionE = descripcionE;
        this.tituloE = tituloE;
        this.estadoE = estadoE;
        this.periodoE = periodoE;
    }
}
