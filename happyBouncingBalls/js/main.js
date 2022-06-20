console.log("Hello World");

var canvas = document.getElementById("canvas");
console.log(canvas)
var c = canvas.getContext("2d");
console.log(c)
var tx = window.innerWidth;
console.log(tx)
var ty = window.innerHeight;
console.log(ty)
canvas.width = tx;
console.log(canvas.width)
canvas.height = ty;
console.log(canvas.height)
//c.lineWidth= 5;
//c.globalAlpha = 0.5;

var mousex = 0;
var mousey = 0;

addEventListener("mousemove", function () {
    mousex = event.clientX;
    mousey = event.clientY;
});


var grav = 0.99;
c.strokeWidth = 5;

function randomColor() {
    var color = (
        "rgba(" +
        Math.round(Math.random() * 250) +
        "," +
        Math.round(Math.random() * 250) +
        "," +
        Math.round(Math.random() * 250) +
        "," +
        Math.ceil(Math.random() * 10) / 10 +
        ")"
    );
    console.log("color is " + color)
    return color;
}

function Ball() {
    this.color = randomColor();
    this.radius = Math.random() * 20 + 14;
    console.log("radius is " + this.radius)
    this.startradius = this.radius;
    console.log("startradius is " + this.startradius)
    this.x = Math.random() * (tx - this.radius * 2) + this.radius;
    console.log("x is " + this.x)
    this.y = Math.random() * (ty - this.radius);
    console.log("y is " + this.y)
    this.dy = Math.random() * 2;
    console.log("dy is " + this.dy)
    this.dx = Math.round((Math.random() - 0.5) * 10);
    console.log("dx is " + this.dx)
    this.vel = Math.random() / 5;
    console.log("vel is " + this.vel)
    this.update = function () {
        c.beginPath();
        c.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
        c.fillStyle = this.color;
        c.fill();
        //c.stroke();
    };
}

var bal = [];
for (var i = 0; i < 100; i++) {
    bal.push(new Ball());
}

function animate() {
    if (tx != window.innerWidth || ty != window.innerHeight) {
        tx = window.innerWidth;
        ty = window.innerHeight;
        canvas.width = tx;
        canvas.height = ty;
    }
    requestAnimationFrame(animate);
    c.clearRect(1, 1, tx, ty);
    for (var i = 0; i < bal.length; i++) {
        bal[i].update();
        bal[i].y += bal[i].dy;
        bal[i].x += bal[i].dx;
        if (bal[i].y + bal[i].radius >= ty) {
            bal[i].dy = -bal[i].dy * grav;
        } else {
            bal[i].dy += bal[i].vel;
        }
        if (bal[i].x + bal[i].radius > tx || bal[i].x - bal[i].radius < 0) {
            bal[i].dx = -bal[i].dx;
        }
        if (mousex > bal[i].x - 20 &&
            mousex < bal[i].x + 20 &&
            mousey > bal[i].y - 50 &&
            mousey < bal[i].y + 50 &&
            bal[i].radius < 70) {
            //bal[i].x += +1;
            bal[i].radius += 5;
        } else {
            if (bal[i].radius > bal[i].startradius) {
                bal[i].radius += -5;
            }
        }
    }
}

animate();

setInterval(function () {
    bal.push(new Ball());
    bal.splice(0, 1);
}, 10000000);