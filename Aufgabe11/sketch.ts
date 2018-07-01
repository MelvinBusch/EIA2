namespace Seaworld11 {

  export let ctx: CanvasRenderingContext2D;
  export let width: number;
  export let height: number;

  let staticBackground: ImageData;

  let seaWeeds: SeaWeed[] = [];

  let creatures: Creature[] = [];

  window.addEventListener("load", init);

  function init() {
    let canvas: HTMLCanvasElement = <HTMLCanvasElement>document.getElementById("canvas");
    ctx = canvas.getContext("2d");

    width = canvas.width;
    height = canvas.height;

    ctx.strokeStyle = "none";

    canvas.addEventListener("click", (_event: MouseEvent) => {
      for (let i: number = 0; i < Math.floor(Math.random() * 5 + 1); i++) {
        let food = new Food(_event.x + Math.random() * 20, _event.y + Math.random() * 20);
        creatures.push(food);
      }
    });

    let water: Water = new Water(50);
    water.show();

    let ground: Ground = new Ground(height - 100);
    ground.show();

    for (let i: number = 0; i < 3; i++)
      new SeaStar(Math.random() * width, height - 75 + Math.random() * 50, Math.random() * 10 + 10).show();

    staticBackground = ctx.getImageData(0, 0, width, height);

    for (let i: number = 0; i < 20; i++)
      seaWeeds[i] = new SeaWeed(Math.random() * width, height - (Math.random() * 50 + 25), Math.random() * 100 + 50);

    for (let i: number = 0; i < 10; i++)
      creatures.push(new Fish(Math.random() * width, Math.random() * height + 50, Math.random() * 5 + 5));

    for (let i: number = 0; i < 20; i++)
      creatures.push(new Bubble(Math.random() * width, Math.random() * height * .8 + height * .2));

    // Start Animation 
    window.requestAnimationFrame(draw);
  }

  function draw(): void {

    ctx.putImageData(staticBackground, 0, 0);

    seaWeeds.forEach((seaWeed: SeaWeed) => {
      seaWeed.show();
    });

    creatures.forEach((creature: Bubble) => {
      creature.update();
      creature.show();
    });

    window.requestAnimationFrame(draw);
  }


  export function createGradient(_c1: string, _c2: string, _from: number, _to: number) {
    let gradient = ctx.createLinearGradient(0, _from, 0, _to);
    gradient.addColorStop(0, _c1);
    gradient.addColorStop(1, _c2);
    return gradient;
  }
}