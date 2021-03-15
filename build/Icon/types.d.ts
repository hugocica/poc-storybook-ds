import { colors } from "../theme";
export declare const iconDictionary: {
    people: any;
};
export interface IIcon {
    name: keyof typeof iconDictionary;
    color?: keyof typeof colors;
    fill?: string;
}
