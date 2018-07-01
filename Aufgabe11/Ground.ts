namespace Seaworld11 {
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
}