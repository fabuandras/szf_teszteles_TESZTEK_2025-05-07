/*  megkapja a lista egyetlen objektumát
 és megjeleníti */

export default class AdminTermek {
  #adatObj = {};
  #pElem;
  constructor(adatObj, pElem) {
    this.#adatObj = adatObj;
    this.#pElem = pElem;
    this.megjelenit();
    this.torolGOMG=this.#pElem.querySelector("tr:last-child td:last-child .torol ")
    console.log(this.torolGOMG)
  }
  megjelenit() {
    let html = `
             <tr>
                <td scope="col">${this.#adatObj.id}</td>
                <td scope="col">${this.#adatObj.title}</td>
                <td scope="col">${this.#adatObj.price}</td>
                <td scope="col">${this.#adatObj.category}</td>
                <td scope="col">${this.#adatObj.description}</td>
                <td scope="col">${this.#adatObj.image}</td>
                <td scope="col">
                    <button class="torol">🗑</button>
                </td>
            </tr>
        `;
    this.#pElem.insertAdjacentHTML("beforeend", html);
  }

  esemenykezeles(){
    this.torolGOMG.addEvenetListener("click",()=>{
        window.dispatchEvent(new CustomEvent("torol",{detail:this.#adatObj.id}))
    })
  }
}
