import React from 'react';

import { ILinkProps } from './types';
import * as s from './styles';

const ButtonLink: React.FC<ILinkProps> = ({
  children,
  element = 'button',
  to,
  ...rest
}) => {
  return (
    <s.Link as={element} type="button" {...rest}>
      {children}
    </s.Link>
  );
};

export default ButtonLink;
