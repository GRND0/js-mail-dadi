//Prompt inserimento mail utente
let mailUtente = prompt("Inserisci la tua email");
//Array whitelist
const listaIndirizzi = ["mail@gmail0.com", "mail@gmail1.com", "mail@gmail2.com", "mail@gmail3.com"];
console.log(listaIndirizzi.length);
console.log(listaIndirizzi[1]);
//Codice per eseguire il controllo whitelist
let utenteRiconosciuto = false;
for (let i = 0; i < listaIndirizzi.length; i++) {
    const singoloIndirizzo = listaIndirizzi[i];
    console.log(singoloIndirizzo);
    if (singoloIndirizzo === mailUtente) {
        utenteRiconosciuto = true;
    }
}
//Stampa risultato controllo
if (utenteRiconosciuto === true) {
    console.log("Utente autorizzato")
} else {
    console.log("Utente non autorizzato");
}



