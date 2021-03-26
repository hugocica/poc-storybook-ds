import { iconDictionary } from '../Icon/types';
import { ButtonHTMLAttributes } from 'react';
export declare type TIconButtonVariant = 'primary' | 'secondary';
export interface IIconButtonProps {
    name: keyof typeof iconDictionary;
    iconProperties?: object;
    outlined?: boolean;
    size?: 'small' | 'medium' | 'large';
    variant?: TIconButtonVariant;
    padding?: string;
}
export declare type TIconButtonProps = IIconButtonProps & ButtonHTMLAttributes<HTMLButtonElement>;
