import "styled-components";

type TPrimary = {
  [key in keyof typeof colors.primary]: string;
};

type TSecondary = {
  [key in keyof typeof colors.secondary]: string;
};

type TSystem = {
  [key in keyof typeof colors.system]: string;
};

type TNeutrals = {
  [key in keyof typeof colors.neutrals]: string;
};

export type TColors =
  | keyof typeof colors.primary
  | keyof typeof colors.secondary
  | keyof typeof colors.neutrals
  | keyof typeof colors.system;

declare module "styled-components" {
  export interface DefaultTheme {
    borderRadius: { [key in keyof typeof borderRadius]: string };
    colors: {
      primary: TPrimary;
      secondary: TSecondary;
      system: TSystem;
      neutrals: TNeutrals;
      // [key in keyof typeof colors]: string;
    };
    fonts: { [key in keyof typeof fonts]: any };
    mediaQueries: { [key in keyof typeof mediaQueries]: string };
    shadows: { [key in keyof typeof shadows]: string };
    spacing: (number: number) => number;
  }
}

export const colors = {
  primary: {
    green: "#44C0BC",
    green40: "rgba(68, 192, 188, 0.4)",
    gray: "#435C84",
    gray40: "rgba(67, 92, 132, 0.4)",
  },
  secondary: {
    purple: "#5A3BD3",
    purple40: "rgba(90, 59, 211, 0.4)",
    lightpurple: "#A780F9",
    lightpurple40: "rgba(167, 128, 249, 0.4)",
  },
  system: {
    error: "#FF656C",
    warning: "#FFC065",
  },
  neutrals: {
    white: "#ffffff",
    white25: "rgba(255, 255, 255, 0.25)",
    black: "#000000",
    darkestgrey: "#4C5867",
    darkgrey: "#72859C",
    lightgrey: "#AEC0D1",
    lightergrey: "#D4D6E9",
    lightergrey25: "rgba(212, 214, 233, 0.25)",
  },

  //old colors
  white60: "rgba(255, 255, 255, 0.6)",
  white38: "rgba(255, 255, 255, 0.38)",
  gray1: "rgb(241, 241, 241)",
  gray2: "rgb(235, 235, 235)",
  gray3: "rgb(221, 221, 221)",
  gray4: "rgb(186, 186, 186)",
  gray5: "rgb(137, 137, 137)",
  gray6: "rgb(39, 39, 39)",
  // gray1: 'rgb(240, 242, 245)',
  // gray2: 'rgb(183, 183, 183)',
  // gray3: 'rgb(122, 125, 125)',
  error: "rgb(207, 19, 34)",
  // cores primárias
  yellow100: "rgb(214, 222, 35)",

  green100: "rgb(0, 166, 156)",
  green60: "rgba(0, 166, 156, 0.6)",
  green38: "rgba(0, 166, 156, 0.38)",
  green12: "rgba(0, 166, 156, 0.12)",
  green6: "rgba(0, 166, 156, 0.06)",
  blue100: "rgb(3, 123, 192)",
  blue60: "rgba(3, 123, 192, 0.6)",
  blue38: "rgba(3, 123, 192, 0.38)",
  blue12: "rgba(3, 123, 192, 0.12)",
  blue6: "rgba(3, 123, 192, 0.06)",
  // cores complementares
  lightblue: "rgb(141, 215, 247)",
  purple: "rgb(85, 49, 118)",
  darkgreen: "rgb(0, 65, 61)",
  darkblue: "rgb(3, 43, 82)",
};

export const genericFontProps = {
  fontFamily: "Space Grotesk",
  fontWeight: 400,
};

export const fonts = {
  heading1: {
    ...genericFontProps,
    fontSize: 68,
    lineHeight: "76px",
  },
  heading2: {
    ...genericFontProps,
    fontSize: 46,
    lineHeight: "54px",
  },
  heading3: {
    ...genericFontProps,
    fontSize: 30,
    lineHeight: "38px",
  },
  heading4: {
    ...genericFontProps,
    fontSize: 24,
    lineHeight: "32px",
  },
  heading5: {
    ...genericFontProps,
    fontSize: 24,
    lineHeight: "28px",
  },
  body1: {
    ...genericFontProps,
    fontSize: 16,
    lineHeight: "24px",
  },
  body2: {
    ...genericFontProps,
    fontSize: 14,
    lineHeight: "22px",
  },
  caption: {
    ...genericFontProps,
    fontSize: 14,
    lineHeight: "16px",
  },
  button: {
    ...genericFontProps,
    fontSize: 16,
    fontWeight: 600,
    textTransform: "uppercase",
    lineHeight: "24px",
  },
};

const gutter = 8;

const breakpoints = {
  xl: 1440,
  lg: 1280,
  md: 1024,
  sm: 768,
  xs: 480,
};

const mediaQueries = {
  xs: `(max-width: ${breakpoints.xs}px)`,
  sm: `(max-width: ${breakpoints.sm}px)`,
  md: `(max-width: ${breakpoints.md}px)`,
  lg: `(max-width: ${breakpoints.lg}px)`,
  xl: `(max-width: ${breakpoints.xl}px)`,
  smUp: `(min-width: ${breakpoints.sm}px)`,
  mdUp: `(min-width: ${breakpoints.md}px)`,
  lgUp: `(min-width: ${breakpoints.lg}px)`,
  xlUp: `(min-width: ${breakpoints.xl}px)`,
};

const shadows = {
  gray1:
    "0px 3px 1px -2px rgba(0, 0, 0, 0.2),0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12)",
};

const borderRadius = {
  square: "4px",
  circle: "50%",
};

const spacing = (number: number) => number * gutter;

export default {
  borderRadius,
  colors,
  fonts,
  mediaQueries,
  shadows,
  spacing,
};
