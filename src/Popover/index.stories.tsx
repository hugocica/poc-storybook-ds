import React, { useState } from 'react';

import Button from '../Button';
import Icon from '../Icon';
import Popover from './index';

export default {
  title: 'Popover',
};

export const Default = () => {
  const [open, setOpen] = useState(false);

  return (
    <Popover open={open} toggleOpen={setOpen} content={<Icon name="user" />}>
      <Button>Clique aqui</Button>
    </Popover>
  );
};
