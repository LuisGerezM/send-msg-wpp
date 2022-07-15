import { debounce } from "debounce";
import { createRef, useEffect, useState } from "react";
import { utilTransition } from "../../../utilities/utilTransition";

export const useHome = () => {
  const wppBtn = createRef();

  const pageTransition = utilTransition("transition");

  const [name, setName] = useState("");
  const [changeName, setChangeName] = useState(null);

  const [messageToSend, setMessageToSend] = useState(null);
  const [phoneNumber, setPhoneNumber] = useState(null);
  const [doYouHaveAppWpp, setDoYouHaveAppWpp] = useState(false);

  const [usedNumbers, setUsedNumbers] = useState([]);

  const handleMessageToSend = (value) => setMessageToSend(value);
  const handlePhoneNumber = (value) => setPhoneNumber(value);
  const handleUsedNumbers = (value) => setUsedNumbers(value);
  const handleDoYouHaveAppWpp = (value) => setDoYouHaveAppWpp(value);

  const handleChangeName = debounce((event) => {
    setChangeName(event.target.value);
  }, 1000);

  useEffect(() => {
    if (changeName) setName(changeName);
    else setName("");
  }, [changeName]);

  useEffect(() => {
    if (messageToSend && phoneNumber) {
      wppBtn.current.click();
    }
    return () => {
      handlePhoneNumber(null);
    };
  }, [messageToSend, phoneNumber, wppBtn]);

  return {
    messageToSend,
    phoneNumber,
    usedNumbers,
    handleMessageToSend,
    handlePhoneNumber,
    handleUsedNumbers,
    handleChangeName,
    handleDoYouHaveAppWpp,
    doYouHaveAppWpp,
    name,
    wppBtn,
    pageTransition,
  };
};
