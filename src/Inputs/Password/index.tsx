import React, { useState } from 'react';

import TextField from '../TextField';
import { TTextFieldProps } from '../TextField/types';

import * as s from './styles';
import { IPasswordProps } from './types';

const Password = ({
  color = 'white',
  outlined,
  ...rest
}: IPasswordProps & Omit<TTextFieldProps, 'suffix' | 'preffix'>) => {
  const [isVisible, setVisibility] = useState(false);

  return (
    <TextField
      type={isVisible ? 'text' : 'password'}
      color={color}
      outlined={outlined}
      suffix={
        <s.Icon
          name={isVisible ? 'visible' : 'hidden'}
          color={outlined ? color : 'darkestgrey'}
          width={24}
          height={24}
          onClick={() => setVisibility((currentState) => !currentState)}
        />
      }
      {...rest}
    />
  );
};

export default Password;
