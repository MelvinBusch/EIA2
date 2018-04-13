/*
Aufgabe: Nr.3 DynHTML - Memory
Name: Melvin Busch
Matrikel: 257169
Datum: 13.04.2018

Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/

namespace Memory {

  //Variablen deklarieren
  let words: string[] = ["Haus", "Baum", "Wolke", "Blume", "Hase", "Regenbogen", "Zwerg", "Sommer", "Katze", "Kekse"];

  let cards: HTMLElement[] = [];

  let numberCardPairs: number;
  let numberPlayers: number;

  let gameInfo: HTMLElement;
  let gameBoard: HTMLElement;

  // Klasse Karte
  class Card {

    cardContent: string;
    cardStatus: string;
    card: HTMLElement;

    constructor(_cardContent: string) {
      this.cardContent = _cardContent;

      /* zufälliger Kartenstatus generieren */
      let randomStatus: number = Math.random();
      if (randomStatus <= .5) {
        this.cardStatus = "hidden";
      } else if (randomStatus > .5 && randomStatus <= .75) {
        this.cardStatus = "taken";
      } else if (randomStatus > .75) {
        this.cardStatus = "visible";
      }
    }

    createCard(): HTMLElement[] {
      this.card = document.createElement("div");
      this.card.innerText = this.cardContent;
      this.card.setAttribute("class", "card " + this.cardStatus);
      cards.push(this.card);
      return cards;
    }
  }

  // Klasse Spieler
  class Player {

    score: number;
    name: string;
    player: HTMLElement;

    constructor(_name: string) {
      this.name = _name;
      this.score = 0;
    }

    scoreUp(): number {
      this.score += 10;
      return this.score;
    }

    show(): void {
      this.player = document.createElement("div");
      this.player.innerHTML = `
        <span class="player-name">${this.name}</span>
        <span class="player-score">Punkte: ${this.score}</span>`;
      gameInfo.appendChild(this.player);
    }
  }

  // Shuffle Array: Fisher-Yates Algorhitmus
  function shuffleArray(_array: any[]): any[] {
    for (let i: number = _array.length - 1; i > 0; i--) {
      const j: number = Math.floor(Math.random() * (i + 1));
      [_array[i], _array[j]] = [_array[j], _array[i]];
    }
    return _array;
  }

  function main(): void {
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
    for (let i: number = 0; i < numberCardPairs; i++) {
      let card: Card = new Card(words[i]);
      card.createCard();

      let pair: Card = new Card(words[i]);
      pair.createCard();
    }

    // Karten mischen
    shuffleArray(cards);

    // Karten anzeigen
    for (let i: number = 0; i < cards.length; i++) {
      gameBoard.appendChild(cards[i]);
    }

    // Spieler Anzeige generieren
    for (let i: number = 0; i < numberPlayers; i++) {
      let player: Player = new Player("Spieler " + (i + 1));
      player.show();
    }

  }
  document.addEventListener("DOMContentLoaded", main);
}
