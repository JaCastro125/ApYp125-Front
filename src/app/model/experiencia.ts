export class Experiencia {
    id?: number;
    nombreE: string;
    descripcionE: string;
    imgE: string;
    periodoE: string;
    puestoE: string;

    constructor(nombreE: string, descripcoinE: string, imgE: string, periodoE: string, puestoE: string) {
        this.nombreE = nombreE;
        this.descripcionE = descripcoinE;
        this.imgE = imgE;
        this.periodoE = periodoE;
        this.puestoE = puestoE;
    }
}
