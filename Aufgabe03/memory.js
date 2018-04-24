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
    var words = ["Haus", "Baum", "Wolke", "Blume", "Hase", "Regenbogen", "Zwerg", "Sommer", "Katze", "Kekse"];
    var cards = [];
    var numberCardPairs;
    var numberPlayers;
    var gameInfo;
    var gameBoard;
    var numCardsOpen = 0;
    var openCards = [];
    // Karten erzeugen
    function createCards(_cardContent) {
        for (var i = 0; i < 2; i++) {
            var card = document.createElement("div");
            card.innerHTML = "<span>" + _cardContent + "</span>";
            card.setAttribute("class", "card hidden");
            cards.push(card);
        }
        return cards;
    }
    // Spieler erzeugen
    function createPlayer(_name) {
        var player = document.createElement("div");
        player.innerHTML = "\n      <span class=\"player-name\">Spieler: " + _name + "</span>\n      <span class=\"player-score\">Punkte: 0</span>";
        gameInfo.appendChild(player);
    }
    // Shuffle Array: Fisher-Yates Algorhitmus
    function shuffleArray(_array) {
        for (var i = _array.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            _a = [_array[j], _array[i]], _array[i] = _a[0], _array[j] = _a[1];
        }
        return _array;
        var _a;
    }
    // Karte aufdecken
    function showCards(_event) {
        var target = _event.target;
        if (target.classList.contains("card")) {
            numCardsOpen++;
            if (!(numCardsOpen > 2) && target.classList.contains("hidden") && target != openCards[0]) {
                target.classList.remove("hidden");
                target.classList.add("visible");
                openCards.push(target);
            }
            else {
                numCardsOpen--;
            }
            if (numCardsOpen == 2) {
                setTimeout(compareCards, 1500);
            }
        }
    }
    // Cards Array filtern und neues Array zurückgeben
    function filterCardsBy(_filter) {
        return cards.filter(function (card) { return card.classList.contains(_filter); });
    }
    function compareCards() {
        /* let openCards: HTMLElement[] = filterCardsBy("visible");
        //console.log(openCards); */
        if (openCards[0].children[0].innerHTML == openCards[1].children[0].innerHTML) {
            for (var i = 0; i < openCards.length; i++) {
                openCards[i].classList.remove("visible");
                openCards[i].classList.add("taken");
            }
        }
        else {
            for (var i = 0; i < openCards.length; i++) {
                openCards[i].classList.remove("visible");
                openCards[i].classList.add("hidden");
            }
        }
        checkVictory();
        openCards = [];
        numCardsOpen = 0;
    }
    function checkVictory() {
        var takenCards = filterCardsBy("hidden");
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
        for (var i = 0; i < numberCardPairs; i++) {
            createCards(words[i]);
        }
        // Karten mischen
        shuffleArray(cards);
        // Karten anzeigen
        for (var i = 0; i < cards.length; i++) {
            gameBoard.appendChild(cards[i]);
        }
        // Spieler Anzeige generieren
        for (var i = 0; i < numberPlayers; i++) {
            createPlayer("" + (i + 1));
        }
        // Spielmechanik
        gameBoard.addEventListener("click", showCards);
    }
    document.addEventListener("DOMContentLoaded", main);
})(Memory || (Memory = {}));
