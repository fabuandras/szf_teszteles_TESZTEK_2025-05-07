export default class Pokemon {
  #adatObj = {};
  #szuloElem;
  #kattintasCallback;

  constructor(adat, szuloElem, kattintasCallback) {
    this.#adatObj = adat;
    this.#szuloElem = szuloElem;
    this.#kattintasCallback = kattintasCallback;
    this.megjelenit();
  }

  megjelenit() {
    let kartya = document.createElement("div");
    kartya.classList.add("kartya");
    kartya.innerHTML = `
      <img src="${this.#adatObj.sprites.front_default}" alt="Pokémon kép">
      <h2>${this.#adatObj.name}</h2>
      <button>Kiválaszt</button>
    `;

    const gomb = kartya.querySelector("button");
    gomb.addEventListener("click", () => {
      this.#kattintasCallback(this.#adatObj);
    });

    this.#szuloElem.appendChild(kartya);
  }
}
