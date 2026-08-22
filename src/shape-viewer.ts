import { Shape } from "./shapes.js";

export class ShapeViewer {
  ctx: CanvasRenderingContext2D;
  shapes: Shape[];

  constructor(canvasElement: HTMLCanvasElement) {
    this.ctx = canvasElement.getContext("2d") as CanvasRenderingContext2D;
    this.shapes = [];
  }

  addShapes(shapes: Shape[]): void {
    this.shapes.push(...shapes);
    this.draw();
  }

  addShape(shape: Shape): void {
    this.shapes.push(shape);
    this.draw();
  }

  draw(): void {
    this.shapes.forEach((shape) => shape.draw(this.ctx));
  }
}
