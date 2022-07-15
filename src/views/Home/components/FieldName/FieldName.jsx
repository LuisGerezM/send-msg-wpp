import { Label } from "../FormFields/Labels/Label";
import { utilTransition } from "../../../../utilities/utilTransition";

import { motion } from "framer-motion";
import { InputStyled } from "../../../../App.styled";
import { DivFieldNameStyled } from "../../styled-components/Home.styled";

export const FieldName = ({ name, handleChangeName }) => {
  const pageTransition = utilTransition("transition");
  return (
    <motion.div initial="out" animate="in" exit="out" variants={pageTransition}>
      <DivFieldNameStyled name={name}>
        <Label text="Nombre:" />
        <InputStyled
          name="name"
          type="text"
          placeholder="Nombre autor del mensaje"
          onChange={handleChangeName}
          defaultValue={name}
        />
      </DivFieldNameStyled>
    </motion.div>
  );
};
