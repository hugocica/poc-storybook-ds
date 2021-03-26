import 'styled-components';
declare type TPrimary = {
    [key in keyof typeof colors.primary]: string;
};
declare type TSecondary = {
    [key in keyof typeof colors.secondary]: string;
};
declare type TSystem = {
    [key in keyof typeof colors.system]: string;
};
declare type TNeutrals = {
    [key in keyof typeof colors.neutrals]: string;
};
export declare type TColors = keyof typeof colors.primary | keyof typeof colors.secondary | keyof typeof colors.neutrals | keyof typeof colors.system;
declare module 'styled-components' {
    interface DefaultTheme {
        borderRadius: {
            [key in keyof typeof borderRadius]: string;
        };
        colors: {
            primary: TPrimary;
            secondary: TSecondary;
            system: TSystem;
            neutrals: TNeutrals;
        };
        fonts: {
            [key in keyof typeof fonts]: any;
        };
        mediaQueries: {
            [key in keyof typeof mediaQueries]: string;
        };
        shadows: {
            [key in keyof typeof shadows]: string;
        };
        spacing: (number: number) => number;
    }
}
export declare const colors: {
    primary: {
        green: string;
        green40: string;
        grey: string;
        grey40: string;
    };
    secondary: {
        purple: string;
        purple40: string;
        lightpurple: string;
        lightpurple40: string;
    };
    system: {
        error: string;
        warning: string;
    };
    neutrals: {
        white: string;
        white25: string;
        black: string;
        darkestgrey: string;
        darkgrey: string;
        lightgrey: string;
        lightergrey: string;
        lightergrey25: string;
        muchLighterGrey: string;
    };
    grey1: string;
    grey2: string;
    grey3: string;
    grey4: string;
    grey5: string;
    grey6: string;
    error: string;
    blue100: string;
    lightblue: string;
};
export declare const genericFontProps: {
    fontFamily: string;
    fontWeight: number;
};
export declare const fonts: {
    heading1: {
        fontSize: number;
        lineHeight: string;
        fontFamily: string;
        fontWeight: number;
    };
    heading2: {
        fontSize: number;
        lineHeight: string;
        fontFamily: string;
        fontWeight: number;
    };
    heading3: {
        fontSize: number;
        lineHeight: string;
        fontFamily: string;
        fontWeight: number;
    };
    heading4: {
        fontSize: number;
        lineHeight: string;
        fontFamily: string;
        fontWeight: number;
    };
    heading5: {
        fontSize: number;
        lineHeight: string;
        fontFamily: string;
        fontWeight: number;
    };
    body1: {
        fontSize: number;
        lineHeight: string;
        fontFamily: string;
        fontWeight: number;
    };
    body2: {
        fontSize: number;
        lineHeight: string;
        fontFamily: string;
        fontWeight: number;
    };
    caption: {
        fontSize: number;
        lineHeight: string;
        fontFamily: string;
        fontWeight: number;
    };
    button: {
        fontSize: number;
        fontWeight: number;
        lineHeight: string;
        fontFamily: string;
    };
};
declare const mediaQueries: {
    xs: string;
    sm: string;
    md: string;
    lg: string;
    xl: string;
    smUp: string;
    mdUp: string;
    lgUp: string;
    xlUp: string;
};
declare const shadows: {
    button: string;
    popper: string;
};
declare const borderRadius: {
    square: string;
    circle: string;
};
declare const _default: {
    borderRadius: {
        square: string;
        circle: string;
    };
    colors: {
        primary: {
            green: string;
            green40: string;
            grey: string;
            grey40: string;
        };
        secondary: {
            purple: string;
            purple40: string;
            lightpurple: string;
            lightpurple40: string;
        };
        system: {
            error: string;
            warning: string;
        };
        neutrals: {
            white: string;
            white25: string;
            black: string;
            darkestgrey: string;
            darkgrey: string;
            lightgrey: string;
            lightergrey: string;
            lightergrey25: string;
            muchLighterGrey: string;
        };
        grey1: string;
        grey2: string;
        grey3: string;
        grey4: string;
        grey5: string;
        grey6: string;
        error: string;
        blue100: string;
        lightblue: string;
    };
    fonts: {
        heading1: {
            fontSize: number;
            lineHeight: string;
            fontFamily: string;
            fontWeight: number;
        };
        heading2: {
            fontSize: number;
            lineHeight: string;
            fontFamily: string;
            fontWeight: number;
        };
        heading3: {
            fontSize: number;
            lineHeight: string;
            fontFamily: string;
            fontWeight: number;
        };
        heading4: {
            fontSize: number;
            lineHeight: string;
            fontFamily: string;
            fontWeight: number;
        };
        heading5: {
            fontSize: number;
            lineHeight: string;
            fontFamily: string;
            fontWeight: number;
        };
        body1: {
            fontSize: number;
            lineHeight: string;
            fontFamily: string;
            fontWeight: number;
        };
        body2: {
            fontSize: number;
            lineHeight: string;
            fontFamily: string;
            fontWeight: number;
        };
        caption: {
            fontSize: number;
            lineHeight: string;
            fontFamily: string;
            fontWeight: number;
        };
        button: {
            fontSize: number;
            fontWeight: number;
            lineHeight: string;
            fontFamily: string;
        };
    };
    mediaQueries: {
        xs: string;
        sm: string;
        md: string;
        lg: string;
        xl: string;
        smUp: string;
        mdUp: string;
        lgUp: string;
        xlUp: string;
    };
    shadows: {
        button: string;
        popper: string;
    };
    spacing: (number: number) => number;
};
export default _default;
