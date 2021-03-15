export declare type TButtonVariant = "primary" | "secondary";
export interface IButtonComponentProps {
    isLoading?: boolean;
    outlined?: boolean;
    size?: "small" | "medium" | "large";
    variant?: TButtonVariant;
}
export declare type TButtonComponentProps = IButtonComponentProps;
