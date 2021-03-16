import { InputHTMLAttributes, ReactNode } from "react";

export interface ITextProps {
  prefix?: ReactNode;
  suffix?: ReactNode;
}

export type TTextProps = Omit<InputHTMLAttributes<HTMLInputElement>, "prefix"> &
  ITextProps;
