import { Rectangle, Circle } from "./shapes.js";

const canvas = document.getElementById("myCanvas") as HTMLCanvasElement;
const ctx = canvas.getContext("2d") as CanvasRenderingContext2D;

const rectangle1 = new Rectangle(50, 50, 200, 300, "#e86a33");
const rectangle2 = new Rectangle(350, 200, 150, 100, "#7174ce");
const rectangle3 = new Rectangle(550, 350, 200, 150, "#7fcf17");

const circle1 = new Circle(150, 150, 70, "yellow");

rectangle1.draw(ctx);
rectangle2.draw(ctx);
rectangle3.draw(ctx);

circle1.draw(ctx);
