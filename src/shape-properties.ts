import { Shape } from "./shapes.js";

import { ShapeSelectionEvent, ShapeSelectionListener } from "./shape-viewer.js";

/**
 * Handles the properties of the selected shape.
 */
export class PropertiesComponent implements ShapeSelectionListener {
  private _shape?: Shape;

  private _propertiesElement: HTMLElement;

  /**
   * Constructs the properties component.
   */
  public constructor(propertiesElement: HTMLElement) {
    this._propertiesElement = propertiesElement;
  }

  /**
   * Receives the selected shape.
   */
  public shapeSelected(e: ShapeSelectionEvent): void {
    this._shape = e.shape;
    this.render();
  }

  /**
   * Displays the properties of the selected shape.
   */
  private render(): void {
    if (!this._shape) {
      this._propertiesElement.innerHTML = "";
      return;
    }

    this._propertiesElement.innerHTML = `
      <label for="shape-style">Color</label>
      <input
        id="shape-style"
        type="color"
        value="${this._shape.style}"
      >
    `;

    const styleInput = document.getElementById(
      "shape-style",
    ) as HTMLInputElement;

    styleInput.addEventListener("input", () => {
      if (this._shape) {
        this._shape.style = styleInput.value;
      }
    });
  }
}
