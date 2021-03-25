import React from 'react';

import Button from '../Button';
import Icon from '../Icon';
import Popover from './index';

export default {
  title: 'Popover',
};

export const Default = () => (
  <Popover content={<Icon name="user" />}>
    <Button>Clique aqui</Button>
  </Popover>
);
