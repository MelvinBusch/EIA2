namespace Seaworld {

  // Wasser
  export class Water {
    private y: number;

    constructor(_y: number) {
      this.y = _y;
    }

    show() {
      ctx.fillStyle = createGradient("rgb(189, 232, 220)", "rgb(48, 84, 122)", this.y, height);
      ctx.beginPath();
      ctx.moveTo(0, height);
      ctx.lineTo(0, this.y);
      for (let i: number = 0; i < width; i++) {
        ctx.lineTo(i, -7.5 * Math.sin(i * .08) + this.y);
      }
      ctx.lineTo(width, height);
      ctx.lineTo(0, height);
      ctx.fill();
      ctx.closePath();
    }
  }

  // Boden
  export class Ground {
    private y: number;

    constructor(_y: number) {
      this.y = _y;
    }

    show() {
      ctx.fillStyle = createGradient("rgb(153, 130, 100)", "rgb(116, 82, 43)", height, this.y);
      ctx.beginPath();
      ctx.moveTo(0, height);
      ctx.lineTo(0, this.y);
      for (let i: number = 0; i < width; i++) {
        ctx.lineTo(i, 15 * Math.sin(i * .015) + this.y);
      }
      ctx.lineTo(width, height);
      ctx.lineTo(0, height);
      ctx.fill();
      ctx.closePath();
    }
  }

  // Seegras
  export class SeaWeed {
    private x: number;
    private y: number;
    private l: number

    constructor(_x: number, _y: number, _l: number) {
      this.x = _x;
      this.y = _y;
      this.l = _l;
    }

    show() {
      ctx.beginPath();
      ctx.moveTo(this.x, this.y);
      for (let i: number = 0; i < this.l; i++) {
        ctx.lineTo(Math.sin(i * .2) + this.x, -i + this.y);
      }
      ctx.strokeStyle = "green";
      ctx.stroke();
      ctx.closePath();
    }
  }

  // Seestern
  export class SeaStar {
    private x: number;
    private y: number;
    private s: number;

    constructor(_x: number, _y: number, _s: number) {
      this.x = _x;
      this.y = _y;
      this.s = _s;
    }

    show() {
      ctx.moveTo(this.x, this.y);
      ctx.beginPath();
      ctx.fillStyle = "pink";
      for (let a: number = 0; a < 2 * Math.PI; a += .01) {
        let r: number = this.s * Math.cos(a * 5);
        let x: number = r * Math.cos(a);
        let y: number = r * Math.sin(a);
        ctx.lineTo(x + this.x, y + this.y);
      }
      ctx.fill();
      ctx.closePath();
    }
  }

  // Fisch
  export class Fish {
    private x: number;
    private y: number;
    private speed: number;

    constructor(_x: number, _y: number, _speed: number) {
      this.x = _x;
      this.y = _y;
      this.speed = _speed;
    }

    update() {
      this.x += this.speed * -0.1;

      if (this.x < 0)
        this.x = width + 10;
    }

    show() {
      ctx.beginPath();
      ctx.moveTo(this.x, this.y);
      ctx.bezierCurveTo(this.x - 20, this.y - 20, this.x - 20, this.y + 20, this.x, this.y);

      ctx.lineTo(this.x + 5, this.y - 5);
      ctx.lineTo(this.x + 5, this.y + 5);
      ctx.lineTo(this.x, this.y);

      ctx.fillStyle = "blue";
      ctx.fill();
      ctx.closePath();
    }
  }

  export class Bubble {
    private x: number;
    private y: number;
    private radius: number;

    constructor(_x: number, _y: number) {
      this.x = _x;
      this.y = _y;
      this.radius = 0;
    }

    update() {
      this.y -= Math.random() * 2;
      this.radius += Math.random() * .2;
      
      if (this.radius > 5) {
        this.y = Math.random() * height * .8 + height * .2;
        this.radius = 0;
      }
    }

    show() {
      ctx.moveTo(this.x, this.y);
      ctx.fillStyle = "lightblue"
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
      ctx.fill();
      ctx.closePath();
    }
  }

  export function createGradient(_c1: string, _c2: string, _from: number, _to: number) {
    let gradient = ctx.createLinearGradient(0, _from, 0, _to);
    gradient.addColorStop(0, _c1);
    gradient.addColorStop(1, _c2);
    return gradient;
  }
}