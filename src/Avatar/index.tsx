import React, { useEffect, useState } from "react";
import { imageUrlIsValid } from "./helper";

import * as s from "./styles";
import { IAvatarProps } from "./types";

const Avatar = ({
  alt,
  src,
  placeholder,
  size = 40,
  variant = "square",
  ...rest
}: IAvatarProps) => {
  // @todo: add validation to src/placeholder if both are images urls are valid
  const content = <img alt={alt} src={src || placeholder} />;

  return (
    <s.Container size={size} variant={variant} {...rest}>
      {content}
    </s.Container>
  );
};

export default Avatar;
