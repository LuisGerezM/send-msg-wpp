import { useFormik } from "formik";
import {
  patternNumbers,
  validationMessages,
} from "../../../utilities/utilForm";
import * as yup from "yup";
import { utilDataSubmitForm } from "../../../utilities/utilDataSubmitForm";

export const useForm = ({
  handleUsedNumbers,
  handleMessageToSend,
  handlePhoneNumber,
  handleDoYouHaveAppWpp,
  name,
}) => {
  const initialValues = {
    greeting: "",
    bodyMsg: "",
    date: "",
    hour: "",
    numberToSend: "",
    checked: false,
  };

  const { greeting, bodyMsg, date, hour, numberToSend } = validationMessages;

  const validationSchema = yup.object().shape({
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

  const onSubmit = () => {
    const { message } = utilDataSubmitForm({
      dataFormik: formik.values,
      name,
    });

    handleDoYouHaveAppWpp(formik.values.checked);
    handlePhoneNumber("+549" + formik.values.numberToSend);
    handleUsedNumbers((prevValue) => [
      ...prevValue,
      formik.values.numberToSend,
    ]);
    handleMessageToSend(message);
  };

  const handleChangeCheckbox = () =>
    formik.setFieldValue("checked", !formik.values.checked);

  const formik = useFormik({ initialValues, validationSchema, onSubmit });

  return { formik, handleChangeCheckbox };
};
