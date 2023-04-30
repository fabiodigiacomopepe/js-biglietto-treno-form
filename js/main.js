/*  RICHIESTA
Il programma dovrà chiedere all’utente
    -il numero di chilometri che vuole percorrere
    -l’età del passeggero

Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio,
secondo queste regole:
    -il prezzo del biglietto è definito in base ai km (0.21 € al km)
    -va applicato uno sconto del 20% per i minorenni
    -va applicato uno sconto del 40% per gli over 65

L’output del prezzo finale va messo fuori in forma umana
(con massimo due decimali, per indicare centesimi sul prezzo) */


// Dichiaro le mie variabili GLOBALI
let userName, howKm, userEta, calcPrice, finalPrice;

// Collego evento a bottone INVIO
const bottoneInvio = document.getElementById("bottoneInvio");
bottoneInvio.addEventListener("click", miaFunzione);

// Evento collegato al click del bottone
function miaFunzione() {

    // Chiedo nome passeggero
    userName = document.getElementById("nomePasseggero").value;
    
    // Chiedo quanti km vuole percorrere l'utente
    howKm = document.getElementById("howKm").value;

    // Chiedo età dell'utente
    userEta = document.getElementById("userEta").value;

    // Fisso prezzo al km
    const euroKm = 0.21;

    // Calcolo prezzo finale
    calcPrice = howKm * euroKm;

    if (userEta === "minorenne") { // sconto minorenni
        finalPrice = calcPrice - (calcPrice * 0.20);
        console.log("prezzo scontato 20% (poichè minorenne) =", finalPrice, "€");
        document.getElementById("tipologiaBiglietto").innerHTML = "Sconto minorenni";

    } else if (userEta === "old") { // sconto over 65
        finalPrice = calcPrice - (calcPrice * 0.40);
        console.log("prezzo scontato 40% (poichè over 65) =", finalPrice, "€");
        document.getElementById("tipologiaBiglietto").innerHTML = "Sconto over 65";

    } else { // sconto (nullo) tra 18-65 anni
        finalPrice = calcPrice;
        console.log("prezzo senza sconto (poichè tra 18-65 anni) =", finalPrice, "€");
        document.getElementById("tipologiaBiglietto").innerHTML = "Tariffa standard";
    }

    // Genero messaggio a schermo

    const prezzoBarrato = document.querySelector("h4#prezzoBarrato");

    if (userEta === "minorenne" || userEta === "old") { // sconto minorenni
        document.getElementById("prezzo").innerHTML = finalPrice.toFixed(2) + "€";
        document.getElementById("prezzoBarrato").innerHTML = calcPrice.toFixed(2) + "€";
        prezzoBarrato.className = "add";
    } else {
        document.getElementById("prezzo").innerHTML = finalPrice.toFixed(2) + "€";
        prezzoBarrato.className = "remove";
    }

    document.getElementById("mostroNomePasseggero").innerHTML = userName;

}

// Collego evento a bottone RESETTA
const bottoneResetta = document.getElementById("bottoneResetta");
bottoneResetta.addEventListener("click", resettaTutto);

// Evento collegato al click del bottone
function resettaTutto() {
    history.go(0);
}