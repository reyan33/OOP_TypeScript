export {};

const canvas = document.getElementById("myCanvas") as HTMLCanvasElement;
const ctx = canvas.getContext("2d") as CanvasRenderingContext2D;

ctx.fillStyle = "#e86a33";
ctx.fillRect(250, 200, 300, 200);
