import Carte from "./carte.js";

class CarteDigitala extends Carte {
    constructor(
        titlu,
        autor,
        anPublicare,
        numarPaginiTotal,
        numarPaginiCitite,
        format,
        pret
    ) {
        super(
            titlu,
            autor,
            anPublicare,
            numarPaginiTotal,
            numarPaginiCitite
        );
        this.format = format;
        this.pret = pret;
    }

    statusCitit() {
        console.log(`Carte digitala - Am citit ${this.numarPaginiCitite} pagini din cartea "${this.titlu}"`);
    }
}

export default CarteDigitala;