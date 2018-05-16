/*
Aufgabe: Nr.3 DynHTML - Memory
Name: Melvin Busch
Matrikel: 257169
Datum: 18.04.2018

Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/
var Memory;
(function (Memory) {
    //Variablen deklarieren
    let words = ["Haus", "Baum", "Wolke", "Blume", "Hase", "Regenbogen", "Zwerg", "Sommer", "Katze", "Kekse"];
    let cards = [];
    let numberCardPairs;
    let numberPlayers;
    let gameInfo;
    let gameBoard;
    let numCardsOpen = 0;
    let openCards = [];
    let allowed = true;
    // Karten erzeugen
    function createCards(_cardContent) {
        for (let i = 0; i < 2; i++) {
            let card = document.createElement("div");
            card.innerHTML = `<span>${_cardContent}</span>`;
            card.setAttribute("class", "card hidden");
            cards.push(card);
        }
        return cards;
    }
    // Spieler erzeugen
    function createPlayer(_name) {
        let player = document.createElement("div");
        player.innerHTML = `
      <span class="player-name">Spieler: ${_name}</span>
      <span class="player-score">Punkte: 0</span>`;
        gameInfo.appendChild(player);
    }
    // Shuffle Array: Fisher-Yates Algorhitmus
    function shuffleArray(_array) {
        for (let i = _array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [_array[i], _array[j]] = [_array[j], _array[i]];
        }
        return _array;
    }
    // Karte aufdecken
    function showCards(_event) {
        let target = _event.target;
        if (target.classList.contains("hidden") && target.classList.contains("card") && allowed) {
            if (numCardsOpen < 2 && target != openCards[0]) {
                numCardsOpen++;
                target.classList.remove("hidden");
                target.classList.add("visible");
                openCards.push(target);
            }
            if (numCardsOpen == 2) {
                allowed = false;
                setTimeout(compareCards, 1500);
            }
        }
    }
    // Cards Array filtern und neues Array zurückgeben
    function filterCardsBy(_filter) {
        return cards.filter(card => card.classList.contains(_filter));
    }
    function compareCards() {
        /* let openCards: HTMLElement[] = filterCardsBy("visible");
        //console.log(openCards); */
        if (openCards[0].children[0].innerHTML == openCards[1].children[0].innerHTML) {
            for (let i = 0; i < openCards.length; i++) {
                openCards[i].classList.remove("visible");
                openCards[i].classList.add("taken");
            }
        }
        else {
            for (let i = 0; i < openCards.length; i++) {
                openCards[i].classList.remove("visible");
                openCards[i].classList.add("hidden");
            }
        }
        checkVictory();
        numCardsOpen = 0;
        openCards = [];
        allowed = true;
    }
    function checkVictory() {
        let takenCards = filterCardsBy("hidden");
        if (takenCards.length == 0) {
            alert("Gratulation! Du hast gewonnen");
        }
        takenCards = [];
    }
    function main() {
        // Anzahl der Kartenpaare erfragen
        numberCardPairs = parseInt(prompt("Bitte die Anzahl der Kartenpaare eingeben", "5 - 10 Kartenpaare"), 10);
        if (numberCardPairs < 5 || numberCardPairs > 10) {
            numberCardPairs = 8;
        }
        // Anzahl der Spieler erfragen
        numberPlayers = parseInt(prompt("Bitte die Anzahl der Spieler eingeben", "nicht mehr als 4 Spieler"), 10);
        if (numberPlayers < 0 || numberPlayers > 4) {
            numberPlayers = 2;
        }
        // DOM abhängige Variablen initialisieren
        gameInfo = document.getElementById("game-info");
        gameBoard = document.getElementById("card-container");
        // Karten erzeugen
        for (let i = 0; i < numberCardPairs; i++) {
            createCards(words[i]);
        }
        // Karten mischen
        shuffleArray(cards);
        // Karten anzeigen
        for (let i = 0; i < cards.length; i++) {
            gameBoard.appendChild(cards[i]);
        }
        // Spieler Anzeige generieren
        for (let i = 0; i < numberPlayers; i++) {
            createPlayer(`${i + 1}`);
        }
        // Spielmechanik
        gameBoard.addEventListener("click", showCards);
    }
    document.addEventListener("DOMContentLoaded", main);
})(Memory || (Memory = {}));
//# sourceMappingURL=memory.js.map