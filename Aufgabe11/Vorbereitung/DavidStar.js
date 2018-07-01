var L11_Inheritance;
(function (L11_Inheritance) {
    class DavidStar {
        constructor(_color) {
            this.setRandomPosition();
            this.color = _color;
        }
        setRandomPosition() {
            this.x = Math.random() * L11_Inheritance.crc2.canvas.width;
            this.y = Math.random() * L11_Inheritance.crc2.canvas.height;
        }
        move() {
            this.x += Math.random() * 4 - 2;
            this.y += Math.random() * 4 - 2;
        }
        draw() {
            L11_Inheritance.crc2.beginPath();
            L11_Inheritance.crc2.moveTo(this.x, this.y - 20);
            L11_Inheritance.crc2.lineTo(this.x + 20, this.y + 10);
            L11_Inheritance.crc2.lineTo(this.x - 20, this.y + 10);
            L11_Inheritance.crc2.closePath();
            L11_Inheritance.crc2.moveTo(this.x, this.y + 20);
            L11_Inheritance.crc2.lineTo(this.x + 20, this.y - 10);
            L11_Inheritance.crc2.lineTo(this.x - 20, this.y - 10);
            L11_Inheritance.crc2.closePath();
            L11_Inheritance.crc2.fillStyle = this.color;
            L11_Inheritance.crc2.stroke();
            L11_Inheritance.crc2.fill();
        }
    }
    L11_Inheritance.DavidStar = DavidStar;
})(L11_Inheritance || (L11_Inheritance = {}));
//# sourceMappingURL=DavidStar.js.map