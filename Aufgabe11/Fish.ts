namespace Seaworld11 {
  
  export class Fish extends Creature {
    private speed: number;

    constructor(_x: number, _y: number, _speed: number) {
      super(_x, _y);
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
}