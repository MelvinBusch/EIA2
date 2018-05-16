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
    let words = [];
    let cards = [];
    let numberCardPairs;
    let numberPlayers = 0;
    let gameInfo;
    let gameBoard;
    let numCardsOpen = 0;
    let openCards = [];
    let allowed = true;
    let playerInputContainer;
    let playerInputs;
    let slider;
    let select;
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
    // dynamische Eingabefelder erzeugen
    function addPlayerInput(event) {
        if (numberPlayers < 4) {
            let input = document.createElement("input");
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
        let gameInit = document.getElementById("game-init");
        let gameFormSubmit = document.getElementById("submit");
        let inputs = document.getElementsByTagName("input");
        // dynamisches HTML Formular
        let addPlayerButton = document.getElementById("addPlayerInput");
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
                for (let i = 0; i < playerInputs.length; i++) {
                    if (playerInputs[i].value != "") {
                        createPlayer(playerInputs[i].value);
                    }
                }
                // Karten erzeugen
                for (let i = 0; i < parseInt(slider.value); i++) {
                    createCards(words[i]);
                }
                // Karten mischen
                shuffleArray(cards);
                // Karten anzeigen
                for (let i = 0; i < cards.length; i++) {
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