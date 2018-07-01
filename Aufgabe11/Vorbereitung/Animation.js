var L11_Inheritance;
(function (L11_Inheritance) {
    window.addEventListener("load", init);
    let stars = [];
    let n = 50;
    L11_Inheritance.frameCount = 1;
    function init(_event) {
        let canvas = document.getElementsByTagName("canvas")[0];
        L11_Inheritance.crc2 = canvas.getContext("2d");
        canvas.addEventListener("click", insertNewObject);
        for (let i = 0; i < n; i++) {
            let star = new L11_Inheritance.DavidStar("#00ffff");
            stars.push(star);
            let rect = new L11_Inheritance.Rect("#ff0000");
            stars.push(rect);
            let circle = new L11_Inheritance.Circle("#00ff00");
            stars.push(circle);
        }
        animate();
    }
    function insertNewObject(_event) {
        let zufall = Math.random();
        let object;
        if (zufall < .33) {
            object = new L11_Inheritance.DavidStar("#ffff00");
        }
        else if (zufall >= .33 && zufall < .66) {
            object = new L11_Inheritance.Rect("#ffff00");
        }
        else {
            object = new L11_Inheritance.Circle("#ffff00");
        }
        stars.push(object);
    }
    function animate() {
        window.setTimeout(animate, 10);
        L11_Inheritance.crc2.clearRect(0, 0, L11_Inheritance.crc2.canvas.width, L11_Inheritance.crc2.canvas.height);
        moveObjects();
        drawObjects();
        L11_Inheritance.frameCount++;
    }
    function moveObjects() {
        for (let i = 0; i < stars.length; i++) {
            stars[i].move();
        }
    }
    function drawObjects() {
        for (let i = 0; i < stars.length; i++) {
            stars[i].draw();
        }
    }
})(L11_Inheritance || (L11_Inheritance = {}));
//# sourceMappingURL=Animation.js.map