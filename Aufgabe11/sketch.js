var Seaworld11;
(function (Seaworld11) {
    let staticBackground;
    let seaWeeds = [];
    let creatures = [];
    window.addEventListener("load", init);
    function init() {
        let canvas = document.getElementById("canvas");
        Seaworld11.ctx = canvas.getContext("2d");
        Seaworld11.width = canvas.width;
        Seaworld11.height = canvas.height;
        Seaworld11.ctx.strokeStyle = "none";
        canvas.addEventListener("click", (_event) => {
            for (let i = 0; i < Math.floor(Math.random() * 5 + 1); i++) {
                let food = new Seaworld11.Food(_event.x + Math.random() * 20, _event.y + Math.random() * 20);
                creatures.push(food);
            }
        });
        let water = new Seaworld11.Water(50);
        water.show();
        let ground = new Seaworld11.Ground(Seaworld11.height - 100);
        ground.show();
        for (let i = 0; i < 3; i++)
            new Seaworld11.SeaStar(Math.random() * Seaworld11.width, Seaworld11.height - 75 + Math.random() * 50, Math.random() * 10 + 10).show();
        staticBackground = Seaworld11.ctx.getImageData(0, 0, Seaworld11.width, Seaworld11.height);
        for (let i = 0; i < 20; i++)
            seaWeeds[i] = new Seaworld11.SeaWeed(Math.random() * Seaworld11.width, Seaworld11.height - (Math.random() * 50 + 25), Math.random() * 100 + 50);
        for (let i = 0; i < 10; i++)
            creatures.push(new Seaworld11.Fish(Math.random() * Seaworld11.width, Math.random() * Seaworld11.height + 50, Math.random() * 5 + 5));
        for (let i = 0; i < 20; i++)
            creatures.push(new Seaworld11.Bubble(Math.random() * Seaworld11.width, Math.random() * Seaworld11.height * .8 + Seaworld11.height * .2));
        // Start Animation 
        window.requestAnimationFrame(draw);
    }
    function draw() {
        Seaworld11.ctx.putImageData(staticBackground, 0, 0);
        seaWeeds.forEach((seaWeed) => {
            seaWeed.show();
        });
        creatures.forEach((creature) => {
            creature.update();
            creature.show();
        });
        window.requestAnimationFrame(draw);
    }
    function createGradient(_c1, _c2, _from, _to) {
        let gradient = Seaworld11.ctx.createLinearGradient(0, _from, 0, _to);
        gradient.addColorStop(0, _c1);
        gradient.addColorStop(1, _c2);
        return gradient;
    }
    Seaworld11.createGradient = createGradient;
})(Seaworld11 || (Seaworld11 = {}));
//# sourceMappingURL=sketch.js.map