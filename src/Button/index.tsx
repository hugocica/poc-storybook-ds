import React from "react";
import Ripple from "../Ripple";

// import { LoadingSpinner } from 'components/Loading';

import * as s from "./styles";
import { TButtonComponentProps } from "./types";

const Button: React.FC<
  TButtonComponentProps & React.ButtonHTMLAttributes<HTMLButtonElement>
> = ({
  children,
  disabled,
  isLoading,
  outlined,
  type = "button",
  size = "medium",
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
          {/* <LoadingSpinner color="darkblue" size={24} /> */}
        </s.LoadingContainer>
      ) : null}
      <Ripple />
    </s.Button>
  );
};

export { TButtonComponentProps };

export default Button;
