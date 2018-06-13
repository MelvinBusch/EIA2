namespace Seaworld {

  let ctx: CanvasRenderingContext2D;
  let width: number;
  let height: number;

  window.addEventListener("load", init);

  function init() {
    let canvas: HTMLCanvasElement = <HTMLCanvasElement>document.getElementById("canvas");
    ctx = canvas.getContext("2d");

    width = canvas.width;
    height = canvas.height;

    ctx.strokeStyle = "none";

    // Draw Water
    water(50);

    // Draw Ground
    ground(height - 100);

    // Draw Seaweed
    for (let i: number = 0; i < 4; i++) {
      seaweed(Math.floor(Math.random() * width), height - 75, Math.floor(Math.random() * 100 + 100));
    }
  }

  function water(_y: number) {
    ctx.fillStyle = createGradient("rgb(189, 232, 220)", "rgb(48, 84, 122)", _y, height);
    ctx.beginPath();
    ctx.moveTo(0, height);
    ctx.lineTo(0, _y);
    for (let i: number = 0; i < width; i++) {
      ctx.lineTo(i, -7.5 * Math.sin(i * .08) + _y);
    }
    ctx.lineTo(width, height);
    ctx.lineTo(0, height);
    ctx.fill();
    ctx.closePath();
  }

  function ground(_y: number) {
    ctx.fillStyle = createGradient("rgb(153, 130, 100)", "rgb(116, 82, 43)", height, _y);
    ctx.beginPath();
    ctx.moveTo(0, height);
    ctx.lineTo(0, _y);
    for (let i: number = 0; i < width; i++) {
      ctx.lineTo(i, 15 * Math.sin(i * .015) + _y);
    }
    ctx.lineTo(width, height);
    ctx.lineTo(0, height);
    ctx.fill();
    ctx.closePath();
  }

  function seaweed(_x: number, _y: number, _h: number) {
    ctx.fillStyle = "rgb()" // Some green color
    ctx.moveTo(_x, _y);
    ctx.bezierCurveTo(_x - 50, _y - 20, _x, _y + 10, _x - 20, _y - _h);
    ctx.stroke();
  }

  function createGradient(_c1: string, _c2: string, _from: number, _to: number) {
    let gradient = ctx.createLinearGradient(0, _from, 0, _to);
    gradient.addColorStop(0, _c1);
    gradient.addColorStop(1, _c2);
    return gradient
  }
}