var L11_Inheritance;
(function (L11_Inheritance) {
    class Circle extends L11_Inheritance.DavidStar {
        constructor(_color) {
            super(_color);
        }
        move() {
            this.x += 1;
            if (this.x > L11_Inheritance.crc2.canvas.width)
                this.x = 0;
        }
        draw() {
            L11_Inheritance.crc2.fillStyle = this.color;
            L11_Inheritance.crc2.moveTo(this.x, this.y);
            L11_Inheritance.crc2.beginPath();
            L11_Inheritance.crc2.arc(this.x, this.y, 10, 0, 2 * Math.PI);
            L11_Inheritance.crc2.closePath();
            L11_Inheritance.crc2.fill();
        }
    }
    L11_Inheritance.Circle = Circle;
})(L11_Inheritance || (L11_Inheritance = {}));
//# sourceMappingURL=Circle.js.map