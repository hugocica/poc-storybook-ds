export declare type TButtonVariant = "primary" | "secondary";
export interface IButtonComponentProps {
    color?: TButtonVariant;
    isLoading?: boolean;
    outlined?: boolean;
    size?: "small" | "medium" | "large";
}
export declare type TButtonComponentProps = IButtonComponentProps;
