var Memory;
(function(Memory) {
  //const playerCount: string = prompt("Anzahl der Spieler eingeben:", "2 - 4 Spieler");
  var cardPairs = 3; //prompt("Anzahl der Kartenpaare", "2 - 6 Kartenpaare");
  var cards = [];
  var words = [];
  var MemoryCard = /** @class */ (function() {
    function MemoryCard(id) {
      this.id = id;
    }
    MemoryCard.prototype.init = function() {
      var card = document.createElement("div");
      cards.push(card);
    };
    MemoryCard.prototype.isTaken = function() {};
    MemoryCard.prototype.isHidden = function() {};
    MemoryCard.prototype.isOpen = function() {};
    return MemoryCard;
  }());
  for (var i = 0; i < cardPairs * 2; i++) {
    var card = new MemoryCard(i);
    card.init();
  }
  console.log(cards);

  function shuffleArray() {}
})(Memory || (Memory = {}));