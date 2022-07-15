import styled from "styled-components";
import { DivFieldsStyled } from "../../../App.styled";

const DivStyled = styled.div`
  margin: 0 1rem;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h2 {
    padding: 5px 0;
    margin: 5px;
  }
`;

const DivFieldNameStyled = styled(DivFieldsStyled)`
  width: ${({ name }) => (name === "" ? "100%" : "75%")};
  margin: auto;
  text-align: center;
`;

export { DivStyled, DivFieldNameStyled };
