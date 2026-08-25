/**
 * Defines a location on a 2d plane, i.e. an (x,y) coordinate space.
 */
export class Point {
  // The X coordinate of the point.
  private _x: number;
  // The Y coordinate of the point.
  private _y: number;

  /**
   * Constructs and initializes a Point instance using the specified X and Y coordinates.
   * @param x the X coordinate of the newly created point.
   * @param y the Y coordinate of the newly created point.
   */
  public constructor(x: number, y: number) {
    this._x = x;
    this._y = y;
  }

  /**
   * Gets the X coordinate value of the point.
   */
  public get x(): number {
    return this._x;
  }

  /**
   * Gets the Y coordinate value of the point.
   */
  public get y(): number {
    return this._y;
  }

  /**
   * Returns a representation of this point in string format.
   * @returns a string representation for this point.
   */
  public toString(): string {
    return `${this.x}, ${this.y}`;
  }
}

/**
 * Defines a size using width and height values.
 */
export class Size {
  // The width of the size.
  private _width: number;
  // The height of the size.
  private _height: number;

  /**
   * Constructs and initializes a Size instance using the specified width and height.
   * @param width the width of the newly created size.
   * @param height the height of the newly created size.
   */
  public constructor(width: number, height: number) {
    this._width = width;
    this._height = height;
  }

  /**
   * Gets the width value of the size.
   */
  public get width(): number {
    return this._width;
  }

  /**
   * Gets the height value of the size.
   */
  public get height(): number {
    return this._height;
  }

  /**
   * Returns a representation of this size in string format.
   * @returns a string representation for this size.
   */
  public toString(): string {
    return `${this.width} x ${this.height}`;
  }
}

/**
 * Defines a shape that can be drawn on a canvas.
 */
export interface Shape {
  /**
   * Draws the shape using the specified canvas context.
   * @param ctx the canvas rendering context used for drawing.
   */
  draw(ctx: CanvasRenderingContext2D): void;

  /**
   * Returns a representation of the shape in string format.
   * @returns a string representation for the shape.
   */
  toString(): string;
}

/**
 * Defines the common properties and methods for shapes.
 */
export abstract class BaseShape implements Shape {
  // The drawing style of the shape.
  private _style: string;

  /**
   * Constructs and initializes a BaseShape using the specified style.
   * @param style the drawing style of the shape.
   */
  public constructor(style: string) {
    this._style = style;
  }

  /**
   * Gets the style of the shape.
   */
  public get style(): string {
    return this._style;
  }

  /**
   * Draws the shape using the specified canvas context.
   * @param ctx the canvas rendering context used for drawing.
   */
  public abstract draw(ctx: CanvasRenderingContext2D): void;

  /**
   * Returns a representation of this shape in string format.
   * @returns a string representation for this shape.
   */
  public toString(): string {
    return `Shape with style ${this.style}`;
  }
}

/**
 * Defines a rectangle with a location, size and style.
 */
export class Rectangle extends BaseShape {
  // The location of the rectangle.
  private location: Point;

  // The size of the rectangle.
  private size: Size;

  /**
   * Constructs and initializes a Rectangle using the specified values.
   * @param x the X coordinate of the rectangle.
   * @param y the Y coordinate of the rectangle.
   * @param width the width of the rectangle.
   * @param height the height of the rectangle.
   * @param style the drawing style of the rectangle.
   */
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

  /**
   * Draws the rectangle using the specified canvas context.
   * @param ctx the canvas rendering context used for drawing.
   */
  public override draw(ctx: CanvasRenderingContext2D): void {
    ctx.fillStyle = this.style;
    ctx.fillRect(
      this.location.x,
      this.location.y,
      this.size.width,
      this.size.height,
    );
  }

  /**
   * Returns a representation of this rectangle in string format.
   * @returns a string representation for this rectangle.
   */
  public override toString(): string {
    return `Rectangle with location ${this.location.toString()}, size ${this.size.toString()}, ${super.toString()}`;
  }
}

/**
 * Defines a circle with a center, radius and style.
 */
export class Circle extends BaseShape {
  // The center point of the circle.
  private center: Point;

  // The radius of the circle.
  private radius: number;

  /**
   * Constructs and initializes a Circle using the specified values.
   * @param x the X coordinate of the center.
   * @param y the Y coordinate of the center.
   * @param radius the radius of the circle.
   * @param style the drawing style of the circle.
   */
  public constructor(x: number, y: number, radius: number, style: string) {
    super(style);
    this.center = new Point(x, y);
    this.radius = radius;
  }

  /**
   * Draws the circle using the specified canvas context.
   * @param ctx the canvas rendering context used for drawing.
   */
  public override draw(ctx: CanvasRenderingContext2D): void {
    ctx.beginPath();
    ctx.arc(this.center.x, this.center.y, this.radius, 0, 2 * Math.PI);
    ctx.fillStyle = this.style;
    ctx.fill();
  }

  /**
   * Returns a representation of this circle in string format.
   * @returns a string representation for this circle.
   */
  public override toString(): string {
    return `Circle with center ${this.center.toString()}, radius ${this.radius}, ${super.toString()}`;
  }
}
