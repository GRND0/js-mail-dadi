//Lanciatore di d6
//d6 IA
let giocatoreIa = Math.floor((Math.random() * 6) + 1);
console.log(giocatoreIa);
//d6 Umano
let giocatoreUmano = Math.floor((Math.random() * 6) + 1);
console.log(giocatoreUmano);
//Stampa in console del vincitore
let vincitore = "";
if (giocatoreIa > giocatoreUmano) {
    vincitore = "Vince il computer";
}
else { vincitore = "Vince l'utente" }
console.log(vincitore);
