var Seaworld11;
(function (Seaworld11) {
    class Bubble extends Seaworld11.Creature {
        constructor(_x, _y) {
            super(_x, _y);
            this.radius = 0;
        }
        update() {
            this.y -= Math.random() * 2;
            this.radius += Math.random() * .2;
            if (this.radius > 5) {
                this.y = Math.random() * Seaworld11.height * .8 + Seaworld11.height * .2;
                this.radius = 0;
            }
        }
        show() {
            Seaworld11.ctx.moveTo(this.x, this.y);
            Seaworld11.ctx.fillStyle = "lightblue";
            Seaworld11.ctx.beginPath();
            Seaworld11.ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
            Seaworld11.ctx.fill();
            Seaworld11.ctx.closePath();
        }
    }
    Seaworld11.Bubble = Bubble;
})(Seaworld11 || (Seaworld11 = {}));
//# sourceMappingURL=Bubble.js.map