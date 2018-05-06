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
    var words = [];
    var cards = [];
    var numberCardPairs;
    var numberPlayers = 0;
    var gameInfo;
    var gameBoard;
    var numCardsOpen = 0;
    var openCards = [];
    var allowed = true;
    var playerInputContainer;
    var playerInputs;
    var slider;
    var select;
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
        numCardsOpen = 0;
        openCards = [];
        allowed = true;
    }
    function checkVictory() {
        var takenCards = filterCardsBy("hidden");
        if (takenCards.length == 0) {
            alert("Gratulation! Du hast gewonnen");
        }
        takenCards = [];
    }
    // dynamische Eingabefelder erzeugen
    function addPlayerInput(event) {
        if (numberPlayers < 4) {
            var input = document.createElement("input");
            input.setAttribute("type", "text");
            input.setAttribute("placeholder", "Spielername");
            playerInputContainer.appendChild(input);
            numberPlayers++;
        }
        else {
            alert("Maximale Anzahl an Spielern erreicht!");
        }
        console.log(playerInputs);
    }
    // min & max Werte des Sliders aktualisieren
    function updateSlider(event) {
        slider.attributes[2].value = Memory.cardSets[select.value].minPairs.toString();
        slider.attributes[3].value = Memory.cardSets[select.value].maxPairs.toString();
    }
    function main() {
        // DOM abhängige Variablen initialisieren
        gameInfo = document.getElementById("game-info");
        gameBoard = document.getElementById("card-container");
        var gameInit = document.getElementById("game-init");
        var gameFormSubmit = document.getElementById("submit");
        var inputs = document.getElementsByTagName("input");
        // dynamisches HTML Formular
        var addPlayerButton = document.getElementById("addPlayerInput");
        playerInputContainer = document.getElementById("players");
        slider = document.querySelector("input[type=range]");
        select = document.getElementsByTagName("select")[0];
        playerInputs = playerInputContainer.getElementsByTagName("input");
        addPlayerButton.addEventListener("click", addPlayerInput);
        select.addEventListener("change", updateSlider);
        // Spiel generieren
        gameFormSubmit.addEventListener("click", function () {
            words = Memory.cardSets[select.value].words;
            // Spieler Anzeige generieren
            if (playerInputs[0].value != "") {
                for (var i = 0; i < playerInputs.length; i++) {
                    if (playerInputs[i].value != "") {
                        createPlayer(playerInputs[i].value);
                    }
                }
                // Karten erzeugen
                for (var i = 0; i < parseInt(slider.value); i++) {
                    createCards(words[i]);
                }
                // Karten mischen
                shuffleArray(cards);
                // Karten anzeigen
                for (var i = 0; i < cards.length; i++) {
                    gameBoard.appendChild(cards[i]);
                }
                gameInit.style.display = "none";
            }
            else {
                alert("Bitte mindestens einen Spieler angeben!");
            }
        });
        // Spielmechanik
        gameBoard.addEventListener("click", showCards);
    }
    document.addEventListener("DOMContentLoaded", main);
})(Memory || (Memory = {}));
//# sourceMappingURL=memory.js.map