import "styled-components";
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
declare module "styled-components" {
    interface DefaultTheme {
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
        gray: string;
        gray40: string;
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
    };
    white60: string;
    white38: string;
    gray1: string;
    gray2: string;
    gray3: string;
    gray4: string;
    gray5: string;
    gray6: string;
    error: string;
    yellow100: string;
    yellow60: string;
    yellow38: string;
    yellow12: string;
    yellow6: string;
    green100: string;
    green60: string;
    green38: string;
    green12: string;
    green6: string;
    blue100: string;
    blue60: string;
    blue38: string;
    blue12: string;
    blue6: string;
    lightblue: string;
    purple: string;
    darkgreen: string;
    darkblue: string;
};
export declare const genericFontProps: {
    fontFamily: string;
};
export declare const fonts: {
    heading1: {
        fontSize: number;
        lineHeight: string;
        fontFamily: string;
    };
    heading2: {
        fontSize: number;
        lineHeight: string;
        fontFamily: string;
    };
    heading3: {
        fontSize: number;
        lineHeight: string;
        fontFamily: string;
    };
    heading4: {
        fontSize: number;
        lineHeight: string;
        fontFamily: string;
    };
    heading5: {
        fontSize: number;
        lineHeight: string;
        fontFamily: string;
    };
    body1: {
        fontSize: number;
        lineHeight: string;
        fontFamily: string;
    };
    body2: {
        fontSize: number;
        lineHeight: string;
        fontFamily: string;
    };
    button: {
        fontSize: number;
        fontWeight: number;
        textTransform: string;
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
    gray1: string;
};
declare const _default: {
    colors: {
        primary: {
            green: string;
            green40: string;
            gray: string;
            gray40: string;
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
        };
        white60: string;
        white38: string;
        gray1: string;
        gray2: string;
        gray3: string;
        gray4: string;
        gray5: string;
        gray6: string;
        error: string;
        yellow100: string;
        yellow60: string;
        yellow38: string;
        yellow12: string;
        yellow6: string;
        green100: string;
        green60: string;
        green38: string;
        green12: string;
        green6: string;
        blue100: string;
        blue60: string;
        blue38: string;
        blue12: string;
        blue6: string;
        lightblue: string;
        purple: string;
        darkgreen: string;
        darkblue: string;
    };
    fonts: {
        heading1: {
            fontSize: number;
            lineHeight: string;
            fontFamily: string;
        };
        heading2: {
            fontSize: number;
            lineHeight: string;
            fontFamily: string;
        };
        heading3: {
            fontSize: number;
            lineHeight: string;
            fontFamily: string;
        };
        heading4: {
            fontSize: number;
            lineHeight: string;
            fontFamily: string;
        };
        heading5: {
            fontSize: number;
            lineHeight: string;
            fontFamily: string;
        };
        body1: {
            fontSize: number;
            lineHeight: string;
            fontFamily: string;
        };
        body2: {
            fontSize: number;
            lineHeight: string;
            fontFamily: string;
        };
        button: {
            fontSize: number;
            fontWeight: number;
            textTransform: string;
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
        gray1: string;
    };
    spacing: (number: number) => number;
};
export default _default;
