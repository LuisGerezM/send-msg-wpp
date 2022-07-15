import { FormSpanError } from "./FormSpanError/FormSpanError";
import { Label } from "./Labels/Label";
import { DivFieldsFormStyled } from "../../styled-components/FormHome.styled";

export const FormFields = ({ error, touch, labelText, children }) => {
  return (
    <DivFieldsFormStyled>
      <Label text={labelText} />
      {children}
      {error && touch && <FormSpanError error={error} />}
    </DivFieldsFormStyled>
  );
};
