import { Shape } from "./shapes.js";

export class ShapeViewer {
  private ctx: CanvasRenderingContext2D;
  private shapes: Shape[];

  public constructor(canvasElement: HTMLCanvasElement) {
    this.ctx = canvasElement.getContext("2d") as CanvasRenderingContext2D;
    this.shapes = [];
  }

  public addShapes(shapes: Shape[]): void {
    this.shapes.push(...shapes);
    this.draw();
  }

  public addShape(shape: Shape): void {
    this.shapes.push(shape);
    this.draw();
  }

  private draw(): void {
    this.shapes.forEach((shape) => shape.draw(this.ctx));
  }

  public toString(): string {
    let result = "ShapeViewer with shapes:\n";

    this.shapes.forEach((shape) => (result += shape.toString() + "\n"));

    return result;
  }
}
