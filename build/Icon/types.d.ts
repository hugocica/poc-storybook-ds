/// <reference types="react" />
import { TColors } from '../theme';
export declare const iconDictionary: {
    add: import("react").FC<import("react").SVGProps<SVGSVGElement>>;
    'arrow-down': import("react").FC<import("react").SVGProps<SVGSVGElement>>;
    'arrow-left': import("react").FC<import("react").SVGProps<SVGSVGElement>>;
    'arrow-right': import("react").FC<import("react").SVGProps<SVGSVGElement>>;
    'arrow-up': import("react").FC<import("react").SVGProps<SVGSVGElement>>;
    close: import("react").FC<import("react").SVGProps<SVGSVGElement>>;
    config: import("react").FC<import("react").SVGProps<SVGSVGElement>>;
    'doc-check': import("react").FC<import("react").SVGProps<SVGSVGElement>>;
    doc: import("react").FC<import("react").SVGProps<SVGSVGElement>>;
    gift: import("react").FC<import("react").SVGProps<SVGSVGElement>>;
    lifeboat: import("react").FC<import("react").SVGProps<SVGSVGElement>>;
    lock: import("react").FC<import("react").SVGProps<SVGSVGElement>>;
    logout: import("react").FC<import("react").SVGProps<SVGSVGElement>>;
    hidden: import("react").FC<import("react").SVGProps<SVGSVGElement>>;
    notification: import("react").FC<import("react").SVGProps<SVGSVGElement>>;
    patients: import("react").FC<import("react").SVGProps<SVGSVGElement>>;
    print: import("react").FC<import("react").SVGProps<SVGSVGElement>>;
    'prontmed-logo-dark-bg': import("react").FC<import("react").SVGProps<SVGSVGElement>>;
    'prontmed-logo-light-bg': import("react").FC<import("react").SVGProps<SVGSVGElement>>;
    spinner: import("react").FC<import("react").SVGProps<SVGSVGElement>>;
    user: import("react").FC<import("react").SVGProps<SVGSVGElement>>;
    visible: import("react").FC<import("react").SVGProps<SVGSVGElement>>;
};
export interface IIconProps {
    name: keyof typeof iconDictionary;
    color?: TColors;
    fill?: string;
    size?: number;
}
