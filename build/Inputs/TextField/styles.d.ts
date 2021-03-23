/// <reference types="react" />
import { ITextFieldProps } from './types';
export declare const Label: import("styled-components").StyledComponent<import("react").FC<import("../../Typography/types").ITypographyProps>, import("styled-components").DefaultTheme, {
    variant: "label";
    type: "caption";
}, "type" | "variant">;
export declare const InputContent: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, {}, never>;
declare type TContainerProps = Pick<ITextFieldProps, 'color' | 'outlined'>;
export declare const Container: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, TContainerProps, never>;
export declare const PrefixContainer: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, {}, never>;
export declare const SuffixContainer: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, {}, never>;
export declare const Input: import("styled-components").StyledComponent<"input", import("styled-components").DefaultTheme, {}, never>;
export {};
