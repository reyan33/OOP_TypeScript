import {
  PaletteListener,
  SelectedActionChangedEvent,
} from "./shape-palette.js";

export class StatusBar implements PaletteListener {
  private _statusElement: HTMLElement;

  public constructor(statusElement: HTMLElement) {
    this._statusElement = statusElement;
  }

  public selectedActionChanged(e: SelectedActionChangedEvent): void {
    this._statusElement.innerHTML = e.action.status;
  }
}
