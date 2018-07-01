var Seaworld11;
(function (Seaworld11) {
    class Ground {
        constructor(_y) {
            this.y = _y;
        }
        show() {
            Seaworld11.ctx.fillStyle = Seaworld11.createGradient("rgb(153, 130, 100)", "rgb(116, 82, 43)", Seaworld11.height, this.y);
            Seaworld11.ctx.beginPath();
            Seaworld11.ctx.moveTo(0, Seaworld11.height);
            Seaworld11.ctx.lineTo(0, this.y);
            for (let i = 0; i < Seaworld11.width; i++) {
                Seaworld11.ctx.lineTo(i, 15 * Math.sin(i * .015) + this.y);
            }
            Seaworld11.ctx.lineTo(Seaworld11.width, Seaworld11.height);
            Seaworld11.ctx.lineTo(0, Seaworld11.height);
            Seaworld11.ctx.fill();
            Seaworld11.ctx.closePath();
        }
    }
    Seaworld11.Ground = Ground;
})(Seaworld11 || (Seaworld11 = {}));
//# sourceMappingURL=Ground.js.map