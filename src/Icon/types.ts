import { ReactComponent as arrowDown } from "./assets/arrow-down.svg";
import { ReactComponent as arrowLeft } from "./assets/arrow-left.svg";
import { ReactComponent as arrowRight } from "./assets/arrow-right.svg";
import { ReactComponent as arrowUp } from "./assets/arrow-up.svg";
import { ReactComponent as close } from "./assets/close.svg";
import { ReactComponent as notification } from "./assets/notification.svg";
import { ReactComponent as patients } from "./assets/patients.svg";
import { ReactComponent as print } from "./assets/print.svg";
import { ReactComponent as prontmedLogoDarkBg } from "./assets/prontmed-logo-dark-bg.svg";
import { ReactComponent as prontmedLogoLightBg } from "./assets/prontmed-logo-light-bg.svg";
import { TColors } from "../theme";

export const iconDictionary = {
  "arrow-down": arrowDown,
  "arrow-left": arrowLeft,
  "arrow-right": arrowRight,
  "arrow-up": arrowUp,
  close,
  notification,
  patients,
  print,
  "prontmed-logo-dark-bg": prontmedLogoDarkBg,
  "prontmed-logo-light-bg": prontmedLogoLightBg,
};

export interface IIconProps {
  name: keyof typeof iconDictionary;
  color?: TColors;
  fill?: string;
  size?: number;
}
