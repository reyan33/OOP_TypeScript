import { ShapeViewer } from "./shape-viewer.js";

/**
 * Defines an action that can be used on the canvas.
 */
export interface CanvasAction {
  readonly name: string;

  readonly id: string;

  readonly status: string;

  /**
   * This method is invoked by the controller.
   *
   * @param e browser mouse event.
   */
  onClick(e: MouseEvent): void;
}

/**
 * Base class for canvas actions.
 */
abstract class BaseAction implements CanvasAction {
  private _shapeView: ShapeViewer;

  public constructor(shapeView: ShapeViewer) {
    this._shapeView = shapeView;
  }

  /**
   * Returns an id based on the action name.
   */
  public get id(): string {
    return this.name.toLowerCase().split(" ").join("-");
  }

  /**
   * Returns the ShapeViewer used by the action.
   */
  public get shapeViewer(): ShapeViewer {
    return this._shapeView;
  }

  public abstract get name(): string;

  public abstract get status(): string;

  public abstract onClick(e: MouseEvent): void;
}

/**
 * Action used for selecting a shape.
 */
export class SelectAction extends BaseAction {
  public get name(): string {
    return "Select";
  }

  public get status(): string {
    return "Click the canvas to select a shape";
  }

  public onClick(e: MouseEvent): void {
    const shape = this.shapeViewer.getShapeAt(e.offsetX, e.offsetY);

    if (shape) {
      this.shapeViewer.selectShape(shape);
    } else {
      this.shapeViewer.clearSelection();
    }
  }
}

/**
 * Action used for adding a shape.
 */
export class AddShapeAction extends BaseAction {
  private _shapeClass: any;

  public constructor(shapeClass: any, shapeViewer: ShapeViewer) {
    super(shapeViewer);
    this._shapeClass = shapeClass;
  }

  public get name(): string {
    return `Add ${this._shapeClass.name}`;
  }

  public get status(): string {
    return `Click the drawing area to add a ${this._shapeClass.name}`;
  }

  public onClick(e: MouseEvent): void {
    const shape = this._shapeClass.initWithXY(e.offsetX, e.offsetY);
    this.shapeViewer.addShape(shape);
  }
}
