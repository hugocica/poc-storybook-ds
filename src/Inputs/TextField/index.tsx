import React from 'react';

import * as s from './styles';
import { TTextFieldProps } from './types';

const TextField = ({
  className,
  label,
  outlined,
  prefix: Prefix,
  suffix: Suffix,
  style,
  color = 'white',
  ...rest
}: TTextFieldProps) => (
  <s.Container
    className={className}
    style={style}
    color={color}
    outlined={outlined}
  >
    {!!Prefix && <s.PrefixContainer>{Prefix}</s.PrefixContainer>}
    <s.InputContent>
      {label && <s.Label>{label}</s.Label>}
      <s.Input {...rest} />
    </s.InputContent>
    {!!Suffix && <s.SuffixContainer>{Suffix}</s.SuffixContainer>}
  </s.Container>
);

export default TextField;
