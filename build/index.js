'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var styled = require('styled-components');
var React = require('react');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var styled__default = /*#__PURE__*/_interopDefaultLegacy(styled);
var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

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
var index$1 = {
    colors: colors,
    fonts: fonts,
    mediaQueries: mediaQueries,
    shadows: shadows,
    spacing: spacing,
};

var rippleAnimation = styled.keyframes(templateObject_1$4 || (templateObject_1$4 = __makeTemplateObject(["\n  to {\n      opacity: 0;\n      transform: scale(2);\n    }\n"], ["\n  to {\n      opacity: 0;\n      transform: scale(2);\n    }\n"])));
var RippleContainer = styled__default['default'].div(templateObject_2$3 || (templateObject_2$3 = __makeTemplateObject(["\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n\n  span {\n    transform: scale(0);\n    border-radius: 100%;\n    position: absolute;\n    opacity: 0.75;\n    background-color: ", ";\n    animation-name: ", ";\n    animation-duration: ", "ms;\n  }\n"], ["\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n\n  span {\n    transform: scale(0);\n    border-radius: 100%;\n    position: absolute;\n    opacity: 0.75;\n    background-color: ", ";\n    animation-name: ", ";\n    animation-duration: ", "ms;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.neutrals.white;
}, rippleAnimation, function (_a) {
    var duration = _a.duration;
    return duration;
});
var templateObject_1$4, templateObject_2$3;

var Ripple = function (_a) {
    var _b = _a.duration, duration = _b === void 0 ? 850 : _b;
    var _c = React.useState([]), rippleArray = _c[0], setRippleArray = _c[1];
    var cleanUpFunction = function () {
        setRippleArray([]);
    };
    React.useLayoutEffect(function () {
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
    return (React__default['default'].createElement(RippleContainer, { duration: duration, onMouseDown: addRipple }, rippleArray.length > 0 &&
        rippleArray.map(function (ripple, index) {
            return (React__default['default'].createElement("span", { key: "span" + index, style: {
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
var Button$1 = styled__default['default'].button(templateObject_1$3 || (templateObject_1$3 = __makeTemplateObject(["\n  background-color: ", ";\n  border: ", ";\n  border-radius: 4px;\n  box-shadow: ", ";\n  color: ", ";\n  cursor: ", ";\n  /* padding: ", "; */\n  position: relative;\n  overflow: hidden;\n  height: ", ";\n  width: ", ";\n\n  ", ";\n\n  &:hover {\n    background-color: ", ";\n  }\n  &:focus,\n  &:active {\n    outline: none;\n  }\n\n  span.ripple {\n    position: absolute;\n    border-radius: 50%;\n    transform: scale(0);\n    animation: ripple 600ms linear;\n    background-color: rgba(255, 255, 255, 0.7);\n  }\n\n  @keyframes ripple {\n    to {\n      transform: scale(4);\n      opacity: 0;\n    }\n  }\n"], ["\n  background-color: ",
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
var LoadingContainer = styled__default['default'].div(templateObject_2$2 || (templateObject_2$2 = __makeTemplateObject(["\n  position: absolute;\n"], ["\n  position: absolute;\n"])));
var templateObject_1$3, templateObject_2$2;

var Button = function (_a) {
    var children = _a.children, disabled = _a.disabled, isLoading = _a.isLoading, outlined = _a.outlined, _b = _a.type, type = _b === void 0 ? "button" : _b, _c = _a.size, size = _c === void 0 ? "medium" : _c, variant = _a.variant, rest = __rest(_a, ["children", "disabled", "isLoading", "outlined", "type", "size", "variant"]);
    return (React__default['default'].createElement(Button$1, __assign({ type: type, role: "button", disabled: isLoading || disabled, size: size, outlined: outlined, variant: variant }, rest),
        children,
        isLoading ? (React__default['default'].createElement(LoadingContainer, null)) : null,
        React__default['default'].createElement(Ripple, null)));
};

var Link = styled__default['default'].button(templateObject_1$2 || (templateObject_1$2 = __makeTemplateObject(["\n  background-color: transparent;\n  border: none;\n  color: ", ";\n  cursor: pointer;\n  text-decoration: underline;\n\n  ", ";\n  &:focus,\n  &:active {\n    border: none;\n    outline: none;\n  }\n"], ["\n  background-color: transparent;\n  border: none;\n  color: ",
    ";\n  cursor: pointer;\n  text-decoration: underline;\n\n  ", ";\n  &:focus,\n  &:active {\n    border: none;\n    outline: none;\n  }\n"])), function (_a) {
    var theme = _a.theme, disabled = _a.disabled;
    return disabled ? theme.colors.secondary.purple40 : theme.colors.secondary.purple;
}, function (_a) {
    var theme = _a.theme;
    return theme.fonts.body1;
});
var templateObject_1$2;

var ButtonLink = function (_a) {
    var children = _a.children, _b = _a.element, element = _b === void 0 ? "button" : _b; _a.to; var rest = __rest(_a, ["children", "element", "to"]);
    return (React__default['default'].createElement(Link, __assign({ as: element }, rest), children));
};

var _path$9;

function _extends$9() { _extends$9 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$9.apply(this, arguments); }

function SvgArrowDown(props) {
  return /*#__PURE__*/React.createElement("svg", _extends$9({
    width: 12,
    height: 8,
    fill: "#4C5867",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _path$9 || (_path$9 = /*#__PURE__*/React.createElement("path", {
    d: "M1.41 0L6 4.58 10.59 0 12 1.41l-6 6-6-6L1.41 0z"
  })));
}

var _path$8;

function _extends$8() { _extends$8 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$8.apply(this, arguments); }

function SvgArrowLeft(props) {
  return /*#__PURE__*/React.createElement("svg", _extends$8({
    width: 8,
    height: 12,
    fill: "#4C5867",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _path$8 || (_path$8 = /*#__PURE__*/React.createElement("path", {
    d: "M7.41 1.41L2.83 6l4.58 4.59L6 12 0 6l6-6 1.41 1.41z"
  })));
}

var _path$7;

function _extends$7() { _extends$7 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$7.apply(this, arguments); }

function SvgArrowRight(props) {
  return /*#__PURE__*/React.createElement("svg", _extends$7({
    width: 8,
    height: 12,
    fill: "#4C5867",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _path$7 || (_path$7 = /*#__PURE__*/React.createElement("path", {
    d: "M0 10.59L4.58 6 0 1.41 1.41 0l6 6-6 6L0 10.59z"
  })));
}

var _path$6;

function _extends$6() { _extends$6 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$6.apply(this, arguments); }

function SvgArrowUp(props) {
  return /*#__PURE__*/React.createElement("svg", _extends$6({
    width: 12,
    height: 8,
    fill: "#4C5867",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _path$6 || (_path$6 = /*#__PURE__*/React.createElement("path", {
    d: "M10.59 7.41L6 2.83 1.41 7.41 0 6l6-6 6 6-1.41 1.41z"
  })));
}

var _path$5;

function _extends$5() { _extends$5 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$5.apply(this, arguments); }

function SvgClose(props) {
  return /*#__PURE__*/React.createElement("svg", _extends$5({
    width: 14,
    height: 14,
    fill: "#4C5867",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _path$5 || (_path$5 = /*#__PURE__*/React.createElement("path", {
    d: "M8.46 7L14 12.54V14h-1.46L7 8.46 1.46 14H0v-1.46L5.54 7 0 1.46V0h1.46L7 5.54 12.54 0H14v1.46L8.46 7z"
  })));
}

var _path$4;

function _extends$4() { _extends$4 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$4.apply(this, arguments); }

function SvgNotification(props) {
  return /*#__PURE__*/React.createElement("svg", _extends$4({
    width: 16,
    height: 20,
    fill: "#4C5867",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _path$4 || (_path$4 = /*#__PURE__*/React.createElement("path", {
    d: "M8 19.5c1.1 0 2-.9 2-2H6c0 1.1.9 2 2 2zm6-6v-5c0-3.07-1.63-5.64-4.5-6.32V1.5C9.5.67 8.83 0 8 0S6.5.67 6.5 1.5v.68C3.64 2.86 2 5.42 2 8.5v5l-2 2v1h16v-1l-2-2zm-2 1H4v-6C4 6.02 5.51 4 8 4s4 2.02 4 4.5v6z"
  })));
}

var _path$3;

function _extends$3() { _extends$3 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$3.apply(this, arguments); }

function SvgPatients(props) {
  return /*#__PURE__*/React.createElement("svg", _extends$3({
    width: 22,
    height: 14,
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _path$3 || (_path$3 = /*#__PURE__*/React.createElement("path", {
    d: "M15.5 8c-1.2 0-3.07.34-4.5 1-1.43-.67-3.3-1-4.5-1C4.33 8 0 9.08 0 11.25V14h22v-2.75C22 9.08 17.67 8 15.5 8zm-4 4.5h-10v-1.25c0-.54 2.56-1.75 5-1.75s5 1.21 5 1.75v1.25zm9 0H13v-1.25c0-.46-.2-.86-.52-1.22.88-.3 1.96-.53 3.02-.53 2.44 0 5 1.21 5 1.75v1.25zM6.5 7C8.43 7 10 5.43 10 3.5S8.43 0 6.5 0 3 1.57 3 3.5 4.57 7 6.5 7zm0-5.5c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm9 5.5C17.43 7 19 5.43 19 3.5S17.43 0 15.5 0 12 1.57 12 3.5 13.57 7 15.5 7zm0-5.5c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2z",
    fill: "#4C5867"
  })));
}

var _path$2;

function _extends$2() { _extends$2 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$2.apply(this, arguments); }

function SvgPrint(props) {
  return /*#__PURE__*/React.createElement("svg", _extends$2({
    width: 20,
    height: 18,
    fill: "#4C5867",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _path$2 || (_path$2 = /*#__PURE__*/React.createElement("path", {
    d: "M17 5H3C1.34 5 0 6.34 0 8v6h4v4h12v-4h4V8c0-1.66-1.34-3-3-3zm-3 11H6v-5h8v5zm3-7c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm-1-9H4v4h12V0z"
  })));
}

var _path$1, _path2$1, _path3$1, _path4$1, _path5$1, _defs$1;

function _extends$1() { _extends$1 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$1.apply(this, arguments); }

function SvgProntmedLogoDarkBg(props) {
  return /*#__PURE__*/React.createElement("svg", _extends$1({
    width: 185,
    height: 48,
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _path$1 || (_path$1 = /*#__PURE__*/React.createElement("path", {
    d: "M64.156 17.407c-1.005-.562-2.13-.858-3.401-.858-1.893 0-3.402.74-4.526 2.219l-.354-2.07H53.33V36.04h2.928v-7.394a4.463 4.463 0 001.834 1.538c.769.384 1.656.562 2.691.562 1.272 0 2.396-.296 3.402-.888 1.005-.591 1.774-1.42 2.336-2.514.563-1.065.829-2.337.829-3.727 0-1.449-.296-2.72-.829-3.786-.591-1.035-1.36-1.863-2.366-2.425zm-.946 9.583c-.74.858-1.745 1.302-2.958 1.302s-2.189-.444-2.928-1.302c-.74-.858-1.124-2.011-1.124-3.401 0-1.36.384-2.455 1.124-3.313.74-.828 1.715-1.272 2.928-1.272 1.213 0 2.189.414 2.958 1.272.74.858 1.124 1.952 1.124 3.342 0 1.39-.355 2.514-1.124 3.372zM76.106 17.26a4.503 4.503 0 00-1.538 1.537l-.326-2.1H68.77V19.3h2.87v8.725h-2.87v2.603h9.051v-2.603h-3.253v-4.377c0-1.213.266-2.218.828-3.017.532-.799 1.42-1.183 2.632-1.183h1.301v-2.75h-.65c-1.094 0-1.952.206-2.573.561zM90.805 17.437c-1.064-.592-2.306-.888-3.697-.888-1.39 0-2.632.296-3.697.888a6.422 6.422 0 00-2.514 2.514c-.592 1.064-.887 2.307-.887 3.697 0 1.42.295 2.662.887 3.727.592 1.064 1.42 1.922 2.514 2.514 1.094.591 2.307.887 3.697.887 1.39 0 2.633-.296 3.697-.887 1.065-.592 1.923-1.42 2.515-2.514.591-1.065.887-2.337.887-3.727 0-1.39-.296-2.633-.887-3.697-.592-1.065-1.42-1.923-2.514-2.514zm-.71 9.553c-.739.858-1.744 1.302-2.987 1.302-1.242 0-2.218-.444-2.957-1.302-.74-.858-1.124-1.982-1.124-3.342s.384-2.455 1.124-3.342c.739-.858 1.715-1.302 2.957-1.302 1.243 0 2.219.444 2.988 1.302.74.857 1.124 1.981 1.124 3.342 0 1.36-.385 2.484-1.124 3.342zM103.908 16.55c-1.922 0-3.401.65-4.466 1.981l-.325-1.834h-2.544V30.6h2.928v-7.01c0-1.42.326-2.514 1.006-3.342.651-.8 1.568-1.213 2.721-1.213 1.095 0 1.923.355 2.485 1.035.562.68.828 1.686.828 3.017v7.513h2.958v-7.661c0-2.248-.533-3.875-1.568-4.88-1.035-1.006-2.396-1.509-4.023-1.509zM116.331 27.7c-.207-.237-.325-.621-.325-1.153V19.3h3.342v-2.573h-3.342v-3.343h-2.958v13.458c0 1.272.296 2.248.917 2.84.621.62 1.567.917 2.898.917h2.84v-2.574h-2.219c-.562 0-.916-.088-1.153-.325zM144.518 27.7c-.207-.237-.325-.621-.325-1.153V22.76c0-2.16-.473-3.757-1.449-4.733-.947-.976-2.189-1.479-3.727-1.479-1.124 0-2.07.237-2.869.68a5.058 5.058 0 00-1.923 1.864 3.98 3.98 0 00-1.715-1.893c-.74-.414-1.597-.621-2.573-.621-1.716.03-3.076.68-4.082 1.982l-.325-1.834h-2.544v13.901h2.928v-7.453c0-1.243.296-2.248.887-2.988.592-.74 1.391-1.124 2.367-1.124.946 0 1.686.326 2.188.947.503.621.74 1.567.74 2.78v7.838h2.958v-7.512c0-1.243.295-2.219.887-2.958.591-.71 1.39-1.065 2.396-1.065.946 0 1.686.325 2.159.946.473.622.71 1.538.739 2.722v4.11c0 1.273.296 2.249.917 2.84.621.621 1.568.917 2.899.917h1.065v-2.573h-.503c-.533-.03-.888-.118-1.095-.355zM157.414 17.348c-1.035-.532-2.218-.828-3.549-.828s-2.485.296-3.52.887a6.062 6.062 0 00-2.396 2.485c-.562 1.064-.857 2.336-.857 3.756s.295 2.662.887 3.727a6.163 6.163 0 002.514 2.484c1.065.592 2.337.887 3.786.887 1.656 0 3.046-.443 4.17-1.36s1.805-2.07 2.041-3.49h-2.928c-.207.769-.621 1.39-1.213 1.804-.621.414-1.39.65-2.277.65-1.154 0-2.071-.354-2.751-1.064-.68-.71-1.065-1.656-1.153-2.87v-.147h10.5c.059-.384.088-.74.088-1.124-.029-1.33-.325-2.514-.917-3.49a6.712 6.712 0 00-2.425-2.307zm-7.158 4.791c.119-.976.503-1.774 1.213-2.336.71-.592 1.538-.887 2.485-.887 1.035 0 1.892.295 2.573.857.68.562 1.094 1.36 1.212 2.366h-7.483zM173.652 12.142v6.478c-.473-.651-1.094-1.154-1.834-1.538-.769-.385-1.656-.562-2.662-.562-1.242 0-2.366.296-3.372.887-1.005.592-1.774 1.42-2.336 2.514-.562 1.065-.858 2.337-.858 3.727 0 1.45.266 2.721.828 3.786.562 1.065 1.331 1.893 2.337 2.484 1.005.562 2.129.858 3.401.858 1.923 0 3.431-.74 4.526-2.248l.355 2.1h2.543V12.142h-2.928zm-1.094 14.878c-.74.858-1.716 1.271-2.928 1.271-1.213 0-2.189-.443-2.929-1.3-.739-.859-1.124-1.983-1.124-3.343 0-1.36.385-2.455 1.124-3.342.74-.858 1.716-1.302 2.929-1.302 1.212 0 2.188.444 2.928 1.302.739.857 1.124 1.981 1.124 3.371s-.355 2.515-1.124 3.343z",
    fill: "#fff"
  })), _path2$1 || (_path2$1 = /*#__PURE__*/React.createElement("path", {
    d: "M12.16 5.606a20.817 20.817 0 00-7.602 7.601c-2.81 4.821-3.55 10.44-2.13 15.824A20.658 20.658 0 0012.13 41.72a2.667 2.667 0 003.638-.976 2.663 2.663 0 00-.976-3.638 15.433 15.433 0 01-7.217-9.465c-1.065-4.023-.503-8.193 1.567-11.802a15.383 15.383 0 015.68-5.678 2.663 2.663 0 00-1.332-4.97 3.85 3.85 0 00-1.33.415z",
    fill: "url(#prontmed-logo-dark-bg_svg__paint0_linear)"
  })), _path3$1 || (_path3$1 = /*#__PURE__*/React.createElement("path", {
    d: "M24.434 14.124c1.508 0 2.84.296 3.963.858 1.154.562 2.041 1.36 2.662 2.425.621 1.035.947 2.248.947 3.638 0 1.39-.326 2.603-.947 3.638-.621 1.035-1.508 1.834-2.662 2.425-1.153.562-2.455.858-3.963.858h-3.135v6.152h-5.265V14.124h8.4z",
    fill: "#fff"
  })), _path4$1 || (_path4$1 = /*#__PURE__*/React.createElement("path", {
    d: "M38.158 23.677c0 8.578-6.98 15.558-15.558 15.558-2.721 0-5.413-.71-7.75-2.07a2.663 2.663 0 00-3.637.976 2.663 2.663 0 00.976 3.638 21.02 21.02 0 0010.411 2.78c11.506 0 20.882-9.376 20.882-20.881a2.65 2.65 0 00-2.662-2.663 2.67 2.67 0 00-2.662 2.662z",
    fill: "url(#prontmed-logo-dark-bg_svg__paint1_linear)"
  })), _path5$1 || (_path5$1 = /*#__PURE__*/React.createElement("path", {
    d: "M20.411 6.789a2.663 2.663 0 003.638.976 2.663 2.663 0 10-2.662-4.614c-1.271.74-1.686 2.366-.976 3.638zM29.344 9.185a2.663 2.663 0 104.614-2.662 2.663 2.663 0 10-4.614 2.662zM36.087 15.899a2.663 2.663 0 104.614-2.662 2.663 2.663 0 10-4.614 2.662zM38.513 25.009a2.663 2.663 0 003.638.976 2.663 2.663 0 10-2.662-4.614 2.663 2.663 0 00-.976 3.638z",
    fill: "#00C2BC"
  })), _defs$1 || (_defs$1 = /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("linearGradient", {
    id: "prontmed-logo-dark-bg_svg__paint0_linear",
    x1: 4.092,
    y1: 10.643,
    x2: 21.077,
    y2: 37.824,
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/React.createElement("stop", {
    stopColor: "#00C2BC"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: 0.656,
    stopColor: "#00C2BC",
    stopOpacity: 0.5
  }), /*#__PURE__*/React.createElement("stop", {
    offset: 0.698,
    stopColor: "#04C3BD",
    stopOpacity: 0.44
  }), /*#__PURE__*/React.createElement("stop", {
    offset: 0.741,
    stopColor: "#11C6C0",
    stopOpacity: 0.377
  }), /*#__PURE__*/React.createElement("stop", {
    offset: 0.784,
    stopColor: "#25CBC6",
    stopOpacity: 0.314
  }), /*#__PURE__*/React.createElement("stop", {
    offset: 0.829,
    stopColor: "#43D2CD",
    stopOpacity: 0.25
  }), /*#__PURE__*/React.createElement("stop", {
    offset: 0.873,
    stopColor: "#68DBD7",
    stopOpacity: 0.185
  }), /*#__PURE__*/React.createElement("stop", {
    offset: 0.918,
    stopColor: "#96E6E3",
    stopOpacity: 0.119
  }), /*#__PURE__*/React.createElement("stop", {
    offset: 0.962,
    stopColor: "#CBF3F1",
    stopOpacity: 0.055
  }), /*#__PURE__*/React.createElement("stop", {
    offset: 1,
    stopColor: "#fff",
    stopOpacity: 0
  })), /*#__PURE__*/React.createElement("linearGradient", {
    id: "prontmed-logo-dark-bg_svg__paint1_linear",
    x1: 16.191,
    y1: 46.056,
    x2: 42.029,
    y2: 21.105,
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/React.createElement("stop", {
    stopColor: "#00C2BC"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: 0.651,
    stopColor: "#00C2BC",
    stopOpacity: 0.5
  }), /*#__PURE__*/React.createElement("stop", {
    offset: 0.693,
    stopColor: "#04C3BD",
    stopOpacity: 0.44
  }), /*#__PURE__*/React.createElement("stop", {
    offset: 0.737,
    stopColor: "#11C6C0",
    stopOpacity: 0.377
  }), /*#__PURE__*/React.createElement("stop", {
    offset: 0.781,
    stopColor: "#25CBC6",
    stopOpacity: 0.314
  }), /*#__PURE__*/React.createElement("stop", {
    offset: 0.826,
    stopColor: "#43D2CD",
    stopOpacity: 0.25
  }), /*#__PURE__*/React.createElement("stop", {
    offset: 0.871,
    stopColor: "#68DBD7",
    stopOpacity: 0.185
  }), /*#__PURE__*/React.createElement("stop", {
    offset: 0.917,
    stopColor: "#96E6E3",
    stopOpacity: 0.119
  }), /*#__PURE__*/React.createElement("stop", {
    offset: 0.962,
    stopColor: "#CBF3F1",
    stopOpacity: 0.055
  }), /*#__PURE__*/React.createElement("stop", {
    offset: 1,
    stopColor: "#fff",
    stopOpacity: 0
  })))));
}

var _path, _path2, _path3, _path4, _path5, _defs;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function SvgProntmedLogoLightBg(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    width: 176,
    height: 43,
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _path || (_path = /*#__PURE__*/React.createElement("path", {
    d: "M63.156 15.407c-1.005-.562-2.13-.858-3.401-.858-1.893 0-3.402.74-4.526 2.219l-.354-2.07H52.33V34.04h2.928v-7.394a4.463 4.463 0 001.834 1.538c.769.384 1.656.562 2.691.562 1.272 0 2.396-.296 3.402-.888 1.006-.591 1.774-1.42 2.336-2.514.563-1.065.829-2.337.829-3.727 0-1.449-.296-2.72-.829-3.786-.591-1.035-1.36-1.863-2.366-2.425zm-.946 9.583c-.74.858-1.745 1.302-2.958 1.302s-2.189-.444-2.928-1.302c-.74-.858-1.124-2.011-1.124-3.401 0-1.36.384-2.455 1.124-3.313.74-.828 1.715-1.272 2.928-1.272 1.213 0 2.189.414 2.958 1.272.74.858 1.124 1.952 1.124 3.342 0 1.39-.355 2.514-1.124 3.372zM75.106 15.26a4.503 4.503 0 00-1.538 1.537l-.326-2.1H67.77V17.3h2.87v8.725h-2.87v2.603h9.051v-2.603h-3.253v-4.377c0-1.213.266-2.218.828-3.017.532-.799 1.42-1.183 2.632-1.183h1.301v-2.75h-.65c-1.094 0-1.952.206-2.573.561zM89.805 15.437c-1.064-.592-2.306-.888-3.697-.888-1.39 0-2.632.296-3.697.888a6.422 6.422 0 00-2.514 2.514c-.592 1.064-.887 2.307-.887 3.697 0 1.42.295 2.662.887 3.727.592 1.064 1.42 1.922 2.514 2.514 1.094.591 2.307.887 3.697.887 1.39 0 2.633-.296 3.697-.887 1.065-.592 1.923-1.42 2.515-2.514.591-1.065.887-2.337.887-3.727 0-1.39-.296-2.633-.887-3.697-.592-1.065-1.42-1.923-2.514-2.514zm-.71 9.553c-.739.858-1.744 1.302-2.987 1.302-1.242 0-2.218-.444-2.957-1.302-.74-.858-1.124-1.982-1.124-3.342s.384-2.455 1.124-3.342c.739-.858 1.715-1.302 2.957-1.302 1.243 0 2.219.444 2.988 1.302.74.857 1.124 1.981 1.124 3.342 0 1.36-.385 2.484-1.124 3.342zM102.908 14.55c-1.922 0-3.401.65-4.466 1.981l-.325-1.834h-2.544V28.6h2.928v-7.01c0-1.42.326-2.514 1.006-3.342.651-.8 1.568-1.213 2.721-1.213 1.095 0 1.923.355 2.485 1.035.562.68.828 1.686.828 3.017v7.513h2.958v-7.661c0-2.248-.533-3.875-1.568-4.88-1.035-1.006-2.396-1.509-4.023-1.509zM115.331 25.7c-.207-.237-.325-.621-.325-1.153V17.3h3.342v-2.573h-3.342v-3.343h-2.958v13.458c0 1.272.296 2.248.917 2.84.621.62 1.567.917 2.898.917h2.84v-2.574h-2.219c-.562 0-.916-.088-1.153-.325zM143.518 25.7c-.207-.237-.325-.621-.325-1.153V20.76c0-2.16-.473-3.757-1.449-4.733-.947-.976-2.189-1.479-3.727-1.479-1.124 0-2.07.237-2.869.68a5.058 5.058 0 00-1.923 1.864 3.98 3.98 0 00-1.715-1.893c-.74-.414-1.597-.621-2.573-.621-1.716.03-3.076.68-4.082 1.982l-.325-1.834h-2.544v13.901h2.928v-7.453c0-1.243.296-2.248.887-2.988.592-.74 1.391-1.124 2.367-1.124.946 0 1.686.326 2.188.947.503.621.74 1.567.74 2.78v7.838h2.958v-7.512c0-1.243.295-2.219.887-2.958.591-.71 1.39-1.065 2.396-1.065.946 0 1.686.325 2.159.946.473.622.71 1.538.739 2.722v4.11c0 1.273.296 2.249.917 2.84.621.621 1.568.917 2.899.917h1.065v-2.573h-.503c-.533-.03-.888-.118-1.095-.355zM156.414 15.348c-1.035-.533-2.218-.828-3.549-.828s-2.485.296-3.52.887a6.062 6.062 0 00-2.396 2.485c-.562 1.064-.857 2.336-.857 3.756s.295 2.662.887 3.727a6.163 6.163 0 002.514 2.484c1.065.592 2.337.887 3.786.887 1.656 0 3.046-.443 4.17-1.36s1.805-2.07 2.041-3.49h-2.928c-.207.769-.621 1.39-1.213 1.804-.621.414-1.39.65-2.277.65-1.154 0-2.071-.354-2.751-1.064-.68-.71-1.065-1.656-1.153-2.87v-.147h10.5c.059-.384.088-.74.088-1.124-.029-1.33-.325-2.514-.917-3.49a6.712 6.712 0 00-2.425-2.307zm-7.158 4.791c.119-.976.503-1.774 1.213-2.336.71-.592 1.538-.887 2.485-.887 1.035 0 1.892.295 2.573.857.68.562 1.094 1.36 1.212 2.366h-7.483zM172.652 10.142v6.478c-.473-.651-1.094-1.154-1.834-1.538-.769-.385-1.656-.562-2.662-.562-1.242 0-2.366.296-3.372.887-1.005.592-1.774 1.42-2.336 2.514-.562 1.065-.858 2.337-.858 3.727 0 1.45.266 2.721.828 3.786.562 1.065 1.331 1.893 2.337 2.484 1.005.562 2.129.858 3.401.858 1.923 0 3.431-.74 4.526-2.248l.355 2.1h2.543V10.142h-2.928zm-1.094 14.878c-.74.858-1.716 1.271-2.928 1.271-1.213 0-2.189-.443-2.929-1.3-.739-.859-1.124-1.983-1.124-3.343 0-1.36.385-2.455 1.124-3.342.74-.858 1.716-1.302 2.929-1.302 1.212 0 2.188.444 2.928 1.302.739.857 1.124 1.981 1.124 3.371s-.355 2.515-1.124 3.343z",
    fill: "#3D5C86"
  })), _path2 || (_path2 = /*#__PURE__*/React.createElement("path", {
    d: "M11.16 3.606a20.817 20.817 0 00-7.602 7.601c-2.81 4.821-3.55 10.44-2.13 15.824A20.658 20.658 0 0011.13 39.72a2.667 2.667 0 003.638-.976 2.663 2.663 0 00-.976-3.638 15.433 15.433 0 01-7.217-9.465c-1.065-4.023-.503-8.193 1.567-11.802a15.384 15.384 0 015.68-5.678 2.663 2.663 0 00-1.332-4.97 3.85 3.85 0 00-1.33.415z",
    fill: "url(#prontmed-logo-light-bg_svg__paint0_linear)"
  })), _path3 || (_path3 = /*#__PURE__*/React.createElement("path", {
    d: "M23.434 12.124c1.508 0 2.84.296 3.963.858 1.154.562 2.041 1.36 2.662 2.425.621 1.035.947 2.248.947 3.638 0 1.39-.326 2.603-.947 3.638-.621 1.035-1.508 1.834-2.662 2.425-1.153.562-2.455.858-3.963.858h-3.135v6.152h-5.265V12.124h8.4z",
    fill: "#3D5C86"
  })), _path4 || (_path4 = /*#__PURE__*/React.createElement("path", {
    d: "M37.158 21.677c0 8.578-6.98 15.558-15.558 15.558-2.721 0-5.413-.71-7.75-2.07a2.663 2.663 0 00-3.637.976 2.663 2.663 0 00.976 3.638 21.02 21.02 0 0010.411 2.78c11.506 0 20.882-9.376 20.882-20.881a2.65 2.65 0 00-2.662-2.663 2.67 2.67 0 00-2.662 2.662z",
    fill: "url(#prontmed-logo-light-bg_svg__paint1_linear)"
  })), _path5 || (_path5 = /*#__PURE__*/React.createElement("path", {
    d: "M19.411 4.789a2.663 2.663 0 003.638.976 2.663 2.663 0 10-2.662-4.614c-1.271.74-1.686 2.366-.976 3.638zM28.344 7.185a2.663 2.663 0 104.614-2.662 2.663 2.663 0 10-4.614 2.662zM35.087 13.899a2.663 2.663 0 10.976-3.638 2.663 2.663 0 00-.976 3.638zM37.513 23.009a2.663 2.663 0 003.638.976 2.663 2.663 0 10-2.662-4.614 2.663 2.663 0 00-.976 3.638z",
    fill: "#00C2BC"
  })), _defs || (_defs = /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("linearGradient", {
    id: "prontmed-logo-light-bg_svg__paint0_linear",
    x1: 3.092,
    y1: 8.643,
    x2: 20.077,
    y2: 35.824,
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/React.createElement("stop", {
    stopColor: "#00C2BC"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: 0.656,
    stopColor: "#00C2BC",
    stopOpacity: 0.5
  }), /*#__PURE__*/React.createElement("stop", {
    offset: 0.698,
    stopColor: "#04C3BD",
    stopOpacity: 0.44
  }), /*#__PURE__*/React.createElement("stop", {
    offset: 0.741,
    stopColor: "#11C6C0",
    stopOpacity: 0.377
  }), /*#__PURE__*/React.createElement("stop", {
    offset: 0.784,
    stopColor: "#25CBC6",
    stopOpacity: 0.314
  }), /*#__PURE__*/React.createElement("stop", {
    offset: 0.829,
    stopColor: "#43D2CD",
    stopOpacity: 0.25
  }), /*#__PURE__*/React.createElement("stop", {
    offset: 0.873,
    stopColor: "#68DBD7",
    stopOpacity: 0.185
  }), /*#__PURE__*/React.createElement("stop", {
    offset: 0.918,
    stopColor: "#96E6E3",
    stopOpacity: 0.119
  }), /*#__PURE__*/React.createElement("stop", {
    offset: 0.962,
    stopColor: "#CBF3F1",
    stopOpacity: 0.055
  }), /*#__PURE__*/React.createElement("stop", {
    offset: 1,
    stopColor: "#fff",
    stopOpacity: 0
  })), /*#__PURE__*/React.createElement("linearGradient", {
    id: "prontmed-logo-light-bg_svg__paint1_linear",
    x1: 15.191,
    y1: 44.056,
    x2: 41.029,
    y2: 19.105,
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/React.createElement("stop", {
    stopColor: "#00C2BC"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: 0.651,
    stopColor: "#00C2BC",
    stopOpacity: 0.5
  }), /*#__PURE__*/React.createElement("stop", {
    offset: 0.693,
    stopColor: "#04C3BD",
    stopOpacity: 0.44
  }), /*#__PURE__*/React.createElement("stop", {
    offset: 0.737,
    stopColor: "#11C6C0",
    stopOpacity: 0.377
  }), /*#__PURE__*/React.createElement("stop", {
    offset: 0.781,
    stopColor: "#25CBC6",
    stopOpacity: 0.314
  }), /*#__PURE__*/React.createElement("stop", {
    offset: 0.826,
    stopColor: "#43D2CD",
    stopOpacity: 0.25
  }), /*#__PURE__*/React.createElement("stop", {
    offset: 0.871,
    stopColor: "#68DBD7",
    stopOpacity: 0.185
  }), /*#__PURE__*/React.createElement("stop", {
    offset: 0.917,
    stopColor: "#96E6E3",
    stopOpacity: 0.119
  }), /*#__PURE__*/React.createElement("stop", {
    offset: 0.962,
    stopColor: "#CBF3F1",
    stopOpacity: 0.055
  }), /*#__PURE__*/React.createElement("stop", {
    offset: 1,
    stopColor: "#fff",
    stopOpacity: 0
  })))));
}

var iconDictionary = {
    "arrow-down": SvgArrowDown,
    "arrow-left": SvgArrowLeft,
    "arrow-right": SvgArrowRight,
    "arrow-up": SvgArrowUp,
    close: SvgClose,
    notification: SvgNotification,
    patients: SvgPatients,
    print: SvgPrint,
    "prontmed-logo-dark-bg": SvgProntmedLogoDarkBg,
    "prontmed-logo-light-bg": SvgProntmedLogoLightBg,
};

var index = (function (_a) {
    var name = _a.name, fill = _a.fill, height = _a.height, width = _a.width, _b = _a.color, color = _b === void 0 ? "darkestgrey" : _b, _c = _a.size, size = _c === void 0 ? 21 : _c, rest = __rest(_a, ["name", "fill", "height", "width", "color", "size"]);
    var Icon = iconDictionary[name];
    var colorToFill = colors.neutrals[color] ||
        colors.system[color] ||
        colors.secondary[color] ||
        colors.primary[color];
    return Icon ? (React__default['default'].createElement(Icon, __assign({ role: "img", "aria-label": name, fill: fill ? fill : colorToFill, width: width || size, height: height || size }, rest))) : null;
});

var Container = styled__default['default'].div(templateObject_2$1 || (templateObject_2$1 = __makeTemplateObject(["\n  ", "\n"], ["\n  ",
    "\n"])), function (_a) {
    var theme = _a.theme;
    return styled.css(templateObject_1$1 || (templateObject_1$1 = __makeTemplateObject(["\n    align-items: center;\n    border: 1px solid ", ";\n    border-radius: 4px;\n    color: ", ";\n    display: inline-flex;\n    height: 40px;\n    padding: ", "px ", "px;\n  "], ["\n    align-items: center;\n    border: 1px solid ", ";\n    border-radius: 4px;\n    color: ", ";\n    display: inline-flex;\n    height: 40px;\n    padding: ", "px ", "px;\n  "])), theme.colors.neutrals.lightgrey, theme.colors.neutrals.darkestgrey, theme.spacing(1), theme.spacing(2));
});
var PrefixContainer = styled__default['default'].div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  align-items: center;\n  display: flex;\n  justify-content: center;\n  margin-right: ", "px;\n"], ["\n  align-items: center;\n  display: flex;\n  justify-content: center;\n  margin-right: ", "px;\n"])), function (_a) {
    var theme = _a.theme;
    return theme.spacing(1);
});
var SuffixContainer = styled__default['default'].div(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  align-items: center;\n  display: flex;\n  justify-content: center;\n  margin-left: ", "px;\n"], ["\n  align-items: center;\n  display: flex;\n  justify-content: center;\n  margin-left: ", "px;\n"])), function (_a) {
    var theme = _a.theme;
    return theme.spacing(1);
});
var Input = styled__default['default'].input(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n  ", "\n"], ["\n  ",
    "\n"])), function (_a) {
    var theme = _a.theme;
    return styled.css(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n    border: none;\n    color: inherit;\n    font-weight: 300;\n    outline: none;\n    ", ";\n\n    &:focus,\n    &:active {\n      border: none;\n      outline: none;\n    }\n  "], ["\n    border: none;\n    color: inherit;\n    font-weight: 300;\n    outline: none;\n    ", ";\n\n    &:focus,\n    &:active {\n      border: none;\n      outline: none;\n    }\n  "])), theme.fonts.body1);
});
var templateObject_1$1, templateObject_2$1, templateObject_3, templateObject_4, templateObject_5, templateObject_6;

var Text$1 = function (_a) {
    var className = _a.className, Prefix = _a.prefix, Suffix = _a.suffix, rest = __rest(_a, ["className", "prefix", "suffix"]);
    return (React__default['default'].createElement(Container, { className: className },
        !!Prefix && React__default['default'].createElement(PrefixContainer, null, Prefix),
        React__default['default'].createElement(Input, __assign({}, rest)),
        !!Suffix && React__default['default'].createElement(SuffixContainer, null, Suffix)));
};

var Text = styled__default['default'].p(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  ", "\n"], ["\n  ",
    "\n"])), function (_a) {
    var theme = _a.theme, type = _a.type, color = _a.color;
    return styled.css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    font-weight: 300;\n    color: ", ";\n\n    ", ";\n  "], ["\n    font-weight: 300;\n    color: ",
        ";\n\n    ", ";\n  "])), theme.colors.neutrals[color] ||
        theme.colors.system[color] ||
        theme.colors.secondary[color] ||
        theme.colors.primary[color], theme.fonts[type]);
});
var templateObject_1, templateObject_2;

var Typography = function (_a) {
    _a.children; var _b = _a.color, color = _b === void 0 ? "darkestgrey" : _b, _c = _a.type, type = _c === void 0 ? "body1" : _c, _d = _a.variant, variant = _d === void 0 ? "p" : _d, rest = __rest(_a, ["children", "color", "type", "variant"]);
    return (React__default['default'].createElement(Text, __assign({ as: variant, color: color, type: type }, rest), "Typography"));
};

exports.Button = Button;
exports.ButtonLink = ButtonLink;
exports.Icon = index;
exports.InputText = Text$1;
exports.Typography = Typography;
exports.theme = index$1;
//# sourceMappingURL=index.js.map
