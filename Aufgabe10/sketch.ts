namespace Seaworld {

  export let ctx: CanvasRenderingContext2D;
  export let width: number;
  export let height: number;

  let staticBackground: ImageData;

  let seaWeeds: SeaWeed[] = [];
  let fishes: Fish[] = [];
  let bubbles: Bubble[] = [];

  window.addEventListener("load", init);

  function init() {
    let canvas: HTMLCanvasElement = <HTMLCanvasElement>document.getElementById("canvas");
    ctx = canvas.getContext("2d");

    width = canvas.width;
    height = canvas.height;

    ctx.strokeStyle = "none";

    let water: Water = new Water(50);
    water.show();

    let ground: Ground = new Ground(height - 100);
    ground.show();

    for (let i: number = 0; i < 3; i++)
      new SeaStar(Math.random() * width, height - 75 + Math.random() * 50, Math.random() * 10 + 10).show();

    staticBackground = ctx.getImageData(0, 0, width, height);

    for (let i: number = 0; i < 20; i++) {
      seaWeeds[i] = new SeaWeed(Math.random() * width, height - (Math.random() * 50 + 25), Math.random() * 100 + 50);
    }

    for (let i: number = 0; i < 10; i++) {
      fishes[i] = new Fish(Math.random() * width, Math.random() * height + 50, Math.random() * 5 + 5);
    }
    
    for (let i: number = 0; i < 20; i++) {
      bubbles[i] = new Bubble(Math.random() * width, Math.random() * height * .8 + height * .2);
    }

    // Start Animation 
    window.requestAnimationFrame(draw);
  }

  function draw(): void {

    ctx.putImageData(staticBackground, 0, 0);

    fishes.forEach((fish: Fish) => {
      fish.update();
      fish.show();
    });

    seaWeeds.forEach((seaWeed: SeaWeed) => {
      seaWeed.show();
    });
    
    bubbles.forEach((bubble: Bubble) => {
      bubble.update();
      bubble.show();
    });

    window.requestAnimationFrame(draw);
  }
}

/*
// Bubbles
for (let i: number = 0; i < 5; i++) {
  bubbles(Math.random() * width, Math.random() * height + 50);
}
*/