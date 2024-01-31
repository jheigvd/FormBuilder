// Imports nommés :
import { Form } from "./src/modules/Form.js";
import { Field } from "./src/modules/Field.js";

const form = new Form("Signup");

const email = new Field({
  name: "email",
  type: "email",
  label: "email",
});

const password = new Field({
  name: "password",
  type: "password",
  label: "password",
});

form.addField(email).addField(password).render();
