import { Shape } from "./shapes.js";

export class ShapeViewer {
  private ctx: CanvasRenderingContext2D;
  private shapes: Shape[];
  private selectedShape?: Shape;
  private canvas: HTMLCanvasElement;

  public constructor(canvasElement: HTMLCanvasElement) {
    this.canvas = canvasElement;
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

  public getShapeAt(x: number, y: number): Shape | undefined {
    for (let i = this.shapes.length - 1; i >= 0; i--) {
      const shape = this.shapes[i];

      if (this.ctx.isPointInPath(shape.path, x, y)) {
        return shape;
      }
    }

    return undefined;
  }

  public selectShape(shape: Shape): void {
    this.selectedShape = shape;
    this.draw();
  }

  public clearSelection(): void {
    this.selectedShape = undefined;
    this.draw();
  }

  private draw(): void {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    this.shapes.forEach((shape) => {
      this.ctx.save();

      shape.draw(this.ctx);

      if (this.selectedShape === shape) {
        shape.drawSelectionBorder(this.ctx);
      }

      this.ctx.restore();
    });
  }

  public toString(): string {
    let result = "ShapeViewer with shapes:\n";

    this.shapes.forEach((shape) => (result += shape.toString() + "\n"));

    return result;
  }
}
