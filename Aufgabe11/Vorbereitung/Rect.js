var L11_Inheritance;
(function (L11_Inheritance) {
    class Rect extends L11_Inheritance.DavidStar {
        constructor(_color) {
            super(_color);
        }
        draw() {
            L11_Inheritance.crc2.fillStyle = this.color;
            L11_Inheritance.crc2.fillRect(this.x - 20, this.y - 20, 40, 40);
        }
    }
    L11_Inheritance.Rect = Rect;
})(L11_Inheritance || (L11_Inheritance = {}));
//# sourceMappingURL=Rect.js.map