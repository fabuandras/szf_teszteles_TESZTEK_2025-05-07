import Modell from "../Modell.js"

function getAdatTeszt_jo_vegpont() {
    /* meghívódik-e a fetch
    jó adatokat kapunk-e a végpontról */
    const modell = new Modell();
    /* mock adatokat gyártok, ezzel hívom meg a függvényt */
    let tesztJoVegpont = "http://fakestoreapi.com/products";
    const vart = {
        form_name: "",
        form_names: [],
        form_order: 1,
        id: 1,
        is_battle_only: false,
        is_default: true,
        is_mega: false,
        name: "bulbasaur",
        names: [],
        order: 1,
        pokemon: {
          name: "bulbasaur",
          url: "https://pokeapi.co/api/v2/pokemon/1/"
        },
        sprites: {
          back_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/1.png",
          back_female: null,
          back_shiny: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/1.png",
          back_shiny_female: null,
          front_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
          front_female: null,
          front_shiny: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/1.png",
          front_shiny_female: null
        },
        types: [
          {
            slot: 1,
            type: {
              name: "grass",
              url: "https://pokeapi.co/api/v2/type/12/"
            }
          },
          {
            slot: 2,
            type: {
              name: "poison",
              url: "https://pokeapi.co/api/v2/type/4/"
            }
          }
        ],
        version_group: {
          name: "red-blue",
          url: "https://pokeapi.co/api/v2/version-group/1/"
        }
      }

    modell.getAdat(tesztJoVegpont, tesztCallack, tesztHibaCallback);
    function tesztCallack(adat) {
        /* adat - lista */
        console.log("lefutott a fetch a jó végponttal");
        console.assert(JSON.stringify(adat[0]) === JSON.stringify(vart), "hibás adatot kaptunk a jó végpontra");
        console.log("lefutott a callback");
    }

    function tesztHibaCallback(adat) {
        /* itt kapom a hibaüzenetet */
        console.log(adat);
    }
}

getAdatTeszt_jo_vegpont();



function getAdatTeszt_nem_jo_vegpont() {
    /* meghívódik-e a fetch
    jó adatokat kapunk-e a végpontról */
    const modell = new Modell();
    /* mock adatokat gyártok, ezzel hívom meg a függvényt */
    let tesztJoVegpont = "http://fakestoreapi.com/nincsisolyan";
    const vart = {
        id: 1,
        title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
        price: 109.95,
        description: "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
        category: "men's clothing",
        image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
        rating: {
            rate: 3.9,
            count: 120
        }
    }

    modell.getAdat(tesztJoVegpont, tesztCallack, tesztHibaCallback);
    function tesztCallack(adat) {
        /* adat - lista */
        console.log("HIBA! nem ennek kellene meghívódnia, mert nincs ilyen végpont!");
    }

    function tesztHibaCallback(error) {
        /* itt kapom a hibaüzenetet */
        console.log("hiba: ", error);
    }
}

getAdatTeszt_nem_jo_vegpont();