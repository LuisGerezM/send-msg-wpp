import { FormHome } from "./components/FormHome/FormHome";
import { useHome } from "./hooks/useHome";
import { motion } from "framer-motion";
import { FieldName } from "./components/FieldName/FieldName";
import { NumbersSended } from "./components/NumbersSended/NumbersSended";
import { AnchorTagToWpp } from "../../components/AnchorTagToWpp/AnchorTagToWpp";
import { DivStyled } from "./styled-components/Home.styled";
import { utilDefineUrl } from "../../utilities/utilDefineUrl";

export const Home = () => {
  const {
    messageToSend,
    phoneNumber,
    usedNumbers,
    handleMessageToSend,
    handlePhoneNumber,
    handleUsedNumbers,
    handleChangeName,
    doYouHaveAppWpp,
    handleDoYouHaveAppWpp,
    name,
    wppBtn,
    pageTransition,
  } = useHome();

  return (
    <DivStyled>
      <h2>Armá tu mensaje</h2>
      {!name && <FieldName name={name} handleChangeName={handleChangeName} />}
      {name && (
        <motion.div
          initial="out"
          animate="in"
          exit="out"
          variants={pageTransition}
        >
          <FieldName name={name} handleChangeName={handleChangeName} />
          <FormHome
            handleUsedNumbers={handleUsedNumbers}
            handleMessageToSend={handleMessageToSend}
            handlePhoneNumber={handlePhoneNumber}
            handleDoYouHaveAppWpp={handleDoYouHaveAppWpp}
            name={name}
          />
          {usedNumbers.length > 0 && (
            <NumbersSended usedNumbers={usedNumbers} />
          )}
        </motion.div>
      )}

      <AnchorTagToWpp
        url={utilDefineUrl(doYouHaveAppWpp, phoneNumber, messageToSend)}
        ref={wppBtn}
      />
    </DivStyled>
  );
};
