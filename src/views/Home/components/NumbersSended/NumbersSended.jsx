import { SpanStyled } from "../../styled-components/FormHome.styled";

export const NumbersSended = ({ usedNumbers }) => {
  return (
    <>
      <h2>Números enviados</h2>
      <SpanStyled>
        {usedNumbers.map((number, index) => (
          <div key={index}>
            <strong>{index + 1}-</strong> <i>{number}</i>
          </div>
        ))}
      </SpanStyled>
    </>
  );
};
