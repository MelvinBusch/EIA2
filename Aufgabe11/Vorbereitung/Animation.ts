namespace L11_Inheritance {
  window.addEventListener("load", init);
  export let crc2: CanvasRenderingContext2D;
  let stars: DavidStar[] = [];
  let n: number = 50;
  export let frameCount = 1;

  function init(_event: Event): void {
    let canvas: HTMLCanvasElement = document.getElementsByTagName("canvas")[0];
    crc2 = canvas.getContext("2d");

    canvas.addEventListener("click", insertNewObject);

    for (let i: number = 0; i < n; i++) {
      let star: DavidStar = new DavidStar("#00ffff");
      stars.push(star);

      let rect: Rect = new Rect("#ff0000");
      stars.push(rect);

      let circle: Circle = new Circle("#00ff00");
      stars.push(circle);
    }


    animate();
  }

  function insertNewObject(_event: Event): void {
    let zufall: number = Math.random();
    let object: any;
    
    let mouseEvent: MouseEvent = <MouseEvent>_event;
    
    console.log(_event);
    
    if (zufall < .33) {
      object = new DavidStar("#ffff00");
    } else if (zufall >= .33 && zufall < .66) {
      object = new Rect("#ffff00");
    } else {
      object = new Circle("#ffff00");
    }
    
    object.x = mouseEvent.x;
    object.y = mouseEvent.y;

    stars.push(object);
  }

  function animate(): void {
    window.setTimeout(animate, 10);

    crc2.clearRect(0, 0, crc2.canvas.width, crc2.canvas.height);

    moveObjects();
    drawObjects();

    frameCount++;
  }

  function moveObjects(): void {
    for (let i: number = 0; i < stars.length; i++) {
      stars[i].move();
    }
  }

  function drawObjects(): void {
    for (let i: number = 0; i < stars.length; i++) {
      stars[i].draw();
    }
  }
}