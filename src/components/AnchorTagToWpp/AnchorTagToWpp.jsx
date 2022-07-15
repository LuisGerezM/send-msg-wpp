import { forwardRef } from "react";

export const AnchorTagToWpp = forwardRef((props, ref) => (
  <a href={props.url} ref={ref} rel="noopener noreferrer" target="_blank">
    {" "}
  </a>
));
