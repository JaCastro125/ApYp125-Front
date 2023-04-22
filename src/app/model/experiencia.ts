export class Experiencia {
    id?: number;
    nombreE: string;
    descripcionE: string;
    periodoE: string;
    puestoE: string;

    constructor(nombreE: string, descripcoinE: string, periodoE: string, puestoE: string) {
        this.nombreE = nombreE;
        this.descripcionE = descripcoinE;
        this.periodoE = periodoE;
        this.puestoE = puestoE;
    }
}
