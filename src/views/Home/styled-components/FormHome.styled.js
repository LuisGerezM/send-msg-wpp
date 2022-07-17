import styled from "styled-components";
import { mobile, DivFieldsStyled, outlineFields } from "../../../App.styled";

const FormStyled = styled.form`
  margin-top: 10px;
  padding: 2rem;
  border: 7px groove hsla(187, 97%, 29%, 1);
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  ${mobile} {
    border: none;
  }
`;

const GroupFieldsStyled = styled.div`
  display: flex;
  ${mobile} {
    flex-wrap: wrap;
  }
`;

const DivFieldsFormStyled = styled(DivFieldsStyled)`
  width: 100%;
`;

const SelectStyled = styled.select`
  height: 2.5rem;
  padding: 10px;
  border-radius: 8px;
  background-color: hsl(0, 0%, 100%);
  border: 2px solid hsl(203, 89%, 53%);

  &:focus {
    outline: ${outlineFields};
  }
`;

const ToggleSwitchStyled = styled.div`
  position: relative;
  width: 120px;
  display: inline-block;
  text-align: left;
  top: 8px;
  margin: 8px 0 13px;
`;

const LabelToggleStyled = styled.label`
  display: block;
  overflow: hidden;
  cursor: pointer;
  border: 0 solid #bbb;
  border-radius: 20px;
`;

const InnerSpanStyled = styled.span`
  display: block;
  width: 200%;
  margin-left: -100%;
  transition: margin 0.3s ease-in 0s;

  &:before,
  &:after {
    float: left;
    width: 50%;
    height: 36px;
    padding: 0;
    line-height: 36px;
    color: #fff;
    font-weight: bold;
    box-sizing: border-box;
  }

  &:before {
    content: "Lunes";
    padding: 1px 20px;
    background-color: hsl(220 89% 37%);
    color: #fff;
  }

  &:after {
    content: "Miércoles";
    padding: 1px 10px;
    background-color: hsl(146, 68%, 55%);
    color: hsl(220 89% 0%);
    text-align: right;
  }
`;

const SwitchSpanStyled = styled.span`
  display: block;
  width: 24px;
  margin: 5px;
  background: #fff;
  position: absolute;
  top: 0;
  bottom: 0;
  right: 84px;
  border: 0 solid #bbb;
  border-radius: 20px;
  transition: all 0.3s ease-in 0s;
`;

const CheckboxStyled = styled.input`
  display: none;

  &:checked + ${LabelToggleStyled} ${InnerSpanStyled} {
    margin-left: 0;
  }

  &:checked + ${LabelToggleStyled} ${SwitchSpanStyled} {
    right: 0px;
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
  GroupFieldsStyled,
  DivFieldsFormStyled,
  SelectStyled,
  TextAreaStyled,
  LabelStyled,
  ButtonStyled,
  SpanStyled,
  ToggleSwitchStyled,
  CheckboxStyled,
  LabelToggleStyled,
  InnerSpanStyled,
  SwitchSpanStyled,
};
