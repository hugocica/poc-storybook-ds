import React from "react";

import * as s from "./styles";
import { TTextProps } from "./types";

const Text = ({
  className,
  prefix: Prefix,
  suffix: Suffix,
  ...rest
}: TTextProps) => (
  <s.Container className={className}>
    {!!Prefix && <s.PrefixContainer>{Prefix}</s.PrefixContainer>}
    <s.Input {...rest} />
    {!!Suffix && <s.SuffixContainer>{Suffix}</s.SuffixContainer>}
  </s.Container>
);

export default Text;