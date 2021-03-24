import React from 'react';
import Ripple from '../Ripple';

import Loading from '../Loading';

import * as s from './styles';
import { TButtonProps } from './types';

const Button: React.FC<TButtonProps> = ({
  children,
  disabled,
  isLoading,
  outlined,
  type = 'button',
  size = 'medium',
  variant,
  ...rest
}) => {
  return (
    <s.Button
      type={type}
      role="button"
      disabled={isLoading || disabled}
      size={size}
      outlined={outlined}
      variant={variant}
      {...rest}
    >
      {children}
      {isLoading ? (
        <s.LoadingContainer>
          <Loading color="darkestgrey" />
        </s.LoadingContainer>
      ) : null}
      {!isLoading && !disabled && <Ripple />}
    </s.Button>
  );
};

export { TButtonProps };

export default Button;
