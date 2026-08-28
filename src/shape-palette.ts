import { CanvasAction } from "./shape-actions.js";

/**
 * Event used when the selected action changes.
 */
export class SelectedActionChangedEvent {
  private _action: CanvasAction;

  public constructor(action: CanvasAction) {
    this._action = action;
  }

  public get action(): CanvasAction {
    return this._action;
  }
}

/**
 * Defines a listener for palette changes.
 */
export interface PaletteListener {
  selectedActionChanged(e: SelectedActionChangedEvent): void;
}

/**
 * Handles the palette and its actions.
 */
export class PaletteComponent {
  private _paletteElement: HTMLElement;

  private _listeners: PaletteListener[];

  private _actions: CanvasAction[];

  private _selectedAction: CanvasAction;

  public constructor(paletteElement: HTMLElement, actions: CanvasAction[]) {
    this._paletteElement = paletteElement;
    this._listeners = [];
    this._actions = actions;
    this._selectedAction = actions[0];

    this._actions.forEach((action) => {
      const button = document.createElement("button");

      button.textContent = action.name;
      button.id = action.id;

      button.addEventListener("click", () => {
        this.selectedAction = action;
      });

      this._paletteElement.appendChild(button);
    });
  }

  public addPaletteListener(listener: PaletteListener): void {
    this._listeners.push(listener);
  }

  public get selectedAction(): CanvasAction {
    return this._selectedAction;
  }

  public set selectedAction(selectedAction: CanvasAction) {
    this._selectedAction = selectedAction;

    this.fireSelectedActionChangedEvent(
      new SelectedActionChangedEvent(this.selectedAction),
    );
  }

  private fireSelectedActionChangedEvent(e: SelectedActionChangedEvent): void {
    this._listeners.forEach((listener) => {
      listener.selectedActionChanged(e);
    });
  }
}
