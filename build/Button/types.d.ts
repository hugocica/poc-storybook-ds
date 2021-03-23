import { ButtonHTMLAttributes } from "react";
export declare type TButtonVariant = "primary" | "secondary";
export interface IButtonProps {
    isLoading?: boolean;
    outlined?: boolean;
    size?: "small" | "medium" | "large";
    variant?: TButtonVariant;
}
export declare type TButtonProps = IButtonProps & ButtonHTMLAttributes<HTMLButtonElement>;
