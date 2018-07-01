var Seaworld11;
(function (Seaworld11) {
    class Fish extends Seaworld11.Creature {
        constructor(_x, _y, _speed) {
            super(_x, _y);
            this.speed = _speed;
        }
        update() {
            this.x += this.speed * -0.1;
            if (this.x < 0)
                this.x = Seaworld11.width + 10;
        }
        show() {
            Seaworld11.ctx.beginPath();
            Seaworld11.ctx.moveTo(this.x, this.y);
            Seaworld11.ctx.bezierCurveTo(this.x - 20, this.y - 20, this.x - 20, this.y + 20, this.x, this.y);
            Seaworld11.ctx.lineTo(this.x + 5, this.y - 5);
            Seaworld11.ctx.lineTo(this.x + 5, this.y + 5);
            Seaworld11.ctx.lineTo(this.x, this.y);
            Seaworld11.ctx.fillStyle = "blue";
            Seaworld11.ctx.fill();
            Seaworld11.ctx.closePath();
        }
    }
    Seaworld11.Fish = Fish;
})(Seaworld11 || (Seaworld11 = {}));
//# sourceMappingURL=Fish.js.map