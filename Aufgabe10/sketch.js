var Seaworld;
(function (Seaworld) {
    let staticBackground;
    let seaWeeds = [];
    let fishes = [];
    let bubbles = [];
    window.addEventListener("load", init);
    function init() {
        let canvas = document.getElementById("canvas");
        Seaworld.ctx = canvas.getContext("2d");
        Seaworld.width = canvas.width;
        Seaworld.height = canvas.height;
        Seaworld.ctx.strokeStyle = "none";
        let water = new Seaworld.Water(50);
        water.show();
        let ground = new Seaworld.Ground(Seaworld.height - 100);
        ground.show();
        for (let i = 0; i < 3; i++)
            new Seaworld.SeaStar(Math.random() * Seaworld.width, Seaworld.height - 75 + Math.random() * 50, Math.random() * 10 + 10).show();
        staticBackground = Seaworld.ctx.getImageData(0, 0, Seaworld.width, Seaworld.height);
        for (let i = 0; i < 20; i++) {
            seaWeeds[i] = new Seaworld.SeaWeed(Math.random() * Seaworld.width, Seaworld.height - (Math.random() * 50 + 25), Math.random() * 100 + 50);
        }
        for (let i = 0; i < 10; i++) {
            fishes[i] = new Seaworld.Fish(Math.random() * Seaworld.width, Math.random() * Seaworld.height + 50, Math.random() * 5 + 5);
        }
        for (let i = 0; i < 20; i++) {
            bubbles[i] = new Seaworld.Bubble(Math.random() * Seaworld.width, Math.random() * Seaworld.height * .8 + Seaworld.height * .2);
        }
        // Start Animation 
        window.requestAnimationFrame(draw);
    }
    function draw() {
        Seaworld.ctx.putImageData(staticBackground, 0, 0);
        fishes.forEach((fish) => {
            fish.update();
            fish.show();
        });
        seaWeeds.forEach((seaWeed) => {
            seaWeed.show();
        });
        bubbles.forEach((bubble) => {
            bubble.update();
            bubble.show();
        });
        window.requestAnimationFrame(draw);
    }
})(Seaworld || (Seaworld = {}));
/*
// Bubbles
for (let i: number = 0; i < 5; i++) {
  bubbles(Math.random() * width, Math.random() * height + 50);
}
*/ 
//# sourceMappingURL=sketch.js.map