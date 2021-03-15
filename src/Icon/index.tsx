import React from "react";
import { colors as themeColors } from "../theme";
import { IIcon, iconDictionary } from "./types";

export default ({
  name,
  color = "gray4",
  fill,
  width = 21,
  ...rest
}: IIcon & React.SVGAttributes<SVGElement>) => {
  const Icon = iconDictionary[name];

  return Icon ? (
    <Icon
      role="img"
      aria-label={name}
      fill={fill ? fill : themeColors[color]}
      width={width}
      {...rest}
    />
  ) : null;
};
