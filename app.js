// Imports nommés :
import { Form } from "./src/modules/Form.js";
import { Field } from "./src/modules/Field.js";


// Field.prototype.render = function () {};
// Exemple d'utilisation dans la console :

//créer un formulaire avec title
const form = new Form("Signup");
console.log(form);
// créer des champs avec name, type, label
const email = new Field({
  name: "email",
  type: "email",
  label: "email",
});
console.log(emailField);

const password = new Field({
  name: "password",
  type: "password",
  label: "password",
});
console.log(passwordField);

form.addField(email).addField(password).render();
// ajouter des champs à un formulaire
// form.addField(email);
// form.addField(password);
// afficher le formulaire
// form.render();
