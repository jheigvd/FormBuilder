// Exportation nommée
export class Field {
  #inputElement = document.createElement("input");

  constructor(options) {
    this.name = options.name;
    this.type = options.type;
    this.label = options.label;
  }

  render() {
    const labelElement = document.createElement("label");
    labelElement.innerText = this.label;

    this.#inputElement.name = this.name;
    this.#inputElement.type = this.type;

    const fieldContainer = document.createElement("div");
    fieldContainer.classList.add("field-container");

    fieldContainer.append(labelElement);
    fieldContainer.append(this.#inputElement);

    return fieldContainer;
  }

  get value() {
    return this.#inputElement.value;
  }
}
