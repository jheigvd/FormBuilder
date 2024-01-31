// Imports nommés :
import { Field } from "./Field.js";

// Exportation nommée
export class Form {
  #fields = [];
  #formElement = document.createElement("form");

  constructor(title) {
    this.title = title;
  }

  addField(field) {
    // Gérez le cas où on donnerait autre chose qu’une instance de Field en argument à cette méthode.
    if (field instanceof Field) {
      this.#fields.push(field); // ajoute une instance de Field au tableau #fields
      console.log(` Field ${field.name} ajouté au formulaire`);
    } else {
      throw new Error(`${field} n'est pas une instance de Field`);
    }
  }
  // créé, affiche, insère dans le DOM et traite les événements liés au formulaire.

  render() {
    // Créez un élément <h1> dont le contenu est le titre du formulaire, puis apposez ce nouvel élément à #formElement avec append().
    const h1 = document.createElement("h1");
    h1.textContent = this.title;
    this.#formElement.append(h1);
    // Pour chaque instance de Field se trouvant dans le tableau #fields, générez les éléments HTML propres à ce dernier,
    //en appelant une méthode Field.prototype.render() que vous créerez plus loin.Ajoutez le retour de cette méthode au formulaire avec append()
    this.#fields.forEach((field) => {
      const instanceField = field.render();
      this.#formElement.append(instanceField);
    });
    // Créez un élément qui prend cette forme: <button type=”submit”>Submit</button> . Ajoutez cet élément au formulaire.

    const button = document.createElement("button");
    button.type = "submit";
    button.textContent = "Submit";
    this.#formElement.append(button);
    //Ajoutez un Event Listener  “submit”,  callback #submit()
    // manuellement attribuer this à notre callback.
    this.#formElement.addEventListener("submit", this.#submit.bind(this));
    // Ajoutez la totalité du formulaire au DOM

    document.body.append(this.#formElement);
  }

  #submit(e) {
    // Permet d’empêcher le rafraîchissement de la page lors de la soumission du formulaire.
    e.preventDefault();

    // Collecter les valeurs des champs du formulaire. formData sera un objet
    // avec des paires clé-valeur faisant référence au nom et à la valeur de chaque champ.

    const formData = this.#fields.map((field) => {
      return {
        [field.name]: field.value,
      };
    });

    // Trouver l’élément toast et lui ajouter la classe "show".
    const toastElement = document.querySelector("#toast");
    toastElement.classList.add("show");

    // Définir le contenu textuel de l’élément toast pour qu’il soit une représentation JSON de formData.
    toastElement.textContent = formData.map((el) => JSON.stringify(el));

    // Attendre 5 secondes, puis supprimer la classe show du toast.
    setTimeout(() => {
      toastElement.classList.remove("show");
    }, 5000);

    return formData;
  }
}
