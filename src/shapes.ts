class Point {
  private _x: number;
  private _y: number;

  public constructor(x: number, y: number) {
    this._x = x;
    this._y = y;
  }

  public get x(): number {
    return this._x;
  }

  public get y(): number {
    return this._y;
  }

  public toString(): string {
    return `${this.x}, ${this.y}`;
  }
}

class Size {
  private _width: number;
  private _height: number;

  public constructor(width: number, height: number) {
    this._width = width;
    this._height = height;
  }

  public get width(): number {
    return this._width;
  }

  public get height(): number {
    return this._height;
  }

  public toString(): string {
    return `${this.width} x ${this.height}`;
  }
}

export interface Shape {
  draw(ctx: CanvasRenderingContext2D): void;
  toString(): string;
}
export abstract class BaseShape implements Shape {
  private _style: string;

  public constructor(style: string) {
    this._style = style;
  }

  public get style(): string {
    return this._style;
  }

  public abstract draw(ctx: CanvasRenderingContext2D): void;

  public toString(): string {
    return `Shape with style ${this.style}`;
  }
}

export class Rectangle extends BaseShape {
  private location: Point;
  private size: Size;

  public constructor(
    x: number,
    y: number,
    width: number,
    height: number,
    style: string,
  ) {
    super(style);
    this.location = new Point(x, y);
    this.size = new Size(width, height);
  }

  public override draw(ctx: CanvasRenderingContext2D): void {
    ctx.fillStyle = this.style;
    ctx.fillRect(
      this.location.x,
      this.location.y,
      this.size.width,
      this.size.height,
    );
  }

  public override toString(): string {
    return `Rectangle with location ${this.location.toString()}, size ${this.size.toString()}, ${super.toString()}`;
  }
}
export class Circle extends BaseShape {
  private center: Point;
  private radius: number;

  public constructor(x: number, y: number, radius: number, style: string) {
    super(style);
    this.center = new Point(x, y);
    this.radius = radius;
  }

  public override draw(ctx: CanvasRenderingContext2D): void {
    ctx.beginPath();
    ctx.arc(this.center.x, this.center.y, this.radius, 0, 2 * Math.PI);
    ctx.fillStyle = this.style;
    ctx.fill();
  }

  public override toString(): string {
    return `Circle with center ${this.center.toString()}, radius ${this.radius}, ${super.toString()}`;
  }
}
