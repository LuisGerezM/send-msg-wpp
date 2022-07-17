import { TextAreaStyled } from "../../../styled-components/FormHome.styled";

export const FormTextArea = ({
  handleChangeTextArea,
  handleBlur,
  name,
  placeholder,
  value,
}) => {
  return (
    <TextAreaStyled
      name={name}
      rows="10"
      cols="30"
      placeholder={placeholder}
      onChange={handleChangeTextArea}
      onBlur={handleBlur}
      value={value}
    />
  );
};
