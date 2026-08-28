import { CanvasController } from "./shape-controller.js";
import { StatusBar } from "./shape-status.js";
import { ShapeViewer } from "./shape-viewer.js";
import { PaletteComponent } from "./shape-palette.js";
import { SelectAction, AddShapeAction } from "./shape-actions.js";
import { Rectangle, Circle, Triangle } from "./shapes.js";

export class ShapeEditor {
  private _shapeView: ShapeViewer;

  private _palette: PaletteComponent;

  private _statusBar: StatusBar;

  private _canvasController: CanvasController;

  public constructor() {
    const canvas = document.getElementById("canvas") as HTMLCanvasElement;

    this._shapeView = new ShapeViewer(canvas);

    this._palette = new PaletteComponent(
      document.getElementById("palette") as HTMLElement,
      [
        new SelectAction(this._shapeView),
        new AddShapeAction(Rectangle, this._shapeView),
        new AddShapeAction(Circle, this._shapeView),
        new AddShapeAction(Triangle, this._shapeView),
      ],
    );

    this._statusBar = new StatusBar(
      document.getElementById("status") as HTMLElement,
    );

    this._palette.addPaletteListener(this._statusBar);

    this._canvasController = new CanvasController(
      this._palette.selectedAction,
      canvas,
    );

    this._palette.addPaletteListener(this._canvasController);
  }
}
