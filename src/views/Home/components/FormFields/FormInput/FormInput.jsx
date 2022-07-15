import { InputStyled } from "../../../../../App.styled";

export const FormInput = ({
  name,
  type,
  onChange,
  onBlur,
  min = undefined,
  placeholder = undefined,
}) => {
  return (
    <InputStyled
      name={name}
      type={type}
      onChange={onChange}
      onBlur={onBlur}
      min={min}
      placeholder={placeholder}
    />
  );
};
