export default class Modell {
    #lista = [];
  
    constructor(lista) {
      this.#lista = lista;
    }
  
    getAdat(vegpont, callback) {
      fetch(vegpont)
        .then((response) => response.json())
        .then((data) => {
          this.#lista = data;
          callback(this.#lista);
        })
        .catch((error) => console.error(error));
    }
  }
  