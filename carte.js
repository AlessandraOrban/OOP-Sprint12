class Carte {
    #autor;
    constructor(
        titlu,
        autor,
        anPublicare,
        numarPaginiTotal,
        numarPaginiCitite
    ) {
        this.titlu = titlu;
        this.#autor = autor;
        this.anPublicare = anPublicare;
        this.numarPaginiTotal = numarPaginiTotal;
        this.numarPaginiCitite = numarPaginiCitite;
    }

    getAutor = function () {
        return this.#autor;
    };

    setAutor = function (autor) {
        return (this.#autor = autor);
    };

    statusCitit() {
        console.log(`Carte - Am citit ${this.numarPaginiCitite} pagini!`);
    }
}

export default Carte;
