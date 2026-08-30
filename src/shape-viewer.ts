import { Shape, ShapeChangeListener, ShapeChangedEvent } from "./shapes.js";

export class ShapeSelectionEvent {
  public readonly shape: Shape;

  public constructor(shape: Shape) {
    this.shape = shape;
  }
}

export interface ShapeSelectionListener {
  shapeSelected(e: ShapeSelectionEvent): void;
}

export class ShapeViewer implements ShapeChangeListener {
  private ctx: CanvasRenderingContext2D;

  private shapes: Shape[];

  private selectedShape?: Shape;

  private canvas: HTMLCanvasElement;

  private _selectionListeners: ShapeSelectionListener[];

  public constructor(canvasElement: HTMLCanvasElement) {
    this.canvas = canvasElement;
    this.ctx = canvasElement.getContext("2d") as CanvasRenderingContext2D;
    this.shapes = [];
    this._selectionListeners = [];
  }

  public addShapes(shapes: Shape[]): void {
    this.shapes.push(...shapes);

    shapes.forEach((shape) => {
      shape.addChangeListener(this);
    });

    this.draw();
  }

  public addShape(shape: Shape): void {
    this.shapes.push(shape);
    shape.addChangeListener(this);
    this.draw();
  }

  public addSelectionListener(listener: ShapeSelectionListener): void {
    this._selectionListeners.push(listener);
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

    this.fireSelectionEvent(new ShapeSelectionEvent(shape));
  }

  public clearSelection(): void {
    this.selectedShape = undefined;
    this.draw();
  }

  private fireSelectionEvent(e: ShapeSelectionEvent): void {
    this._selectionListeners.forEach((listener) => {
      listener.shapeSelected(e);
    });
  }

  public shapeChanged(_e: ShapeChangedEvent): void {
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
