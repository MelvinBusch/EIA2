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
    
    // Bubbles
    for (let i: number = 0; i < 5; i++) {
      bubbles(Math.random() * width, Math.random() * height + 50);
    }

    // Draw Seaweed
    for (let i: number = 0; i < 20; i++) {
      seaWeed(Math.random() * width, height - (Math.random() * 50 + 25), Math.random() * 100 + 50);
    }

    // Seastar
    for (let i: number = 0; i < 3; i++) {
      seaStar(Math.random() * width, height - 75 + Math.random() * 50, Math.random() * 10 + 10);
    }

    // Snail
    snail(width * .8, height - 80);

    // Fish
    for (let i: number = 0; i < 10; i++) {
      fish(Math.random() * width, Math.random() * height + 50);
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

  function seaWeed(_x: number, _y: number, _l): void {
    ctx.beginPath();
    ctx.moveTo(_x, _y);
    for (let i: number = 0; i < _l; i++) {
      ctx.lineTo(Math.sin(i * .2) + _x, -i + _y);
    }
    ctx.strokeStyle = "green";
    ctx.stroke();
    ctx.closePath();
  }

  function seaStar(_x, _y, _s): void {
    ctx.moveTo(_x, _y);
    ctx.beginPath();
    ctx.fillStyle = "pink";
    for (let a: number = 0; a < 2 * Math.PI; a += .01) {
      let r: number = _s * Math.cos(a * 5);
      let x: number = r * Math.cos(a);
      let y: number = r * Math.sin(a);
      ctx.lineTo(x + _x, y + _y);
    }
    ctx.fill();
    ctx.closePath();
  }

  function snail(_x: number, _y: number): void {
    ctx.save();
    ctx.translate(_x, _y);
    ctx.rotate(Math.PI);

    // Schneckenhaus
    ctx.beginPath();
    ctx.moveTo(0, 0);
    for (let a: number = 0; a < 2 * Math.PI; a += .01) {
      let r: number = 25 * Math.cos(a * .14); // .2
      let x: number = r * Math.cos(a);
      let y: number = r * Math.sin(a);
      ctx.lineTo(x, y);
    }
    ctx.fillStyle = "pink";
    ctx.fill();
    ctx.closePath();

    // Linien
    ctx.beginPath();
    for (let a: number = 0; a < 6 * Math.PI; a += .01) {
      let r: number = a * .95;
      let x: number = r * Math.cos(a);
      let y: number = r * Math.sin(a);
      ctx.lineTo(x - 1, -y);
    }
    ctx.strokeStyle = "purple";
    ctx.stroke();
    ctx.closePath();
    ctx.restore();
  }

  function fish(_x: number, _y: number): void {
    ctx.beginPath();
    ctx.moveTo(_x, _y);
    ctx.bezierCurveTo(_x - 20, _y - 20, _x - 20, _y + 20, _x, _y);

    ctx.lineTo(_x + 10, _y - 5);
    ctx.lineTo(_x + 10, _y + 5);
    ctx.lineTo(_x, _y - 5);

    ctx.fillStyle = "blue";
    ctx.fill();
    ctx.closePath();
  }

  function bubbles(_x: number, _y: number): void {
    ctx.moveTo(_x, _y);
    ctx.fillStyle = "white"
    for (let i: number = 0; i < 5; i++) {
      ctx.beginPath();
      ctx.arc(_x + Math.random() * 10, _y - i * 25, i, 0, 2 * Math.PI);
      ctx.fill();
      ctx.closePath();
    }
  }
  function createGradient(_c1: string, _c2: string, _from: number, _to: number) {
    let gradient = ctx.createLinearGradient(0, _from, 0, _to);
    gradient.addColorStop(0, _c1);
    gradient.addColorStop(1, _c2);
    return gradient;
  }
}








