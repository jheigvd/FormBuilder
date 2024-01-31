// Exportation nommée
export class Field {
  // créer input
  #inputElement = document.createElement("input");

  constructor(options) {
    this.name = options.name;
    this.type = options.type;
    this.label = options.label;
  }

  render() {
    const div = document.createElement("div");
    div.classList.add("field-container");
    const label = document.createElement("label");
    label.innerText = this.label;
    // Assignez les propriétés d’instance type et name aux attributs correspondants de l’élément #inputElement .
    this.#inputElement.name = this.name;
    this.#inputElement.type = this.type;
    div.append(label);
    div.append(this.#inputElement);

    return div;
  }

  get value() {
    return this.#inputElement.value;
  }
}
