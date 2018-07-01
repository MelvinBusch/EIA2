namespace L11_Inheritance {

  export class Circle extends DavidStar {

    constructor(_color) {
      super(_color);
      this.setRandomPosition();
    }

    move(): void {
      this.x += 1;

      if (this.x > crc2.canvas.width)
        this.x = 0;
    }

    draw(): void {
      crc2.fillStyle = this.color;
      crc2.moveTo(this.x, this.y);
      crc2.beginPath();
      crc2.arc(this.x, this.y, 10, 0, 2 * Math.PI);
      crc2.closePath();
      crc2.fill();
    }
  }

}