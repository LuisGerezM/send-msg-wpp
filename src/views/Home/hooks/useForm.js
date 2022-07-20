import { useFormik } from "formik";
import {
  separateStringValues,
  validateFieldsWithYup,
  validationMessages,
} from "../../../utilities/utilForm";

import { utilDataSubmitForm } from "../../../utilities/utilDataSubmitForm";
import { useEffect, useRef, useState } from "react";

const { REACT_APP_MONDAY: MONDAY, REACT_APP_WEDNESDAY: WEDNESDAY } =
  process.env;

export const useForm = ({
  handleUsedNumbers,
  handleMessageToSend,
  handlePhoneNumber,
  handleDoYouHaveAppWpp,
  name,
}) => {
  const refCheckCopyPaste = useRef(null);

  const initialValues = {
    greeting: "",
    bodyMsg: "",
    date: "",
    hour: "",
    numberToSend: "",
    checked: false,
  };

  const [switchToggleButton, setSwitchToggleButton] = useState(false);
  const [msgToSend, setMsgToSend] = useState("");
  const [messageSelected, setMessageSelected] = useState("");

  const [showInputCopyPasteNameAndPhone, setShowInputCopyPasteNameAndPhone] =
    useState(false);

  const { greeting, bodyMsg, date, hour, numberToSend } = validationMessages;

  const validationSchema = validateFieldsWithYup({
    greeting,
    bodyMsg,
    date,
    hour,
    numberToSend,
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

  const formik = useFormik({ initialValues, validationSchema, onSubmit });

  const handleChangeCheckbox = () =>
    formik.setFieldValue("checked", !formik.values.checked);

  const handleChangedToggle = () => {
    setSwitchToggleButton((prevValue) => !prevValue);
  };

  const handleChangeTextArea = (event) => {
    setMsgToSend(event.target.value);
    formik.setFieldValue("bodyMsg", event.target.value);
  };

  const handleCheckCopyAndPaste = () => {
    setShowInputCopyPasteNameAndPhone((prevValue) => !prevValue);
  };

  const handleChangeCopyPaste = (event) => {
    if (showInputCopyPasteNameAndPhone) {
      if (event.target.value.length > 16) {
        const arrayString = separateStringValues(event.target.value);
        const { numberPhone, nameToSend } = arrayString;

        formik.setFieldValue(
          "bodyMsg",
          `${nameToSend} ${formik.values.bodyMsg}`
        );
        setMsgToSend(`${nameToSend} ${formik.values.bodyMsg}`);
        formik.setFieldValue("numberToSend", `${numberPhone}`);
      } else {
        formik.setFieldValue("bodyMsg", messageSelected);
        setMsgToSend(messageSelected);
        formik.setFieldValue("numberToSend", "");
      }
    } else {
      refCheckCopyPaste.current.click();
      setShowInputCopyPasteNameAndPhone(false);
    }
  };

  useEffect(() => {
    if (switchToggleButton) {
      setMsgToSend(MONDAY);
      formik.setFieldValue("bodyMsg", MONDAY);
      setMessageSelected(MONDAY);
    } else {
      setMsgToSend(WEDNESDAY);
      formik.setFieldValue("bodyMsg", WEDNESDAY);
      setMessageSelected(WEDNESDAY);
    }

    return () => {};
  }, [switchToggleButton]);

  return {
    formik,
    handleChangeCheckbox,
    setSwitchToggleButton,
    handleChangedToggle,
    msgToSend,
    handleChangeTextArea,
    handleChangeCopyPaste,
    handleCheckCopyAndPaste,
    showInputCopyPasteNameAndPhone,
    refCheckCopyPaste,
  };
};
