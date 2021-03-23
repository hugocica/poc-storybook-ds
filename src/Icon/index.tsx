import React from 'react';
import { findColorInTheme } from '../theme/helper';

import { IIconProps, iconDictionary } from './types';

export default ({
  name,
  fill,
  height,
  width,
  color = 'darkestgrey',
  size = 24,
  ...rest
}: IIconProps & React.SVGAttributes<SVGElement>) => {
  const Icon = iconDictionary[name];
  const colorToFill = findColorInTheme(color);

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
