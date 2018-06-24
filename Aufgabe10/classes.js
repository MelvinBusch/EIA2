var Seaworld;
(function (Seaworld) {
    // Wasser
    class Water {
        constructor(_y) {
            this.y = _y;
        }
        show() {
            Seaworld.ctx.fillStyle = createGradient("rgb(189, 232, 220)", "rgb(48, 84, 122)", this.y, Seaworld.height);
            Seaworld.ctx.beginPath();
            Seaworld.ctx.moveTo(0, Seaworld.height);
            Seaworld.ctx.lineTo(0, this.y);
            for (let i = 0; i < Seaworld.width; i++) {
                Seaworld.ctx.lineTo(i, -7.5 * Math.sin(i * .08) + this.y);
            }
            Seaworld.ctx.lineTo(Seaworld.width, Seaworld.height);
            Seaworld.ctx.lineTo(0, Seaworld.height);
            Seaworld.ctx.fill();
            Seaworld.ctx.closePath();
        }
    }
    Seaworld.Water = Water;
    // Boden
    class Ground {
        constructor(_y) {
            this.y = _y;
        }
        show() {
            Seaworld.ctx.fillStyle = createGradient("rgb(153, 130, 100)", "rgb(116, 82, 43)", Seaworld.height, this.y);
            Seaworld.ctx.beginPath();
            Seaworld.ctx.moveTo(0, Seaworld.height);
            Seaworld.ctx.lineTo(0, this.y);
            for (let i = 0; i < Seaworld.width; i++) {
                Seaworld.ctx.lineTo(i, 15 * Math.sin(i * .015) + this.y);
            }
            Seaworld.ctx.lineTo(Seaworld.width, Seaworld.height);
            Seaworld.ctx.lineTo(0, Seaworld.height);
            Seaworld.ctx.fill();
            Seaworld.ctx.closePath();
        }
    }
    Seaworld.Ground = Ground;
    // Seegras
    class SeaWeed {
        constructor(_x, _y, _l) {
            this.x = _x;
            this.y = _y;
            this.l = _l;
        }
        show() {
            Seaworld.ctx.beginPath();
            Seaworld.ctx.moveTo(this.x, this.y);
            for (let i = 0; i < this.l; i++) {
                Seaworld.ctx.lineTo(Math.sin(i * .2) + this.x, -i + this.y);
            }
            Seaworld.ctx.strokeStyle = "green";
            Seaworld.ctx.stroke();
            Seaworld.ctx.closePath();
        }
    }
    Seaworld.SeaWeed = SeaWeed;
    // Seestern
    class SeaStar {
        constructor(_x, _y, _s) {
            this.x = _x;
            this.y = _y;
            this.s = _s;
        }
        show() {
            Seaworld.ctx.moveTo(this.x, this.y);
            Seaworld.ctx.beginPath();
            Seaworld.ctx.fillStyle = "pink";
            for (let a = 0; a < 2 * Math.PI; a += .01) {
                let r = this.s * Math.cos(a * 5);
                let x = r * Math.cos(a);
                let y = r * Math.sin(a);
                Seaworld.ctx.lineTo(x + this.x, y + this.y);
            }
            Seaworld.ctx.fill();
            Seaworld.ctx.closePath();
        }
    }
    Seaworld.SeaStar = SeaStar;
    // Fisch
    class Fish {
        constructor(_x, _y, _speed) {
            this.x = _x;
            this.y = _y;
            this.speed = _speed;
        }
        update() {
            this.x += this.speed * -0.1;
            if (this.x < 0)
                this.x = Seaworld.width + 10;
        }
        show() {
            Seaworld.ctx.beginPath();
            Seaworld.ctx.moveTo(this.x, this.y);
            Seaworld.ctx.bezierCurveTo(this.x - 20, this.y - 20, this.x - 20, this.y + 20, this.x, this.y);
            Seaworld.ctx.lineTo(this.x + 5, this.y - 5);
            Seaworld.ctx.lineTo(this.x + 5, this.y + 5);
            Seaworld.ctx.lineTo(this.x, this.y);
            Seaworld.ctx.fillStyle = "blue";
            Seaworld.ctx.fill();
            Seaworld.ctx.closePath();
        }
    }
    Seaworld.Fish = Fish;
    class Bubble {
        constructor(_x, _y) {
            this.x = _x;
            this.y = _y;
            this.radius = 0;
        }
        update() {
            this.y -= Math.random() * 2;
            this.radius += Math.random() * .2;
            if (this.radius > 5) {
                this.y = Math.random() * Seaworld.height * .8 + Seaworld.height * .2;
                this.radius = 0;
            }
        }
        show() {
            Seaworld.ctx.moveTo(this.x, this.y);
            Seaworld.ctx.fillStyle = "lightblue";
            Seaworld.ctx.beginPath();
            Seaworld.ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
            Seaworld.ctx.fill();
            Seaworld.ctx.closePath();
        }
    }
    Seaworld.Bubble = Bubble;
    function createGradient(_c1, _c2, _from, _to) {
        let gradient = Seaworld.ctx.createLinearGradient(0, _from, 0, _to);
        gradient.addColorStop(0, _c1);
        gradient.addColorStop(1, _c2);
        return gradient;
    }
    Seaworld.createGradient = createGradient;
})(Seaworld || (Seaworld = {}));
//# sourceMappingURL=classes.js.map