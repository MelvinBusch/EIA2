var Memory;
(function (Memory) {
    var words = ["Haus", "Baum", "Wolke", "Blume", "Hase", "Regenbogen", "Zwerg", "Sommer"];
    var players;
    var cards = [];
    var cardPairs;
    var Card = /** @class */ (function () {
        function Card(_cardContent, _cardStatus) {
            this.cardContent = _cardContent;
            this.cardStatus = _cardStatus;
        }
        Card.prototype.createCard = function () {
            this.card = document.createElement("div");
            this.card.innerText = this.cardContent;
            return this.card;
        };
        return Card;
    }());
    function main() {
        console.log("Hallo");
        var card = new Card("Haus", "hidden");
    }
    document.addEventListener("DOMContentLoaded", main);
})(Memory || (Memory = {}));
