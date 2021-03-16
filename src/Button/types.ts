import { ButtonHTMLAttributes } from "react";

export type TButtonVariant = "primary" | "secondary";

export interface IButtonProps {
  isLoading?: boolean;
  outlined?: boolean;
  size?: "small" | "medium" | "large";
  variant?: TButtonVariant;
}

export type TButtonProps = IButtonProps &
  ButtonHTMLAttributes<HTMLButtonElement>;
