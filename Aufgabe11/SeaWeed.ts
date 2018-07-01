namespace Seaworld11 {
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
}