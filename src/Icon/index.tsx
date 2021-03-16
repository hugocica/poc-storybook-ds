import React from "react";

import { colors as themeColors } from "../theme";

import { IIconProps, iconDictionary } from "./types";

export default ({
  name,
  fill,
  height,
  width,
  color = "darkestgrey",
  size = 21,
  ...rest
}: IIconProps & React.SVGAttributes<SVGElement>) => {
  const Icon = iconDictionary[name];

  const colorToFill =
    themeColors.neutrals[color] ||
    themeColors.system[color] ||
    themeColors.secondary[color] ||
    themeColors.primary[color];

  return Icon ? (
    <Icon
      role="img"
      aria-label={name}
      fill={fill ? fill : colorToFill}
      width={width || size}
      height={height || size}
      {...rest}
    />
  ) : null;
};
