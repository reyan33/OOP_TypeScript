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
   * Creates a shape at the specified position.
   * @param x the X coordinate.
   * @param y the Y coordinate.
   * @returns a new Shape.
   */
  public static initWithXY(x: number, y: number): Shape {
    throw Error("Implement this method");
  }

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

  public static initWithXY(x: number, y: number): Rectangle {
    return new Rectangle(x, y, 100, 100, "#f36a2e");
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
   * Creates a Circle at the specified position.
   * @param x the X coordinate of the circle.
   * @param y the Y coordinate of the circle.
   * @returns a new Circle.
   */
  public static initWithXY(x: number, y: number): Circle {
    return new Circle(x, y, 50, "#f36a2e");
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

/**
 * Defines a triangle with a location, size and style.
 */
export class Triangle extends BaseShape {
  // The location of the triangle.
  private location: Point;

  // The size of the triangle.
  private size: Size;

  /**
   * Constructs and initializes a Triangle using the specified values.
   * @param x the X coordinate of the triangle.
   * @param y the Y coordinate of the triangle.
   * @param width the width of the triangle.
   * @param height the height of the triangle.
   * @param style the drawing style of the triangle.
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
   * Creates a Triangle at the specified position.
   * @param x the X coordinate of the triangle.
   * @param y the Y coordinate of the triangle.
   * @returns a new Triangle.
   */
  public static initWithXY(x: number, y: number): Triangle {
    return new Triangle(x, y, 100, 100, "#f36a2e");
  }

  /**
   * Draws the triangle using the specified canvas context.
   * @param ctx the canvas rendering context used for drawing.
   */
  public override draw(ctx: CanvasRenderingContext2D): void {
    ctx.fillStyle = this.style;
    ctx.beginPath();

    ctx.moveTo(this.location.x + this.size.width / 2, this.location.y);

    ctx.lineTo(this.location.x, this.location.y + this.size.height);

    ctx.lineTo(
      this.location.x + this.size.width,
      this.location.y + this.size.height,
    );

    ctx.closePath();
    ctx.fill();
  }

  /**
   * Returns a representation of this triangle in string format.
   * @returns a string representation for this triangle.
   */
  public override toString(): string {
    return `Triangle with location ${this.location.toString()}, size ${this.size.toString()}, ${super.toString()}`;
  }
}

/**
 * Defines a rhombus with a location, size and style.
 */
export class Rhombus extends BaseShape {
  // The location of the rhombus.
  private location: Point;

  // The size of the rhombus.
  private size: Size;

  /**
   * Constructs and initializes a Rhombus using the specified values.
   * @param x the X coordinate of the rhombus.
   * @param y the Y coordinate of the rhombus.
   * @param width the width of the rhombus.
   * @param height the height of the rhombus.
   * @param style the drawing style of the rhombus.
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
   * Creates a Rhombus at the specified position.
   * @param x the X coordinate of the rhombus.
   * @param y the Y coordinate of the rhombus.
   * @returns a new Rhombus.
   */
  public static initWithXY(x: number, y: number): Rhombus {
    return new Rhombus(x, y, 100, 140, "#f36a2e");
  }

  /**
   * Draws the rhombus using the specified canvas context.
   * @param ctx the canvas rendering context used for drawing.
   */
  public override draw(ctx: CanvasRenderingContext2D): void {
    ctx.beginPath();

    ctx.moveTo(this.location.x + this.size.width / 2, this.location.y);

    ctx.lineTo(
      this.location.x + this.size.width,
      this.location.y + this.size.height / 2,
    );

    ctx.lineTo(
      this.location.x + this.size.width / 2,
      this.location.y + this.size.height,
    );

    ctx.lineTo(this.location.x, this.location.y + this.size.height / 2);

    ctx.closePath();
    ctx.fillStyle = this.style;
    ctx.fill();
  }

  /**
   * Returns a representation of this rhombus in string format.
   * @returns a string representation for this rhombus.
   */
  public override toString(): string {
    return `Rhombus with location ${this.location.toString()}, size ${this.size.toString()}, ${super.toString()}`;
  }
}

/**
 * Defines a trapezoid with a location, size and style.
 */
export class Trapezoid extends BaseShape {
  // The location of the trapezoid.
  private location: Point;

  // The size of the trapezoid.
  private size: Size;

  /**
   * Constructs and initializes a Trapezoid using the specified values.
   * @param x the X coordinate of the trapezoid.
   * @param y the Y coordinate of the trapezoid.
   * @param width the width of the trapezoid.
   * @param height the height of the trapezoid.
   * @param style the drawing style of the trapezoid.
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
   * Creates a Trapezoid at the specified position.
   * @param x the X coordinate of the trapezoid.
   * @param y the Y coordinate of the trapezoid.
   * @returns a new Trapezoid.
   */
  public static initWithXY(x: number, y: number): Trapezoid {
    return new Trapezoid(x, y, 120, 80, "#f36a2e");
  }

  /**
   * Draws the trapezoid using the specified canvas context.
   * @param ctx the canvas rendering context used for drawing.
   */
  public override draw(ctx: CanvasRenderingContext2D): void {
    ctx.beginPath();

    ctx.moveTo(this.location.x + 40, this.location.y);
    ctx.lineTo(this.location.x + this.size.width - 40, this.location.y);
    ctx.lineTo(
      this.location.x + this.size.width,
      this.location.y + this.size.height,
    );
    ctx.lineTo(this.location.x, this.location.y + this.size.height);

    ctx.closePath();
    ctx.fillStyle = this.style;
    ctx.fill();
  }

  /**
   * Returns a representation of this trapezoid in string format.
   * @returns a string representation for this trapezoid.
   */
  public override toString(): string {
    return `Trapezoid with location ${this.location.toString()}, size ${this.size.toString()}, ${super.toString()}`;
  }
}
