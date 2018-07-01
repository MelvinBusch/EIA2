namespace Seaworld11 {
  
  export class Bubble extends Creature {
    private radius: number;

    constructor(_x: number, _y: number) {
      super(_x, _y);
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
}