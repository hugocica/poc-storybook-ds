import React, { useState, useLayoutEffect } from 'react';
import styled, { keyframes } from 'styled-components';

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __spreadArray(to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
}

var rippleAnimation = keyframes(templateObject_1$1 || (templateObject_1$1 = __makeTemplateObject(["\n  to {\n      opacity: 0;\n      transform: scale(2);\n    }\n"], ["\n  to {\n      opacity: 0;\n      transform: scale(2);\n    }\n"])));
var RippleContainer = styled.div(templateObject_2$1 || (templateObject_2$1 = __makeTemplateObject(["\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n\n  span {\n    transform: scale(0);\n    border-radius: 100%;\n    position: absolute;\n    opacity: 0.75;\n    background-color: ", ";\n    animation-name: ", ";\n    animation-duration: ", "ms;\n  }\n"], ["\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n\n  span {\n    transform: scale(0);\n    border-radius: 100%;\n    position: absolute;\n    opacity: 0.75;\n    background-color: ", ";\n    animation-name: ", ";\n    animation-duration: ", "ms;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.neutrals.white;
}, rippleAnimation, function (_a) {
    var duration = _a.duration;
    return duration;
});
var templateObject_1$1, templateObject_2$1;

var Ripple = function (_a) {
    var _b = _a.duration, duration = _b === void 0 ? 850 : _b;
    var _c = useState([]), rippleArray = _c[0], setRippleArray = _c[1];
    var cleanUpFunction = function () {
        setRippleArray([]);
    };
    useLayoutEffect(function () {
        var bounce = null;
        if (rippleArray.length > 0) {
            clearTimeout(bounce);
            bounce = setTimeout(function () {
                cleanUpFunction();
                clearTimeout(bounce);
            }, duration * 4);
        }
        return function () { return clearTimeout(bounce); };
    }, [rippleArray.length, duration, cleanUpFunction]);
    var addRipple = function (event) {
        var rippleContainer = event.currentTarget.getBoundingClientRect();
        var size = rippleContainer.width > rippleContainer.height
            ? rippleContainer.width
            : rippleContainer.height;
        var x = event.pageX - rippleContainer.x - size / 2;
        var y = event.pageY - rippleContainer.y - size / 2;
        var newRipple = {
            x: x,
            y: y,
            size: size,
        };
        setRippleArray(__spreadArray(__spreadArray([], rippleArray), [newRipple]));
    };
    return (React.createElement(RippleContainer, { duration: duration, onMouseDown: addRipple }, rippleArray.length > 0 &&
        rippleArray.map(function (ripple, index) {
            return (React.createElement("span", { key: "span" + index, style: {
                    top: ripple.y,
                    left: ripple.x,
                    width: ripple.size,
                    height: ripple.size,
                } }));
        })));
};

var handleBGColor = function (_a) {
    var variant = _a.variant, outlined = _a.outlined, disabled = _a.disabled, theme = _a.theme;
    if (outlined) {
        return "transparent";
    }
    if (disabled) {
        switch (variant) {
            case "primary":
                return theme.colors.primary.green40;
            case "secondary":
                return theme.colors.secondary.purple40;
            default:
                return theme.colors.neutrals.lightergrey;
        }
    }
    switch (variant) {
        case "primary":
            return theme.colors.primary.green;
        case "secondary":
            return theme.colors.secondary.purple;
        default:
            return theme.colors.neutrals.lightgrey;
    }
};
var handleTextColor = function (_a) {
    var variant = _a.variant, outlined = _a.outlined, disabled = _a.disabled, theme = _a.theme;
    if (disabled) {
        switch (variant) {
            case "primary":
                return theme.colors.primary.green40;
            case "secondary":
                return theme.colors.secondary.purple40;
            default:
                return theme.colors.neutrals.lightgrey;
        }
    }
    if (outlined) {
        switch (variant) {
            case "primary":
                return theme.colors.primary.green;
            case "secondary":
                return theme.colors.secondary.purple;
            default:
                return theme.colors.neutrals.darkgrey;
        }
    }
    return !variant
        ? theme.colors.neutrals.darkgrey
        : theme.colors.neutrals.white;
};
var handleBorderColor = function (_a) {
    var variant = _a.variant, disabled = _a.disabled, theme = _a.theme;
    if (disabled) {
        switch (variant) {
            case "primary":
                return theme.colors.primary.green;
            case "secondary":
                return theme.colors.secondary.purple;
            default:
                return theme.colors.neutrals.lightergrey;
        }
    }
    switch (variant) {
        case "primary":
            return theme.colors.primary.green;
        case "secondary":
            return theme.colors.secondary.purple;
        default:
            return theme.colors.neutrals.lightgrey;
    }
};
var Button$1 = styled.button(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  background-color: ", ";\n  border: ", ";\n  border-radius: 4px;\n  box-shadow: ", ";\n  color: ", ";\n  cursor: ", ";\n  /* padding: ", "; */\n  position: relative;\n  overflow: hidden;\n  height: ", ";\n  width: ", ";\n\n  ", ";\n\n  &:hover {\n    background-color: ", ";\n  }\n  &:focus,\n  &:active {\n    outline: none;\n  }\n\n  span.ripple {\n    position: absolute;\n    border-radius: 50%;\n    transform: scale(0);\n    animation: ripple 600ms linear;\n    background-color: rgba(255, 255, 255, 0.7);\n  }\n\n  @keyframes ripple {\n    to {\n      transform: scale(4);\n      opacity: 0;\n    }\n  }\n"], ["\n  background-color: ",
    ";\n  border: ",
    ";\n  border-radius: 4px;\n  box-shadow: ", ";\n  color: ",
    ";\n  cursor: ", ";\n  /* padding: ",
    "; */\n  position: relative;\n  overflow: hidden;\n  height: ",
    ";\n  width: ",
    ";\n\n  ", ";\n\n  &:hover {\n    background-color: ",
    ";\n  }\n  &:focus,\n  &:active {\n    outline: none;\n  }\n\n  span.ripple {\n    position: absolute;\n    border-radius: 50%;\n    transform: scale(0);\n    animation: ripple 600ms linear;\n    background-color: rgba(255, 255, 255, 0.7);\n  }\n\n  @keyframes ripple {\n    to {\n      transform: scale(4);\n      opacity: 0;\n    }\n  }\n"])), function (_a) {
    var variant = _a.variant, outlined = _a.outlined, disabled = _a.disabled, theme = _a.theme;
    return handleBGColor({ variant: variant, outlined: outlined, disabled: disabled, theme: theme });
}, function (_a) {
    var variant = _a.variant, outlined = _a.outlined, disabled = _a.disabled, theme = _a.theme;
    return "2px solid " + handleBorderColor({ variant: variant, outlined: outlined, disabled: disabled, theme: theme });
}, function (_a) {
    var theme = _a.theme, disabled = _a.disabled;
    return !disabled && theme.shadows.gray1;
}, function (_a) {
    var variant = _a.variant, outlined = _a.outlined, disabled = _a.disabled, theme = _a.theme;
    return handleTextColor({ variant: variant, outlined: outlined, disabled: disabled, theme: theme });
}, function (_a) {
    var disabled = _a.disabled;
    return (disabled ? "not-allowed" : "pointer");
}, function (_a) {
    var theme = _a.theme;
    return theme.spacing(1) + "px " + theme.spacing(2) + "px";
}, function (_a) {
    var size = _a.size;
    if (size === "small") {
        return "25px";
    }
    return "35px";
}, function (_a) {
    var size = _a.size;
    if (size === "small") {
        return "60px";
    }
    return "120px";
}, function (_a) {
    var theme = _a.theme;
    return theme.fonts.button;
}, function (_a) {
    var variant = _a.variant, outlined = _a.outlined, disabled = _a.disabled, theme = _a.theme;
    return handleBGColor({ variant: variant, outlined: outlined, disabled: disabled, theme: theme });
});
var LoadingContainer = styled.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  position: absolute;\n"], ["\n  position: absolute;\n"])));
var templateObject_1, templateObject_2;

var Button = function (_a) {
    var children = _a.children, disabled = _a.disabled, isLoading = _a.isLoading, outlined = _a.outlined, _b = _a.type, type = _b === void 0 ? "button" : _b, _c = _a.size, size = _c === void 0 ? "medium" : _c, variant = _a.variant, rest = __rest(_a, ["children", "disabled", "isLoading", "outlined", "type", "size", "variant"]);
    return (React.createElement(Button$1, __assign({ type: type, role: "button", disabled: isLoading || disabled, size: size, outlined: outlined, variant: variant }, rest),
        children,
        isLoading ? (React.createElement(LoadingContainer, null)) : null,
        React.createElement(Ripple, null)));
};

var colors = {
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
    yellow60: "rgba(214, 222, 35, 0.6)",
    yellow38: "rgba(214, 222, 35, 0.38)",
    yellow12: "rgba(214, 222, 35, 0.12)",
    yellow6: "rgba(214, 222, 35, 0.06)",
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
var genericFontProps = {
    fontFamily: "Space Grotesk",
};
var fonts = {
    heading1: __assign(__assign({}, genericFontProps), { fontSize: 68, lineHeight: "76px" }),
    heading2: __assign(__assign({}, genericFontProps), { fontSize: 46, lineHeight: "54px" }),
    heading3: __assign(__assign({}, genericFontProps), { fontSize: 30, lineHeight: "38px" }),
    heading4: __assign(__assign({}, genericFontProps), { fontSize: 24, lineHeight: "32px" }),
    heading5: __assign(__assign({}, genericFontProps), { fontSize: 24, lineHeight: "28px" }),
    body1: __assign(__assign({}, genericFontProps), { fontSize: 16, lineHeight: "24px" }),
    body2: __assign(__assign({}, genericFontProps), { fontSize: 14, lineHeight: "22px" }),
    button: __assign(__assign({}, genericFontProps), { fontSize: 16, fontWeight: 600, textTransform: "uppercase", lineHeight: "24px" }),
};
// const gutter = 24;
var breakpoints = {
    xl: 1440,
    lg: 1280,
    md: 1024,
    sm: 768,
    xs: 480,
};
var mediaQueries = {
    xs: "(max-width: " + breakpoints.xs + "px)",
    sm: "(max-width: " + breakpoints.sm + "px)",
    md: "(max-width: " + breakpoints.md + "px)",
    lg: "(max-width: " + breakpoints.lg + "px)",
    xl: "(max-width: " + breakpoints.xl + "px)",
    smUp: "(min-width: " + breakpoints.sm + "px)",
    mdUp: "(min-width: " + breakpoints.md + "px)",
    lgUp: "(min-width: " + breakpoints.lg + "px)",
    xlUp: "(min-width: " + breakpoints.xl + "px)",
};
var shadows = {
    gray1: "0px 3px 1px -2px rgba(0, 0, 0, 0.2),0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12)",
};
var spacing = function (number) { return number * 8; };
var index = {
    colors: colors,
    fonts: fonts,
    mediaQueries: mediaQueries,
    shadows: shadows,
    spacing: spacing,
};

export { Button, index as theme };
//# sourceMappingURL=index.esm.js.map
