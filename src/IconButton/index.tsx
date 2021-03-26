import React from 'react';
import Icon from '../Icon';
import Ripple from '../Ripple';

import { TIconButtonProps } from './types';
import * as s from './styles';

const defaultProperties = {
  'arrow-left': {
    iconProperties: { style: { width: '78%', height: '72%' } },
    padding: '5px 8px 0',
  },
  'arrow-right': {
    iconProperties: { style: { width: '78%', height: '72%' } },
    padding: '5px 8px 0',
  },
  'arrow-down': {
    iconProperties: { style: { width: '78%', height: '72%' } },
    padding: '6px 5px',
  },
  'arrow-up': {
    iconProperties: { style: { width: '78%', height: '72%' } },
    padding: '6px 5px',
  },
  close: {
    padding: '5px 4px 0',
    iconProperties: { style: { width: '78%', height: '83%' } },
  },
  visible: {
    padding: '0px',
    iconProperties: { style: { width: '92%', height: '100%' } },
  },
  notification: {
    padding: '3px 3px 0',
    iconProperties: { style: { width: '82%', height: '89%' } },
  },
  patients: {
    padding: '4px 0 0',
    iconProperties: { style: { width: '85%', height: '68%' } },
  },
  print: {
    padding: '4px 0 0',
    iconProperties: { style: { width: '78%', height: '100%' } },
  },
};

const IconButton: React.FC<TIconButtonProps> = ({
  disabled,
  padding,
  name,
  iconProperties,
  ...rest
}) => {
  const defaultProperty = defaultProperties[name] || {};
  return (
    <s.Button padding={padding || defaultProperty.padding} {...rest}>
      <Icon
        name={name}
        {...defaultProperty.iconProperties}
        {...iconProperties}
      />
      {!disabled && <Ripple />}
    </s.Button>
  );
};

export default IconButton;
