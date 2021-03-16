/// <reference types="react" />
import { TColors } from "../theme";
export declare const iconDictionary: {
    "arrow-down": import("react").FC<import("react").SVGProps<SVGSVGElement>>;
    "arrow-left": import("react").FC<import("react").SVGProps<SVGSVGElement>>;
    "arrow-right": import("react").FC<import("react").SVGProps<SVGSVGElement>>;
    "arrow-up": import("react").FC<import("react").SVGProps<SVGSVGElement>>;
    close: import("react").FC<import("react").SVGProps<SVGSVGElement>>;
    notification: import("react").FC<import("react").SVGProps<SVGSVGElement>>;
    patients: import("react").FC<import("react").SVGProps<SVGSVGElement>>;
    print: import("react").FC<import("react").SVGProps<SVGSVGElement>>;
    "prontmed-logo-dark-bg": import("react").FC<import("react").SVGProps<SVGSVGElement>>;
    "prontmed-logo-light-bg": import("react").FC<import("react").SVGProps<SVGSVGElement>>;
};
export interface IIconProps {
    name: keyof typeof iconDictionary;
    color?: TColors;
    fill?: string;
    size?: number;
}
