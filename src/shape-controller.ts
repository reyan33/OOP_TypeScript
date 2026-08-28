import { CanvasAction } from "./shape-actions.js";
import {
  PaletteListener,
  SelectedActionChangedEvent,
} from "./shape-palette.js";

export class CanvasController implements PaletteListener {
  private _currentAction: CanvasAction;

  public constructor(initialAction: CanvasAction, canvas: HTMLElement) {
    this._currentAction = initialAction;

    canvas.addEventListener("click", (e) => {
      this._currentAction.onClick(e);
    });
  }

  public selectedActionChanged(e: SelectedActionChangedEvent): void {
    this._currentAction = e.action;
  }
}
