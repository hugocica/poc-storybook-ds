import React from 'react';

import * as s from './styles';
import { ILoadingProps } from './types';

const Loading: React.FC<ILoadingProps> = ({
  color = 'darkestgrey',
  size = 24,
  ...rest
}) => <s.Spinner color={color} size={size} {...rest} />;

export default Loading;
