import { TextAreaStyled } from "../../../styled-components/FormHome.styled";

export const FormTextArea = ({
  handleChange,
  handleBlur,
  name,
  placeholder,
}) => {
  return (
    <TextAreaStyled
      name={name}
      rows="10"
      cols="30"
      placeholder={placeholder}
      onChange={handleChange}
      onBlur={handleBlur}
    />
  );
};
