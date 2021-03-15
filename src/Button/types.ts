// import { ButtonProps } from "@material-ui/core/Button";

export type TButtonVariant = "primary" | "secondary";

export interface IButtonComponentProps {
  isLoading?: boolean;
  outlined?: boolean;
  size?: "small" | "medium" | "large";
  variant?: TButtonVariant;
}

export type TButtonComponentProps = IButtonComponentProps;
