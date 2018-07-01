namespace Seaworld11 {

  export class Food extends Creature {
    target: number = Math.random() * 80 + (height - 80);
    speed: number = Math.random() * 2 + 1;

    constructor(_x: number, _y: number) {
      super(_x, _y);
    }

    update(): void {
      this.y += this.speed;

      if (this.y > this.target)
        this.y = this.target;
    }

    show(): void {
      ctx.fillStyle = "brown";
      ctx.moveTo(this.x, this.y);
      ctx.beginPath();
      ctx.arc(this.x, this.y, 5, 0, 2 * Math.PI);
      ctx.closePath();
      ctx.fill();
    }
  }
}