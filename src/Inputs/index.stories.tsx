import React from 'react';

import Icon from '../Icon';
import TextFieldCmp from './TextField';
import PasswordCmp from './Password';

export default {
  title: 'Inputs',
};

export const TextField = () => (
  <>
    <div>
      <TextFieldCmp
        label="login"
        placeholder="digite aqui"
        color="darkestgrey"
        outlined
      />
    </div>
    <div>
      <TextFieldCmp
        placeholder="buscar pacientes"
        prefix={<Icon name="patients" width={22} height={14} />}
      />
    </div>
  </>
);

export const Password = () => (
  <div>
    <PasswordCmp
      label="senha"
      placeholder="digite aqui"
      color="darkestgrey"
      iconColor="green"
      outlined
    />
  </div>
);
