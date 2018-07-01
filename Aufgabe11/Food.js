var Seaworld11;
(function (Seaworld11) {
    class Food extends Seaworld11.Creature {
        constructor(_x, _y) {
            super(_x, _y);
            this.target = Math.random() * 80 + (Seaworld11.height - 80);
            this.speed = Math.random() * 2 + 1;
        }
        update() {
            this.y += this.speed;
            if (this.y > this.target)
                this.y = this.target;
        }
        show() {
            Seaworld11.ctx.fillStyle = "brown";
            Seaworld11.ctx.moveTo(this.x, this.y);
            Seaworld11.ctx.beginPath();
            Seaworld11.ctx.arc(this.x, this.y, 5, 0, 2 * Math.PI);
            Seaworld11.ctx.closePath();
            Seaworld11.ctx.fill();
        }
    }
    Seaworld11.Food = Food;
})(Seaworld11 || (Seaworld11 = {}));
//# sourceMappingURL=Food.js.map