namespace L11_Inheritance {
  export class Rect extends DavidStar {

    constructor(_color: string) {
      super(_color);
    }

    draw(): void {
      crc2.fillStyle = this.color;
      crc2.fillRect(this.x - 20, this.y - 20, 40, 40);
    }
  }
}