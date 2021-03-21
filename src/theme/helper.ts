import { colors, TColors } from "./index";

const hexToRgb = (hex: string) => {
  // if hex has only 3 codes, duplicate. ex: #fab => #ffaabb
  const shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
  const newHex = hex.replace(
    shorthandRegex,
    (m, r, g, b) => r + r + g + g + b + b
  );

  // result must be 6 codes and is separated in 3 groups (red, green and blue)
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(newHex);

  // each group will be transformed to an integer (base 10) and will be add to the rgb format
  // if result dont exists, the color will return null
  return result
    ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16),
      }
    : null;
};

export const rgba = (hex: string, alpha: number | string) => {
  const color: {
    r: number;
    g: number;
    b: number;
  } | null = hexToRgb(hex);

  return `rgba(${color?.r}, ${color?.g}, ${color?.b}, ${alpha})`;
};

export const findColorInTheme = (color: TColors, opacity: number = 1) => {
  return rgba(
    colors.neutrals[color] ||
      colors.system[color] ||
      colors.secondary[color] ||
      colors.primary[color],
    opacity
  );
};
