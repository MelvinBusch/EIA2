namespace Seaworld11 {

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
}