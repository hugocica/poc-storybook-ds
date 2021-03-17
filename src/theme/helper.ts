import { colors } from "./index";

export const findColorInTheme = (color) => {
  return (
    colors.neutrals[color] ||
    colors.system[color] ||
    colors.secondary[color] ||
    colors.primary[color]
  );
};
