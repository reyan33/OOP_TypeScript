import { Rectangle, Circle } from "./shapes.js";
import { ShapeViewer } from "./shape-viewer.js";

const canvas = document.getElementById("myCanvas") as HTMLCanvasElement;

const viewer = new ShapeViewer(canvas);

const rectangle1 = new Rectangle(50, 50, 200, 150, "#e86a33");
const rectangle2 = new Rectangle(350, 200, 150, 100, "#7174ce");
const circle1 = new Circle(150, 350, 70, "yellow");
const circle2 = new Circle(350, 100, 70, "red");

viewer.addShape(rectangle1);
viewer.addShape(rectangle2);
viewer.addShape(circle1);
viewer.addShape(circle2);
