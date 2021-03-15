import { ReactComponent as people } from "./assets/people.svg";
import { colors } from "../theme";

export const iconDictionary = {
  people,
};

export interface IIcon {
  name: keyof typeof iconDictionary;
  color?: keyof typeof colors;
  fill?: string;
}
