import styled, { createGlobalStyle } from "styled-components";

const mobileWidth = 600;

const mobile = `@media (max-width: ${mobileWidth}px)`;


const outlineFields = "3px solid hsl(203, 89%, 53%)";

const InputStyled = styled.input`
  height: 1rem;
  padding: 10px;
  border-radius: 8px;
  border: 2px solid hsl(203, 89%, 53%);

  &:focus {
    outline: ${outlineFields};
  }
`;

const DivFieldsStyled = styled.div`
  margin: 2px 0;
  display: flex;
  flex-direction: column;
  transition: 1s;

  span {
    font-size: 13px;
    color: hsl(348, 97%, 39%);
    padding: 3px 0 0 5px;
  }
`;

export {
  InputStyled,
  DivFieldsStyled,
  outlineFields,
  mobile,
};

export const GlobalStyle = createGlobalStyle`
    body{
        margin: 0;
        font-family: 'Inter', sans-serif;
        background: linear-gradient(215deg,hsl(220 89% 37%),hsl(183 51% 54%), hsl(146, 68%, 55%));
    }
`;
