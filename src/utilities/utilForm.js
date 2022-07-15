const validationMessages = {
  name: {
    required: "Campo obligatorio",
    fieldLength: "El campo debe tener entre 2 y 30 caracteres",
    format: "El campo sólo puede contener letras",
  },
  greeting: {
    required: "Campo obligatorio",
  },
  bodyMsg: {
    required: "Campo obligatorio",
  },
  date: {
    required: "Campo obligatorio",
  },
  hour: {
    required: "Campo obligatorio",
    format: "El campo solo puede contener números",
  },
  numberToSend: {
    required: "Campo obligatorio",
    fieldLength: "El campo debe tener entre 9 y 15 caracteres",
    format: "El campo sólo puede contener números de teléfono válidos",
  },
};

const patternLetters = /^[\w'\-,.][^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]]{1,}$/g;
const patternNumbers = /[0-9]+$/g;

export { validationMessages, patternLetters, patternNumbers };
