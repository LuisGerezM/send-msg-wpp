export const utilTransition = (transition) => {
  const transitionsTypes = {
    transition: {
      in: { opacity: 1, transition: { duration: 1 } },
      out: { opacity: 0, transition: { duration: 0 } },
    },
  };

  return transitionsTypes[transition];
};
