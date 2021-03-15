import React from "react";

import { IButtonLinkComponentProps } from "./types";
import * as s from "./styles";

const ButtonLink: React.FC<IButtonLinkComponentProps> = ({
  children,
  elementContainer,
  to,
  ...rest
}) => {
  if (elementContainer) {
    return (
      <s.Link as={elementContainer} {...rest}>
        {children}
      </s.Link>
    );
  }

  return (
    <s.Link to={to || ""} {...rest}>
      {children}
    </s.Link>
  );
};

export default ButtonLink;
