namespace Memory {
  
  // Interface Kartenset
  export interface CardSet {
    name: string,
    minPairs: number,
    maxPairs: number,
    words: string[],
    cardSize: {cardWidth: number, cardHeight: number}
  }
  
  export interface CardSets {
    [name: string]: CardSet;
  }
  
  // Kartensets erzeugen und in cardSets speichern
  export let cardSets: CardSets = {
    "animals": {
      name: "animals",
      minPairs: 5,
      maxPairs: 10,
      words: ["Kuh", "Schaf", "Hund", "Katze", "Ente", "Ferkel", "Bär", "Reh", "Fisch", "Seelöwe"],
      cardSize: {cardWidth: 200, cardHeight: 200}
    },
    "nature": {
      name: "nature",
      minPairs: 4,
      maxPairs: 7,
      words: ["Gänseblume", "Rose", "Eiche", "Pinie", "Butterblume", "Brennessel", "Pappel",],
      cardSize: {cardWidth: 200, cardHeight: 200}
    },
    "coding": {
      name: "coding",
      minPairs: 6,
      maxPairs: 12,
      words: ["typescript", "HTML", "let", "if-else", "DOM Tree", "interface", "CSS", "switch-case", "do-while", "error", "try-catch", "function()"],
      cardSize: {cardWidth: 200, cardHeight: 200}
    }
  }
}