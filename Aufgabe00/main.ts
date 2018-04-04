// Greetings!
document.addEventListener("DOMContentLoaded", function() {
    var name: string = prompt("Bitte Namen eingeben", "Name");
    var container: HTMLElement = document.getElementById("greetings");
    container.innerHTML = "Hallo " + name + ". Wie geht's so?";
});
