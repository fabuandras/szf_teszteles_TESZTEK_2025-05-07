import Modell from "./Modell.js";
import Pokemon from "./Pokemon.js";

let LISTA = [];
const modell = new Modell(LISTA);
const articleElem = document.querySelector("article");
const sectionElem = document.getElementById("kivalasztott-kartya-tarolo");

for (let i = 1; i <= 1026; i++) {
    const url = `https://pokeapi.co/api/v2/pokemon-form/${i}`;
    modell.getAdat(url, peldanyosit);
}

function peldanyosit(adat) {
  new Pokemon(adat, articleElem, megjelenitKivalasztott);
}

function megjelenitKivalasztott(adatObj) {
  const kartyaHTML = `
    <div class="valasztott-kartya">
      <img src="${adatObj.sprites.front_default}" alt="${adatObj.name}">
      <p>Név: ${adatObj.name}</p>
      <p>Id: ${adatObj.id}</p>
    </div>
  `;
  sectionElem.insertAdjacentHTML("beforeend", kartyaHTML);
}

