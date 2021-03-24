import React from 'react';
// import { Grid } from '@material-ui/core';

import Button from './index';
import ButtonLink from './Link';

export default {
  title: 'Button',
};

export const Default = () => (
  <>
    <Button variant="primary">primary</Button>
    <Button variant="secondary">secondary</Button>
    <Button>default</Button>
  </>
);

export const Link = () => <ButtonLink>Padrão</ButtonLink>;
