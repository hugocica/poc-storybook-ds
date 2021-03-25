import React from 'react';

import { ILinkProps } from './types';
import * as s from './styles';

const ButtonLink: React.FC<ILinkProps> = ({
  children,
  to,
  element = 'button',
  variant = 'primary',
  ...rest
}) => {
  return (
    <s.Link as={element} type="button" variant={variant} {...rest}>
      {children}
    </s.Link>
  );
};

export default ButtonLink;
