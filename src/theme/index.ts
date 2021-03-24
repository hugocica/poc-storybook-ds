import 'styled-components';

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

declare module 'styled-components' {
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
    green: '#44C0BC',
    green40: 'rgba(68, 192, 188, 0.4)',
    grey: '#435C84',
    grey40: 'rgba(67, 92, 132, 0.4)',
  },
  secondary: {
    purple: '#5A3BD3',
    purple40: 'rgba(90, 59, 211, 0.4)',
    lightpurple: '#A780F9',
    lightpurple40: 'rgba(167, 128, 249, 0.4)',
  },
  system: {
    error: '#FF656C',
    warning: '#FFC065',
  },
  neutrals: {
    white: '#ffffff',
    white25: 'rgba(255, 255, 255, 0.25)',
    black: '#000000',
    darkestgrey: '#4C5867',
    darkgrey: '#72859C',
    lightgrey: '#AEC0D1',
    lightergrey: '#D4D6E9',
    lightergrey25: 'rgba(212, 214, 233, 0.25)',
  },

  //old colors
  grey1: 'rgb(241, 241, 241)',
  grey2: 'rgb(238, 238, 238)',
  grey3: 'rgb(216, 216, 216)',
  grey4: 'rgb(186, 186, 186)',
  grey5: 'rgb(80, 80, 80)',
  grey6: 'rgb(39, 39, 39)',
  error: 'rgb(207, 19, 34)',
  blue100: 'rgb(14, 134, 192)',
  lightblue: 'rgb(94, 163, 197)',
};

export const genericFontProps = {
  fontFamily: 'Space Grotesk',
  fontWeight: 400,
};

export const fonts = {
  heading1: {
    ...genericFontProps,
    fontSize: 68,
    lineHeight: '76px',
  },
  heading2: {
    ...genericFontProps,
    fontSize: 46,
    lineHeight: '54px',
  },
  heading3: {
    ...genericFontProps,
    fontSize: 30,
    lineHeight: '38px',
  },
  heading4: {
    ...genericFontProps,
    fontSize: 24,
    lineHeight: '32px',
  },
  heading5: {
    ...genericFontProps,
    fontSize: 20,
    lineHeight: '28px',
  },
  body1: {
    ...genericFontProps,
    fontSize: 16,
    lineHeight: '24px',
  },
  body2: {
    ...genericFontProps,
    fontSize: 14,
    lineHeight: '22px',
  },
  caption: {
    ...genericFontProps,
    fontSize: 14,
    lineHeight: '16px',
  },
  button: {
    ...genericFontProps,
    fontSize: 16,
    fontWeight: 600,
    lineHeight: '24px',
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
  button:
    '0px 3px 1px -2px rgba(0, 0, 0, 0.2),0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12)',
  popper: '0px 2px 5px 0 rgba(0, 0, 0, 0.5)',
};

const borderRadius = {
  square: '4px',
  circle: '50%',
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
