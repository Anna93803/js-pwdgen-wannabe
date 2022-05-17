
// Chiedi all'utente il suo nome
let nomeUtente = prompt("Inserisci il tuo nome");
// Eseguo un ciclo while per controllare che l'utente non lasci il campo vuoto
while (nomeUtente == "") {
    alert("Attenzione!! Inserisci il tuo nome");
    nomeUtente = prompt("Inserisci il tuo nome");
}


// Chiedi all'utente il suo cognome
let cognomeUtente = prompt("Inserisci il tuo cognome");
// Eseguo un ciclo while per controllare che l'utente non lasci il campo vuoto
while (cognomeUtente == "") {
    alert("Attenzione!! Inserisci il tuo cognome");
    cognomeUtente = prompt("Inserisci il tuo cognome");
}


// Chiedo all'utente il suo colore preferito
let colorePreferito = prompt("Inserisci il tuo colore preferito");
// Eseguo un ciclo while per controllare che l'utente non lasci il campo vuoto
while (colorePreferito == "") {
    alert("Attenzione!! Inserisci il tuo colore preferito");
    colorePreferito = prompt("Inserisci il tuo colore preferito");
}


// Infine scrivi sulla pagine nomecognomecolore22
const passGenerata = document.getElementById("password");
passGenerata.innerHTML = ` ${nomeUtente}${cognomeUtente}${colorePreferito}22`;

