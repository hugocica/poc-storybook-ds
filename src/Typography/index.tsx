import React from "react";

import * as s from "./styles";
import { ITypographyProps } from "./types";

const Typography: React.FC<ITypographyProps> = ({
  children,
  color = "darkestgrey",
  type = "body1",
  variant = "p",
  ...rest
}) => (
  <s.Text as={variant} color={color} type={type} {...rest}>
    {children}
  </s.Text>
);

export default Typography;
