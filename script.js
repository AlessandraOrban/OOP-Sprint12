import Carte from "./carte.js";
import CarteDigitala from "./carteDigitala.js";

const carte1 = new Carte("Mandrie si prejudecata", "Jane Austen", 1980, 589, 250);

const carteDigitala1 = new CarteDigitala(
    "Mandrie si prejudecata",
    "Jane Austen",
    1980,
    589,
    250,
    "pdf",
    35
);

// console.log(carte1);
// console.log(carte1.toString());

// console.log(carteDigitala1);

// carte1.statusCitit();
// carteDigitala1.statusCitit();
const autorNew = carte1.setAutor("Jane");
console.log(autorNew);
console.log(carte1);
console.log(carte1.getAutor());


// exemplu this keyword
const persoana = {
    name: "George",
    saluta: function () {
        console.log(`${this.name} saluta!`);
    },
};

console.log("Persoana 1: ", persoana);
console.log("Persoana 1 saluta: ", persoana.name);


// 
const content = `
<h2>Lista de carti</h2>
    <ul>
        <li>Titlu: ${carte1.titlu}</li>
        <li>Autor: ${carte1.getAutor()}</li>
        <li>An publicare: ${carte1.anPublicare}</li>
        <li>Numar pagini total: ${carte1.numarPaginiTotal}</li>
        <li>Numar pagini citite: ${carte1.numarPaginiCitite}</li>
    </ul>
`;

document.body.innerHTML = content;