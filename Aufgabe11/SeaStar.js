var Seaworld11;
(function (Seaworld11) {
    class SeaStar {
        constructor(_x, _y, _s) {
            this.x = _x;
            this.y = _y;
            this.s = _s;
        }
        show() {
            Seaworld11.ctx.moveTo(this.x, this.y);
            Seaworld11.ctx.beginPath();
            Seaworld11.ctx.fillStyle = "pink";
            for (let a = 0; a < 2 * Math.PI; a += .01) {
                let r = this.s * Math.cos(a * 5);
                let x = r * Math.cos(a);
                let y = r * Math.sin(a);
                Seaworld11.ctx.lineTo(x + this.x, y + this.y);
            }
            Seaworld11.ctx.fill();
            Seaworld11.ctx.closePath();
        }
    }
    Seaworld11.SeaStar = SeaStar;
})(Seaworld11 || (Seaworld11 = {}));
//# sourceMappingURL=SeaStar.js.map