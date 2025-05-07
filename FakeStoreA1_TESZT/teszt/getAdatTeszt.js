import Modell from "../Modell.js"

function getAdatTeszt_jo_vegpont() {
    /* meghívódik-e a fetch
    jó adatokat kapunk-e a végpontról */
    const modell = new Modell();
    /* mock adatokat gyártok, ezzel hívom meg a függvényt */
    let tesztJoVegpont = "http://fakestoreapi.com/products";
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