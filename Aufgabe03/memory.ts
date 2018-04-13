namespace Memory {

  let words: string[] = ["Haus", "Baum", "Wolke", "Blume", "Hase", "Regenbogen", "Zwerg", "Sommer"];
  let players: number;
  let cards: HTMLElement[] = [];
  let cardPairs: number;

  class Card {

    cardContent: string;
    cardStatus: string;
    card: HTMLElement;

    constructor(_cardContent: string, _cardStatus: string) {
      this.cardContent = _cardContent;
      this.cardStatus = _cardStatus;
    }

    createCard(): HTMLElement {
      this.card = document.createElement("div");
      this.card.innerText = this.cardContent;
      return this.card;
    }
  }

  function main(): void {
    console.log("Hallo");
    let card: Card = new Card("Haus", "hidden");
  }

  document.addEventListener("DOMContentLoaded", main);
}
