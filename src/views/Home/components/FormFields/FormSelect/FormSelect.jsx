import { SelectStyled } from "../../../styled-components/FormHome.styled";

export const FormSelect = ({ handleChange, handleBlur }) => {
  return (
    <SelectStyled name="greeting" onChange={handleChange} onBlur={handleBlur}>
      <option value=""> Selecciona una opción</option>
      <option value="good-morning">Buenos días</option>
      <option value="good-night">Buenas noches</option>
      <option value="good-afternoon">Buenas tardes</option>
    </SelectStyled>
  );
};
