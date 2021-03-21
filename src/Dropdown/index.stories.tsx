import React from 'react';

import Button from '../Button';
import Typography from '../Typography';
import Dropdown from './index';

export default {
  title: 'Dropdown',
};

export const Default = () => (
  <Dropdown anchorElement={<Button>Dropdown</Button>} trigger="click">
    <Typography>item 1</Typography>
    <Typography>item 2</Typography>
  </Dropdown>
);
