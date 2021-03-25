import React, { useState } from 'react';

import Button from '../Button';
import Typography from '../Typography';
import Dropdown from './index';

export default {
  title: 'Dropdown',
};

export const Default = () => {
  const [open, setOpen] = useState(false);

  return (
    <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
      <Dropdown
        open={open}
        toggleOpen={setOpen}
        trigger="click"
        placement="bottom-end"
        anchorElement={<Button>Dropdown</Button>}
      >
        <Typography>item item item item item 1</Typography>
        <Typography>item 2</Typography>
      </Dropdown>
    </div>
  );
};
