import React from 'react';

import Button from '../Button';
import Typography from '../Typography';
import Dropdown from './index';

export default {
  title: 'Dropdown',
};

export const Default = () => (
  <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
    <Dropdown placement="bottom-end" anchorElement={<Button>Dropdown</Button>}>
      <Typography>item item item item item 1</Typography>
      <Typography>item 2</Typography>
    </Dropdown>
  </div>
);
