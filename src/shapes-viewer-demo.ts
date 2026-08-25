import { Rectangle, Circle, Triangle, Rhombus, Trapezoid } from "./shapes.js";
import { ShapeViewer } from "./shape-viewer.js";

const canvas = document.getElementById("myCanvas") as HTMLCanvasElement;

const viewer = new ShapeViewer(canvas);

const rectangle1 = new Rectangle(50, 50, 200, 150, "#e86a33");
const rectangle2 = new Rectangle(350, 200, 150, 100, "#7174ce");
const circle1 = new Circle(150, 350, 70, "yellow");
const circle2 = new Circle(350, 100, 70, "red");
const triangle1 = new Triangle(550, 100, 150, 120, "green");
const rhombus1 = new Rhombus(400, 100, 100, 160, "purple");
const trapezoid1 = new Trapezoid(600, 250, 200, 120, "blue");

viewer.addShape(rectangle1);
viewer.addShape(rectangle2);
viewer.addShape(circle1);
viewer.addShape(circle2);
viewer.addShape(triangle1);
viewer.addShape(rhombus1);
viewer.addShape(trapezoid1);

console.log(viewer.toString());
