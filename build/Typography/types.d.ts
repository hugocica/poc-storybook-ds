import { fonts, TColors } from "../theme";
export interface ITypographyProps {
    color?: TColors;
    type?: keyof typeof fonts;
    variant?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "label" | "span";
}
