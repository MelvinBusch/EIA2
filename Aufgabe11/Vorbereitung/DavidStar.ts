namespace L11_Inheritance {
  export class DavidStar {
    x: number;
    y: number;
    color: string;

    constructor(_color: string) {
      this.setRandomPosition();
      this.color = _color;
    }

    setRandomPosition(): void {
      this.x = Math.random() * crc2.canvas.width;
      this.y = Math.random() * crc2.canvas.height;
    }

    move(): void {
      this.x += Math.random() * 4 - 2;
      this.y += Math.random() * 4 - 2;
    }

    draw(): void {
      crc2.beginPath();
      crc2.moveTo(this.x, this.y - 20);
      crc2.lineTo(this.x + 20, this.y + 10);
      crc2.lineTo(this.x - 20, this.y + 10);
      crc2.closePath();

      crc2.moveTo(this.x, this.y + 20);
      crc2.lineTo(this.x + 20, this.y - 10);
      crc2.lineTo(this.x - 20, this.y - 10);
      crc2.closePath();

      crc2.fillStyle = this.color;

      crc2.stroke();
      crc2.fill();
    }
  }
}