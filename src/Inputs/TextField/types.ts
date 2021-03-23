import { InputHTMLAttributes, ReactNode } from 'react';
import { TColors } from 'theme';

export interface ITextFieldProps {
  color?: TColors;
  label?: string;
  iconColor?: TColors;
  outlined?: boolean;
  prefix?: ReactNode;
  suffix?: ReactNode;
}

export type TTextFieldProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  'prefix'
> &
  ITextFieldProps;
