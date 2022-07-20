import * as yup from "yup";

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

const separateStringValues = (string) => {
  const arrayString = string.split("-");
  const numberPhone = arrayString[1].trim();
  const nameToSend = arrayString[0].trim();

  return { numberPhone, nameToSend };
};

const validateFieldsWithYup = ({
  greeting,
  bodyMsg,
  date,
  hour,
  numberToSend,
}) =>
  yup.object().shape({
    greeting: yup.string().required(greeting.required),
    bodyMsg: yup.string().required(bodyMsg.required),
    date: yup.date().required(date.required),
    hour: yup.string().matches(patternNumbers, hour.format),
    numberToSend: yup
      .string()
      .matches(patternNumbers, numberToSend.format)
      .min(9, numberToSend.fieldLength)
      .max(15, numberToSend.fieldLength)
      .required(numberToSend.required),
  });

export {
  validationMessages,
  patternLetters,
  patternNumbers,
  separateStringValues,
  validateFieldsWithYup,
};
