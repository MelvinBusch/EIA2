var Seaworld11;
(function (Seaworld11) {
    class Water {
        constructor(_y) {
            this.y = _y;
        }
        show() {
            Seaworld11.ctx.fillStyle = Seaworld11.createGradient("rgb(189, 232, 220)", "rgb(48, 84, 122)", this.y, Seaworld11.height);
            Seaworld11.ctx.beginPath();
            Seaworld11.ctx.moveTo(0, Seaworld11.height);
            Seaworld11.ctx.lineTo(0, this.y);
            for (let i = 0; i < Seaworld11.width; i++) {
                Seaworld11.ctx.lineTo(i, -7.5 * Math.sin(i * .08) + this.y);
            }
            Seaworld11.ctx.lineTo(Seaworld11.width, Seaworld11.height);
            Seaworld11.ctx.lineTo(0, Seaworld11.height);
            Seaworld11.ctx.fill();
            Seaworld11.ctx.closePath();
        }
    }
    Seaworld11.Water = Water;
})(Seaworld11 || (Seaworld11 = {}));
//# sourceMappingURL=Water.js.map