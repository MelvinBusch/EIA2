namespace Memory {
  //const playerCount: string = prompt("Anzahl der Spieler eingeben:", "2 - 4 Spieler");
  const cardPairs: number = 3; //prompt("Anzahl der Kartenpaare", "2 - 6 Kartenpaare");
  let cards: HTMLElement[] = [];
  let words: string[] = [];

  class MemoryCard {

    id: number;

    constructor(id: number) {
      this.id = id;
    }
    init() {
      let card: HTMLElement = document.createElement("div");

      cards.push(card);
    }
    isTaken() { }
    isHidden() { }
    isOpen() { }
  }

  for (let i: number = 0; i < cardPairs * 2; i++) {
    let card: MemoryCard = new MemoryCard(i);
    card.init();
  }

  console.log(cards);

  function shuffleArray(): void {

  }
}
