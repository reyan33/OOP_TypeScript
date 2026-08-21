class Point {
  x: number;
  y: number;

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }
}

class Size {
  width: number;
  height: number;

  constructor(width: number, height: number) {
    this.width = width;
    this.height = height;
  }
}

export class Rectangle {
  location: Point;
  size: Size;
  style: string;

  constructor(
    x: number,
    y: number,
    width: number,
    height: number,
    style: string,
  ) {
    this.location = new Point(x, y);
    this.size = new Size(width, height);
    this.style = style;
  }

  draw(ctx: CanvasRenderingContext2D) {
    ctx.fillStyle = this.style;
    ctx.fillRect(
      this.location.x,
      this.location.y,
      this.size.width,
      this.size.height,
    );
  }
}
export class Circle {
  center: Point;
  radius: number;
  style: string;

  constructor(x: number, y: number, radius: number, style: string) {
    this.center = new Point(x, y);
    this.radius = radius;
    this.style = style;
  }

  draw(ctx: CanvasRenderingContext2D) {
    ctx.beginPath();
    ctx.arc(this.center.x, this.center.y, this.radius, 0, 2 * Math.PI);
    ctx.fillStyle = this.style;
    ctx.fill();
  }
}
