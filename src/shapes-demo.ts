export {};

const rectangle = {
  x: 550,
  y: 200,
  width: 300,
  height: 200,
};

const canvas = document.getElementById("myCanvas") as HTMLCanvasElement;
const ctx = canvas.getContext("2d") as CanvasRenderingContext2D;

ctx.fillStyle = "#e86a33";

ctx.fillRect(rectangle.x, rectangle.y, rectangle.width, rectangle.height);
