/// <reference types="react" />
import { TTextFieldProps } from '../TextField/types';
import { IPasswordProps } from './types';
declare const Password: ({ color, iconColor: iconColorProps, outlined, ...rest }: IPasswordProps & Omit<TTextFieldProps, 'suffix' | 'preffix'>) => JSX.Element;
export default Password;
