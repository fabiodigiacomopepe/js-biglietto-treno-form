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

// Collego evento a bottone
const bottone = document.getElementById("bottoneInvio");
bottone.addEventListener("click", miaFunzione);

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

    if (userEta < 18) { // sconto minorenni
        finalPrice = calcPrice - (calcPrice * 0.20);
        console.log("prezzo scontato 20% (poichè minorenne) =", finalPrice, "€");

    } else if (userEta > 65) { // sconto over 65
        finalPrice = calcPrice - (calcPrice * 0.40);
        console.log("prezzo scontato 40% (poichè over 65) =", finalPrice, "€");

    } else { // sconto (nullo) tra 18-65 anni
        finalPrice = calcPrice;
        console.log("prezzo senza sconto (poichè tra 18-65 anni) =", finalPrice, "€");
    }

    // Genero messaggio a schermo
    document.getElementById("mio_id").innerHTML = finalPrice.toFixed(2) + "€";
    document.getElementById("mostroNomePasseggero").innerHTML = userName;

}

