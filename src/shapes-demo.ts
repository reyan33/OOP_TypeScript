export {};

const rectangle = {
  x: 550,
  y: 200,
  width: 300,
  height: 200,
};

const circle = {
  x: 150,
  y: 150,
  radius: 70,
};

const canvas = document.getElementById("myCanvas") as HTMLCanvasElement;
const ctx = canvas.getContext("2d") as CanvasRenderingContext2D;

ctx.fillStyle = "#e86a33";

ctx.fillRect(rectangle.x, rectangle.y, rectangle.width, rectangle.height);

let seconds: number = 0;

function drawClock(): void {
  ctx.clearRect(50, 50, 200, 200);

  ctx.beginPath();
  ctx.arc(circle.x, circle.y, circle.radius, 0, 2 * Math.PI);
  ctx.strokeStyle = "black";
  ctx.stroke();

  const angle: number = (seconds * 2 * Math.PI) / 60;

  ctx.beginPath();
  ctx.moveTo(circle.x, circle.y);
  ctx.arc(
    circle.x,
    circle.y,
    circle.radius,
    -Math.PI / 2,
    -Math.PI / 2 + angle,
  );
  ctx.closePath();

  ctx.fillStyle = "#e86a33";
  ctx.fill();

  seconds++;

  if (seconds > 60) {
    seconds = 0;
  }
}

drawClock();
setInterval(drawClock, 1000);
