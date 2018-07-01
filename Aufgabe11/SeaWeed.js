var Seaworld11;
(function (Seaworld11) {
    class SeaWeed {
        constructor(_x, _y, _l) {
            this.x = _x;
            this.y = _y;
            this.l = _l;
        }
        show() {
            Seaworld11.ctx.beginPath();
            Seaworld11.ctx.moveTo(this.x, this.y);
            for (let i = 0; i < this.l; i++) {
                Seaworld11.ctx.lineTo(Math.sin(i * .2) + this.x, -i + this.y);
            }
            Seaworld11.ctx.strokeStyle = "green";
            Seaworld11.ctx.stroke();
            Seaworld11.ctx.closePath();
        }
    }
    Seaworld11.SeaWeed = SeaWeed;
})(Seaworld11 || (Seaworld11 = {}));
//# sourceMappingURL=SeaWeed.js.map