/*
Aufgabe: Nr.3 DynHTML - Memory
Name: Melvin Busch
Matrikel: 257169
Datum: 13.04.2018

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
    // Klasse Karte
    var Card = /** @class */ (function () {
        function Card(_cardContent) {
            this.cardContent = _cardContent;
            /* zufälliger Kartenstatus generieren */
            var randomStatus = Math.random();
            if (randomStatus <= .5) {
                this.cardStatus = "hidden";
            }
            else if (randomStatus > .5 && randomStatus <= .75) {
                this.cardStatus = "taken";
            }
            else if (randomStatus > .75) {
                this.cardStatus = "visible";
            }
        }
        Card.prototype.createCard = function () {
            this.card = document.createElement("div");
            this.card.innerText = this.cardContent;
            this.card.setAttribute("class", "card " + this.cardStatus);
            cards.push(this.card);
            return cards;
        };
        return Card;
    }());
    // Klasse Spieler
    var Player = /** @class */ (function () {
        function Player(_name) {
            this.name = _name;
            this.score = 0;
        }
        Player.prototype.scoreUp = function () {
            this.score += 10;
            return this.score;
        };
        Player.prototype.show = function () {
            this.player = document.createElement("div");
            this.player.innerHTML = "\n        <span class=\"player-name\">" + this.name + "</span>\n        <span class=\"player-score\">Punkte: " + this.score + "</span>";
            gameInfo.appendChild(this.player);
        };
        return Player;
    }());
    // Shuffle Array: Fisher-Yates Algorhitmus
    function shuffleArray(_array) {
        for (var i = _array.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            _a = [_array[j], _array[i]], _array[i] = _a[0], _array[j] = _a[1];
        }
        return _array;
        var _a;
    }
    function main() {
        // Anzahl der Kartenpaare erfragen
        numberCardPairs = parseInt(prompt("Bitte die Anzahl der Kartenpaare eingeben", "5 - 10 Kartenpaare"), 10);
        if (numberCardPairs < 5 || numberCardPairs > 10) {
            numberCardPairs = 8;
        }
        // Anzahl der Spieler erfragen
        numberPlayers = parseInt(prompt("Bitte die Anzahl der Spieler eingeben", "nicht mehr als 4 Spieler"), 10);
        numberPlayers > 4 ? numberPlayers = 4 : numberPlayers = numberPlayers;
        // DOM abhängige Variablen initialisieren
        gameInfo = document.getElementById("game-info");
        gameBoard = document.getElementById("card-container");
        // Karten erzeugen
        for (var i = 0; i < numberCardPairs; i++) {
            var card = new Card(words[i]);
            card.createCard();
            var pair = new Card(words[i]);
            pair.createCard();
        }
        // Karten mischen
        shuffleArray(cards);
        // Karten anzeigen
        for (var i = 0; i < cards.length; i++) {
            gameBoard.appendChild(cards[i]);
        }
        // Spieler Anzeige generieren
        for (var i = 0; i < numberPlayers; i++) {
            var player = new Player("Spieler " + (i + 1));
            player.show();
        }
    }
    document.addEventListener("DOMContentLoaded", main);
})(Memory || (Memory = {}));
