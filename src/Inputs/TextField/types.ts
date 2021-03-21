import { InputHTMLAttributes, ReactNode } from "react";
import { TColors } from "theme";

export interface ITextFieldProps {
  color?: TColors;
  label?: string;
  prefix?: ReactNode;
  suffix?: ReactNode;
}

export type TTextFieldProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  "prefix"
> &
  ITextFieldProps;
