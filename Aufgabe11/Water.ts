namespace Seaworld11 {
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
}