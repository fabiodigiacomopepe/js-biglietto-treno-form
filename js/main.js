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
let howKm, userEta, calcPrice, finalPrice, messaggio;

// Chiedo quanti km vuole percorrere l'utente
howKm = parseInt(prompt("Quanti km vuoi percorrere?"));

// Chiedo età dell'utente
userEta = parseInt(prompt("Quanti anni hai?"));

console.log("km da percorrere =", howKm, "/ età =", userEta);

// Fisso prezzo al km
const euroKm = 0.21;

// Calcolo prezzo finale
calcPrice = howKm * euroKm;

if (userEta < 18) { // sconto minorenni
    finalPrice = calcPrice - (calcPrice * 0.20);
    console.log("prezzo scontato 20% (poichè minorenne) =", finalPrice, "€");
    messaggio = "Complimenti: poichè minorenne hai ottenuto uno sconto del 20% e quindi il prezzo finale è " + finalPrice.toFixed(2) + "€ e non " + calcPrice.toFixed(2) + "€";


} else if (userEta > 65) { // sconto over 65
    finalPrice = calcPrice - (calcPrice * 0.40);
    console.log("prezzo scontato 40% (poichè over 65) =", finalPrice, "€");
    messaggio = "Uno sconto giusto per il vetusto. 40% sul prezzo finale, che sarà quindi di " + finalPrice.toFixed(2) + "€ e non " + calcPrice.toFixed(2) + "€";

} else { // sconto (nullo) tra 18-65 anni
    finalPrice = calcPrice;
    console.log("prezzo senza sconto (poichè tra 18-65 anni) =", finalPrice, "€");
    messaggio = "Mi dispiace, ma paghi prezzo pieno. Il prezzo finale è " + finalPrice.toFixed(2) + "€";
}

// Mostro il  messaggio a schermo
document.getElementById("mio_id").innerHTML = messaggio;