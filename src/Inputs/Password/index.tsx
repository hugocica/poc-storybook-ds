import React, { useState } from "react";

import TextField from "../TextField";
import { TTextFieldProps } from "../TextField/types";

import * as s from "./styles";
import { IPasswordProps } from "./types";

const Password = ({
  color = "darkestgrey",
  ...rest
}: IPasswordProps & Omit<TTextFieldProps, "suffix" | "preffix">) => {
  const [isVisible, setVisibility] = useState(false);

  return (
    <TextField
      type={isVisible ? "text" : "password"}
      color={color}
      suffix={
        <s.Icon
          name={isVisible ? "notification" : "hidden"}
          color={color}
          width={22}
          height={18}
          onClick={() => setVisibility((currentState) => !currentState)}
        />
      }
      {...rest}
    />
  );
};

export default Password;
