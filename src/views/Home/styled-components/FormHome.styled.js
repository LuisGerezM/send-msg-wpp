import styled from "styled-components";
import { DivFieldsStyled, outlineFields } from "../../../App.styled";

const FormStyled = styled.form`
  margin-top: 10px;
  padding: 2rem;
  border: 7px groove hsla(187, 97%, 29%, 1);
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const DivFieldsFormStyled = styled(DivFieldsStyled)`
  width: 100%;
`;

const SelectStyled = styled.select`
  height: 2.7rem;
  padding: 10px;
  border-radius: 8px;
  border: 2px solid hsl(203, 89%, 53%);

  &:focus {
    outline: ${outlineFields};
  }
`;

const TextAreaStyled = styled.textarea`
  padding: 10px;
  border-radius: 8px;
  border: 2px solid hsl(203, 89%, 53%);

  &:focus {
    outline: ${outlineFields};
  }
`;

const LabelStyled = styled.label`
  font-weight: bold;
`;

const ButtonStyled = styled.button`
  margin-top: 5px;
  width: 50%;
  padding: 10px;
  font-weight: bold;
  color: hsl(0, 0%, 0%);
  background: linear-gradient(
    45deg,
    hsl(220 89% 37%),
    hsl(183 51% 54%),
    hsl(146, 68%, 55%)
  );
  border: 2px solid hsl(203, 89%, 53%);

  &:hover {
    background: linear-gradient(
      215deg,
      hsl(220 89% 37%),
      hsl(183 51% 54%),
      hsl(146, 68%, 55%)
    );
    color: hsl(0, 0%, 100%);
  }
`;

const SpanStyled = styled.span`
  display: flex;
  padding-bottom: 30px;

  div {
    margin: 0 5px;
  }
`;

export {
  FormStyled,
  DivFieldsFormStyled,
  SelectStyled,
  TextAreaStyled,
  LabelStyled,
  ButtonStyled,
  SpanStyled,
};
