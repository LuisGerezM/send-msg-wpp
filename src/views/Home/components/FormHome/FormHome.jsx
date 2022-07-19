import { FormSelect } from "../FormFields/FormSelect/FormSelect";
import { FormInput } from "../FormFields/FormInput/FormInput";
import { FormTextArea } from "../FormFields/FormTextArea/FormTextArea";
import { useForm } from "../../hooks/useForm";
import { FormFields } from "../FormFields/FormFields";

import {
  ButtonStyled,
  CheckboxStyled,
  FormStyled,
  GroupFieldsStyled,
  InnerSpanStyled,
  LabelToggleStyled,
  SwitchSpanStyled,
  ToggleSwitchStyled,
} from "../../styled-components/FormHome.styled";

export const FormHome = ({
  handleUsedNumbers,
  handleMessageToSend,
  handlePhoneNumber,
  handleDoYouHaveAppWpp,
  name,
}) => {
  const {
    formik: { handleSubmit, handleChange, handleBlur, errors, touched },
    handleChangeCheckbox,
    handleChangedToggle,
    handleChangeTextArea,
    msgToSend,
  } = useForm({
    handleUsedNumbers,
    handleMessageToSend,
    handlePhoneNumber,
    handleDoYouHaveAppWpp,
    name,
  });

  return (
    <>
      <FormStyled onSubmit={handleSubmit}>
        <GroupFieldsStyled>
          <FormFields
            error={errors.greeting}
            touch={touched.greeting}
            labelText="Saludo:"
          >
            <FormSelect handleChange={handleChange} handleBlur={handleBlur} />
          </FormFields>

          <FormFields
            error={errors.date}
            touch={touched.date}
            labelText="Día del turno:"
          >
            <FormInput
              name="date"
              type="date"
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </FormFields>

          <FormFields error="" touch="" labelText="Hora:">
            <FormInput name="hour" type="time" onChange={handleChange} />
          </FormFields>
        </GroupFieldsStyled>

        <FormFields
          error={errors.numberToSend}
          touch={touched.numberToSend}
          labelText="Número de teléfono:"
        >
          <FormInput
            name="numberToSend"
            type="text"
            placeholder="Ingresá el número al que va dirigido el mensaje. EJ: 3855004185"
            onChange={handleChange}
            onBlur={handleBlur}
          />
        </FormFields>

        <ToggleSwitchStyled>
          <CheckboxStyled
            type="checkbox"
            name="switch"
            id="switch"
            onClick={handleChangedToggle}
          />
          <LabelToggleStyled htmlFor="switch">
            <InnerSpanStyled className="inner" value="aaaaa" />
            <SwitchSpanStyled className="switch" value="bbbb" />
          </LabelToggleStyled>
        </ToggleSwitchStyled>

        <FormFields
          error={errors.bodyMsg}
          touch={touched.bodyMsg}
          labelText="Cuerpo del mensaje:"
        >
          <FormTextArea
            handleChangeTextArea={handleChangeTextArea}
            handleBlur={handleBlur}
            name="bodyMsg"
            placeholder="Ingresá tu mensaje. Por ej: Usted tiene un turno agendado."
            value={msgToSend}
          />
        </FormFields>

        <div>
          <input id="haveApp" onChange={handleChangeCheckbox} type="checkbox" />
          <label htmlFor="#haveApp">
            Click si tienes la aplicación de wpp instalada
          </label>
        </div>

        <ButtonStyled type="submit">Enviar</ButtonStyled>
      </FormStyled>
    </>
  );
};
