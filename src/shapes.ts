export class Rectangle {
  x: number;
  y: number;
  width: number;
  height: number;
  style: string;

  constructor(
    x: number,
    y: number,
    width: number,
    height: number,
    style: string,
  ) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.style = style;
  }

  draw(ctx: CanvasRenderingContext2D) {
    ctx.fillStyle = this.style;
    ctx.fillRect(this.x, this.y, this.width, this.height);
  }
}

export class Circle {
  x: number;
  y: number;
  radius: number;
  style: string;

  constructor(x: number, y: number, radius: number, style: string) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.style = style;
  }

  draw(ctx: CanvasRenderingContext2D) {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
    ctx.fillStyle = this.style;
    ctx.fill();
  }
}
