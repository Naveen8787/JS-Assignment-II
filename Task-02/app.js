var canvas = document.getElementById("box");
var ctx = canvas.getContext("2d");

function generateCoords() {
    var X = Math.floor((Math.random() * 1100) + 10);
    var Y = Math.floor((Math.random() * 400) + 10);
    return [X, Y];
}

function getRandomColor() {
    var letters = "0123456789ABCDEF";
    var color = "#";
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function square() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    var coords = generateCoords();
    var X = coords[0];
    var Y = coords[1];
    var newColor = getRandomColor();
    ctx.fillStyle = newColor;
    ctx.fillRect(X, Y, 100, 100);
}