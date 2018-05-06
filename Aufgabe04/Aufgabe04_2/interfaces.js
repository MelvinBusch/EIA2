var Memory;
(function (Memory) {
    // Kartensets erzeugen und in cardSets speichern
    Memory.cardSets = {
        "animals": {
            name: "animals",
            minPairs: 5,
            maxPairs: 10,
            words: ["Kuh", "Schaf", "Hund", "Katze", "Ente", "Ferkel", "Bär", "Reh", "Fisch", "Seelöwe"],
            cardSize: { cardWidth: 200, cardHeight: 200 }
        },
        "nature": {
            name: "nature",
            minPairs: 4,
            maxPairs: 7,
            words: ["Gänseblume", "Rose", "Eiche", "Pinie", "Butterblume", "Brennessel", "Pappel",],
            cardSize: { cardWidth: 200, cardHeight: 200 }
        },
        "coding": {
            name: "coding",
            minPairs: 6,
            maxPairs: 12,
            words: ["typescript", "HTML", "let", "if-else", "DOM Tree", "interface", "CSS", "switch-case", "do-while", "error", "try-catch", "function()"],
            cardSize: { cardWidth: 200, cardHeight: 200 }
        }
    };
})(Memory || (Memory = {}));
//# sourceMappingURL=interfaces.js.map