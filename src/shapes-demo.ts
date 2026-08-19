export {};

const canvas = document.getElementById("myCanvas") as HTMLCanvasElement;
const ctx = canvas.getContext("2d") as CanvasRenderingContext2D;

const rectangle = {
  x: 550,
  y: 200,
  width: 300,
  height: 200,
  style: "#e86a33",

  draw: function () {
    ctx.fillStyle = this.style;
    ctx.fillRect(this.x, this.y, this.width, this.height);
  },
};

const rectangle2 = {
  x: 350,
  y: 400,
  width: 150,
  height: 100,
  style: "#7174cec3",

  draw: function () {
    ctx.fillStyle = this.style;
    ctx.fillRect(this.x, this.y, this.width, this.height);
  },
};

let seconds: number = 0;

const circle = {
  x: 150,
  y: 150,
  radius: 70,
  style: "#e86a33",

  draw: function () {
    ctx.clearRect(50, 50, 200, 200);

    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
    ctx.strokeStyle = "black";
    ctx.stroke();

    const angle: number = (seconds * 2 * Math.PI) / 60;

    ctx.beginPath();
    ctx.moveTo(this.x, this.y);
    ctx.arc(this.x, this.y, this.radius, -Math.PI / 2, -Math.PI / 2 + angle);
    ctx.closePath();

    ctx.fillStyle = this.style;
    ctx.fill();

    seconds++;

    if (seconds > 60) {
      seconds = 0;
    }
  },
};

rectangle.draw();
rectangle2.draw();
circle.draw();

setInterval(function () {
  circle.draw();
}, 1000);
