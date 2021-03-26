import styled, { css, keyframes } from 'styled-components';
import React, { useState, useLayoutEffect, createElement, useRef, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { usePopper } from 'react-popper';

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
var genericFontProps = {
    fontFamily: 'Space Grotesk',
    fontWeight: 400,
};
var fonts = {
    heading1: __assign(__assign({}, genericFontProps), { fontSize: 68, lineHeight: '76px' }),
    heading2: __assign(__assign({}, genericFontProps), { fontSize: 46, lineHeight: '54px' }),
    heading3: __assign(__assign({}, genericFontProps), { fontSize: 30, lineHeight: '38px' }),
    heading4: __assign(__assign({}, genericFontProps), { fontSize: 24, lineHeight: '32px' }),
    heading5: __assign(__assign({}, genericFontProps), { fontSize: 20, lineHeight: '28px' }),
    body1: __assign(__assign({}, genericFontProps), { fontSize: 16, lineHeight: '24px' }),
    body2: __assign(__assign({}, genericFontProps), { fontSize: 14, lineHeight: '22px' }),
    caption: __assign(__assign({}, genericFontProps), { fontSize: 14, lineHeight: '16px' }),
    button: __assign(__assign({}, genericFontProps), { fontSize: 16, fontWeight: 600, lineHeight: '24px' }),
};
var gutter = 8;
var breakpoints = {
    xl: 1440,
    lg: 1200,
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
    button: '0px 3px 1px -2px rgba(0, 0, 0, 0.2),0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12)',
    popper: '0px 2px 5px 0 rgba(0, 0, 0, 0.5)',
};
var borderRadius = {
    square: '4px',
    circle: '50%',
};
var spacing = function (number) { return number * gutter; };
var index = {
    borderRadius: borderRadius,
    colors: colors,
    fonts: fonts,
    mediaQueries: mediaQueries,
    shadows: shadows,
    spacing: spacing,
};

var Container$2 = styled.div(templateObject_2$9 || (templateObject_2$9 = __makeTemplateObject(["\n  ", "\n"], ["\n  ",
    "\n"])), function (_a) {
    var size = _a.size, theme = _a.theme, variant = _a.variant;
    return css(templateObject_1$a || (templateObject_1$a = __makeTemplateObject(["\n    align-items: center;\n    background-color: ", ";\n    border-radius: ", ";\n    color: ", ";\n    display: flex;\n    justify-content: center;\n    height: ", "px;\n    overflow: hidden;\n    width: ", "px;\n\n    ", ";\n\n    img {\n      width: 100%;\n    }\n  "], ["\n    align-items: center;\n    background-color: ", ";\n    border-radius: ", ";\n    color: ", ";\n    display: flex;\n    justify-content: center;\n    height: ", "px;\n    overflow: hidden;\n    width: ", "px;\n\n    ", ";\n\n    img {\n      width: 100%;\n    }\n  "])), theme.colors.neutrals.lightergrey, theme.borderRadius[variant], theme.colors.neutrals.darkestgrey, size, size, theme.fonts.body1);
});
var templateObject_1$a, templateObject_2$9;

var Avatar = function (_a) {
    var alt = _a.alt, src = _a.src, placeholder = _a.placeholder, _b = _a.size, size = _b === void 0 ? 40 : _b, _c = _a.variant, variant = _c === void 0 ? "square" : _c, rest = __rest(_a, ["alt", "src", "placeholder", "size", "variant"]);
    // @todo: add validation to src/placeholder if both are images urls are valid
    var content = React.createElement("img", { alt: alt, src: src || placeholder });
    return (React.createElement(Container$2, __assign({ size: size, variant: variant }, rest), content));
};

var rippleAnimation = keyframes(templateObject_1$9 || (templateObject_1$9 = __makeTemplateObject(["\n  to {\n      opacity: 0;\n      transform: scale(2);\n    }\n"], ["\n  to {\n      opacity: 0;\n      transform: scale(2);\n    }\n"])));
var RippleContainer = styled.div(templateObject_2$8 || (templateObject_2$8 = __makeTemplateObject(["\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n\n  span {\n    transform: scale(0);\n    border-radius: 100%;\n    position: absolute;\n    opacity: 0.75;\n    background-color: ", ";\n    animation-name: ", ";\n    animation-duration: ", "ms;\n  }\n"], ["\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n\n  span {\n    transform: scale(0);\n    border-radius: 100%;\n    position: absolute;\n    opacity: 0.75;\n    background-color: ", ";\n    animation-name: ", ";\n    animation-duration: ", "ms;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.neutrals.white;
}, rippleAnimation, function (_a) {
    var duration = _a.duration;
    return duration;
});
var templateObject_1$9, templateObject_2$8;

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

var hexToRgb = function (hex) {
    // if hex has only 3 codes, duplicate. ex: #fab => #ffaabb
    var shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
    var newHex = hex.replace(shorthandRegex, function (m, r, g, b) { return r + r + g + g + b + b; });
    // result must be 6 codes and is separated in 3 groups (red, green and blue)
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(newHex);
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
var rgba = function (hex, alpha) {
    var color = hexToRgb(hex);
    return "rgba(" + (color === null || color === void 0 ? void 0 : color.r) + ", " + (color === null || color === void 0 ? void 0 : color.g) + ", " + (color === null || color === void 0 ? void 0 : color.b) + ", " + alpha + ")";
};
var findColorInTheme = function (color, opacity) {
    if (opacity === void 0) { opacity = 1; }
    return rgba(colors.neutrals[color] ||
        colors.system[color] ||
        colors.secondary[color] ||
        colors.primary[color], opacity);
};

var _path$k;

function _extends$k() { _extends$k = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$k.apply(this, arguments); }

function SvgArrowDown(props) {
  return /*#__PURE__*/createElement("svg", _extends$k({
    width: 12,
    height: 8,
    fill: "#4C5867",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _path$k || (_path$k = /*#__PURE__*/createElement("path", {
    d: "M1.41 0L6 4.58 10.59 0 12 1.41l-6 6-6-6L1.41 0z"
  })));
}

var _path$j;

function _extends$j() { _extends$j = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$j.apply(this, arguments); }

function SvgArrowLeft(props) {
  return /*#__PURE__*/createElement("svg", _extends$j({
    width: 8,
    height: 12,
    fill: "#4C5867",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _path$j || (_path$j = /*#__PURE__*/createElement("path", {
    d: "M7.41 1.41L2.83 6l4.58 4.59L6 12 0 6l6-6 1.41 1.41z"
  })));
}

var _path$i;

function _extends$i() { _extends$i = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$i.apply(this, arguments); }

function SvgArrowRight(props) {
  return /*#__PURE__*/createElement("svg", _extends$i({
    width: 8,
    height: 12,
    fill: "#4C5867",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _path$i || (_path$i = /*#__PURE__*/createElement("path", {
    d: "M0 10.59L4.58 6 0 1.41 1.41 0l6 6-6 6L0 10.59z"
  })));
}

var _path$h;

function _extends$h() { _extends$h = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$h.apply(this, arguments); }

function SvgArrowUp(props) {
  return /*#__PURE__*/createElement("svg", _extends$h({
    width: 12,
    height: 8,
    fill: "#4C5867",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _path$h || (_path$h = /*#__PURE__*/createElement("path", {
    d: "M10.59 7.41L6 2.83 1.41 7.41 0 6l6-6 6 6-1.41 1.41z"
  })));
}

var _path$g;

function _extends$g() { _extends$g = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$g.apply(this, arguments); }

function SvgClose(props) {
  return /*#__PURE__*/createElement("svg", _extends$g({
    width: 14,
    height: 14,
    fill: "#4C5867",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _path$g || (_path$g = /*#__PURE__*/createElement("path", {
    d: "M8.46 7L14 12.54V14h-1.46L7 8.46 1.46 14H0v-1.46L5.54 7 0 1.46V0h1.46L7 5.54 12.54 0H14v1.46L8.46 7z"
  })));
}

var _path$f;

function _extends$f() { _extends$f = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$f.apply(this, arguments); }

function SvgConfig(props) {
  return /*#__PURE__*/createElement("svg", _extends$f({
    width: 20,
    height: 20,
    fill: "#4C5867",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _path$f || (_path$f = /*#__PURE__*/createElement("path", {
    d: "M9.73 6a4 4 0 110 8 4 4 0 010-8zm0 2a2 2 0 100 4 2 2 0 000-4zm-2 12c-.25 0-.46-.18-.5-.42l-.37-2.65c-.63-.25-1.17-.59-1.69-.99l-2.49 1.01c-.22.08-.49 0-.61-.22l-2-3.46a.493.493 0 01.12-.64l2.11-1.66-.07-.97.07-1L.19 7.37a.493.493 0 01-.12-.64l2-3.46c.12-.22.39-.31.61-.22l2.49 1c.52-.39 1.06-.73 1.69-.98L7.23.42c.04-.24.25-.42.5-.42h4c.25 0 .46.18.5.42l.37 2.65c.63.25 1.17.59 1.69.98l2.49-1c.22-.09.49 0 .61.22l2 3.46c.13.22.07.49-.12.64L17.16 9l.07 1-.07 1 2.11 1.63c.19.15.25.42.12.64l-2 3.46c-.12.22-.39.31-.61.22l-2.49-1c-.52.39-1.06.73-1.69.98l-.37 2.65c-.04.24-.25.42-.5.42h-4zM8.98 2l-.37 2.61c-1.2.25-2.26.89-3.03 1.78L3.17 5.35l-.75 1.3L4.53 8.2a5.55 5.55 0 000 3.6l-2.12 1.56.75 1.3 2.43-1.04c.77.88 1.82 1.52 3.01 1.76L8.97 18h1.52l.37-2.61c1.19-.25 2.24-.89 3.01-1.77l2.43 1.04.75-1.3-2.12-1.55c.4-1.17.4-2.44 0-3.61l2.11-1.55-.75-1.3-2.41 1.04a5.42 5.42 0 00-3.03-1.77L10.48 2h-1.5z"
  })));
}

var _path$e;

function _extends$e() { _extends$e = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$e.apply(this, arguments); }

function SvgDocCheck(props) {
  return /*#__PURE__*/createElement("svg", _extends$e({
    width: 20,
    height: 20,
    fill: "#4C5867",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _path$e || (_path$e = /*#__PURE__*/createElement("path", {
    d: "M18 0H6a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2V2a2 2 0 00-2-2zm0 14H6V2h12v12zm-4 4v2H2a2 2 0 01-2-2V5h2v13h12zm2.53-11.94L15.47 5l-4.88 4.88-2.12-2.12-1.06 1.06L10.59 12l5.94-5.94z"
  })));
}

var _path$d;

function _extends$d() { _extends$d = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$d.apply(this, arguments); }

function SvgDoc(props) {
  return /*#__PURE__*/createElement("svg", _extends$d({
    width: 22,
    height: 22,
    fill: "#4C5867",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _path$d || (_path$d = /*#__PURE__*/createElement("path", {
    d: "M15 14H8v-2h7v2zm3-4H8V8h10v2zm0-4H8V4h10v2zM2 4v16h16v2H2a2 2 0 01-2-2V4h2zm18-4a2 2 0 012 2v14c0 1.11-.89 2-2 2H6a2 2 0 01-2-2V2c0-1.11.89-2 2-2h14zM6 2v14h14V2H6z"
  })));
}

var _path$c;

function _extends$c() { _extends$c = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$c.apply(this, arguments); }

function SvgGift(props) {
  return /*#__PURE__*/createElement("svg", _extends$c({
    width: 22,
    height: 20,
    fill: "#4C5867",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _path$c || (_path$c = /*#__PURE__*/createElement("path", {
    d: "M21 10v8a2 2 0 01-2 2H3a2 2 0 01-2-2v-8a1 1 0 01-1-1V6a2 2 0 012-2h3.17A3 3 0 018 0c1 0 1.88.5 2.43 1.24v-.01L11 2l.57-.77v.01C12.12.5 13 0 14 0a3 3 0 012.83 4H20a2 2 0 012 2v3a1 1 0 01-1 1zM3 18h7v-8H3v8zm16 0v-8h-7v8h7zM8 2a1 1 0 100 2 1 1 0 000-2zm6 0a1 1 0 100 2 1 1 0 000-2zM2 6v2h8V6H2zm10 0v2h8V6h-8z"
  })));
}

var _path$b;

function _extends$b() { _extends$b = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$b.apply(this, arguments); }

function SvgLifeboat(props) {
  return /*#__PURE__*/createElement("svg", _extends$b({
    width: 20,
    height: 20,
    fill: "#4C5867",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _path$b || (_path$b = /*#__PURE__*/createElement("path", {
    d: "M17.79 13.41c.95-2.17.95-4.66 0-6.82l-2.74 1.24c.6 1.38.6 2.95.01 4.34l2.73 1.24zm-4.37-11.2a8.54 8.54 0 00-6.83 0l1.24 2.73c1.39-.59 2.96-.59 4.35.01l1.24-2.74zM2.21 6.58a8.564 8.564 0 000 6.84l2.74-1.25c-.6-1.38-.6-2.96 0-4.35L2.21 6.58zm4.38 11.21a8.5 8.5 0 006.83-.01l-1.24-2.73a5.5 5.5 0 01-4.34.01l-1.25 2.73zM10 0a10 10 0 110 20 10 10 0 010-20zm0 6a4 4 0 100 8 4 4 0 000-8z"
  })));
}

var _path$a;

function _extends$a() { _extends$a = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$a.apply(this, arguments); }

function SvgLock(props) {
  return /*#__PURE__*/createElement("svg", _extends$a({
    width: 16,
    height: 21,
    fill: "#4C5867",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _path$a || (_path$a = /*#__PURE__*/createElement("path", {
    d: "M8 16a2 2 0 01-2-2c0-1.11.89-2 2-2a2 2 0 010 4zm6 3V9H2v10h12zm0-12a2 2 0 012 2v10a2 2 0 01-2 2H2a2 2 0 01-2-2V9c0-1.11.89-2 2-2h1V5a5 5 0 1110 0v2h1zM8 2a3 3 0 00-3 3v2h6V5a3 3 0 00-3-3z"
  })));
}

var _path$9;

function _extends$9() { _extends$9 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$9.apply(this, arguments); }

function SvgLogout(props) {
  return /*#__PURE__*/createElement("svg", _extends$9({
    width: 18,
    height: 18,
    fill: "#4C5867",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _path$9 || (_path$9 = /*#__PURE__*/createElement("path", {
    d: "M16 0H2C.89 0 0 .89 0 2v4h2V2h14v14H2v-4H0v4a2 2 0 002 2h14a2 2 0 002-2V2a2 2 0 00-2-2zM7.08 12.58L8.5 14l5-5-5-5-1.42 1.41L9.67 8H0v2h9.67l-2.59 2.58z"
  })));
}

var _path$8;

function _extends$8() { _extends$8 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$8.apply(this, arguments); }

function SvgEyeHidden(props) {
  return /*#__PURE__*/createElement("svg", _extends$8({
    width: 24,
    height: 24,
    fill: "#4C5867",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _path$8 || (_path$8 = /*#__PURE__*/createElement("path", {
    d: "M2 5.27L3.28 4 20 20.72 18.73 22l-3.08-3.08c-1.15.38-2.37.58-3.65.58-5 0-9.27-3.11-11-7.5.69-1.76 1.79-3.31 3.19-4.54L2 5.27zM12 9a3 3 0 012.83 4L11 9.17A3 3 0 0112 9zm0-4.5c5 0 9.27 3.11 11 7.5a11.79 11.79 0 01-4 5.19l-1.42-1.43A9.862 9.862 0 0020.82 12 9.821 9.821 0 0012 6.5c-1.09 0-2.16.18-3.16.5L7.3 5.47c1.44-.62 3.03-.97 4.7-.97zM3.18 12A9.821 9.821 0 0012 17.5c.69 0 1.37-.07 2-.21L11.72 15A3.064 3.064 0 019 12.28L5.6 8.87c-.99.85-1.82 1.91-2.42 3.13z"
  })));
}

var _path$7;

function _extends$7() { _extends$7 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$7.apply(this, arguments); }

function SvgNotification(props) {
  return /*#__PURE__*/createElement("svg", _extends$7({
    width: 16,
    height: 20,
    fill: "#4C5867",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _path$7 || (_path$7 = /*#__PURE__*/createElement("path", {
    d: "M8 19.5c1.1 0 2-.9 2-2H6c0 1.1.9 2 2 2zm6-6v-5c0-3.07-1.63-5.64-4.5-6.32V1.5C9.5.67 8.83 0 8 0S6.5.67 6.5 1.5v.68C3.64 2.86 2 5.42 2 8.5v5l-2 2v1h16v-1l-2-2zm-2 1H4v-6C4 6.02 5.51 4 8 4s4 2.02 4 4.5v6z"
  })));
}

var _path$6;

function _extends$6() { _extends$6 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$6.apply(this, arguments); }

function SvgPatients(props) {
  return /*#__PURE__*/createElement("svg", _extends$6({
    width: 22,
    height: 14,
    fill: "#4C5867",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _path$6 || (_path$6 = /*#__PURE__*/createElement("path", {
    d: "M15.5 8c-1.2 0-3.07.34-4.5 1-1.43-.67-3.3-1-4.5-1C4.33 8 0 9.08 0 11.25V14h22v-2.75C22 9.08 17.67 8 15.5 8zm-4 4.5h-10v-1.25c0-.54 2.56-1.75 5-1.75s5 1.21 5 1.75v1.25zm9 0H13v-1.25c0-.46-.2-.86-.52-1.22.88-.3 1.96-.53 3.02-.53 2.44 0 5 1.21 5 1.75v1.25zM6.5 7C8.43 7 10 5.43 10 3.5S8.43 0 6.5 0 3 1.57 3 3.5 4.57 7 6.5 7zm0-5.5c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm9 5.5C17.43 7 19 5.43 19 3.5S17.43 0 15.5 0 12 1.57 12 3.5 13.57 7 15.5 7zm0-5.5c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2z"
  })));
}

var _path$5;

function _extends$5() { _extends$5 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$5.apply(this, arguments); }

function SvgPrint(props) {
  return /*#__PURE__*/createElement("svg", _extends$5({
    width: 20,
    height: 18,
    fill: "#4C5867",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _path$5 || (_path$5 = /*#__PURE__*/createElement("path", {
    d: "M17 5H3C1.34 5 0 6.34 0 8v6h4v4h12v-4h4V8c0-1.66-1.34-3-3-3zm-3 11H6v-5h8v5zm3-7c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm-1-9H4v4h12V0z"
  })));
}

var _path$4, _path2$1, _path3$1, _path4$1, _path5$1, _defs$1;

function _extends$4() { _extends$4 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$4.apply(this, arguments); }

function SvgProntmedLogoDarkBg(props) {
  return /*#__PURE__*/createElement("svg", _extends$4({
    width: 185,
    height: 48,
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _path$4 || (_path$4 = /*#__PURE__*/createElement("path", {
    d: "M64.156 17.407c-1.005-.562-2.13-.858-3.401-.858-1.893 0-3.402.74-4.526 2.219l-.354-2.07H53.33V36.04h2.928v-7.394a4.463 4.463 0 001.834 1.538c.769.384 1.656.562 2.691.562 1.272 0 2.396-.296 3.402-.888 1.005-.591 1.774-1.42 2.336-2.514.563-1.065.829-2.337.829-3.727 0-1.449-.296-2.72-.829-3.786-.591-1.035-1.36-1.863-2.366-2.425zm-.946 9.583c-.74.858-1.745 1.302-2.958 1.302s-2.189-.444-2.928-1.302c-.74-.858-1.124-2.011-1.124-3.401 0-1.36.384-2.455 1.124-3.313.74-.828 1.715-1.272 2.928-1.272 1.213 0 2.189.414 2.958 1.272.74.858 1.124 1.952 1.124 3.342 0 1.39-.355 2.514-1.124 3.372zM76.106 17.26a4.503 4.503 0 00-1.538 1.537l-.326-2.1H68.77V19.3h2.87v8.725h-2.87v2.603h9.051v-2.603h-3.253v-4.377c0-1.213.266-2.218.828-3.017.532-.799 1.42-1.183 2.632-1.183h1.301v-2.75h-.65c-1.094 0-1.952.206-2.573.561zM90.805 17.437c-1.064-.592-2.306-.888-3.697-.888-1.39 0-2.632.296-3.697.888a6.422 6.422 0 00-2.514 2.514c-.592 1.064-.887 2.307-.887 3.697 0 1.42.295 2.662.887 3.727.592 1.064 1.42 1.922 2.514 2.514 1.094.591 2.307.887 3.697.887 1.39 0 2.633-.296 3.697-.887 1.065-.592 1.923-1.42 2.515-2.514.591-1.065.887-2.337.887-3.727 0-1.39-.296-2.633-.887-3.697-.592-1.065-1.42-1.923-2.514-2.514zm-.71 9.553c-.739.858-1.744 1.302-2.987 1.302-1.242 0-2.218-.444-2.957-1.302-.74-.858-1.124-1.982-1.124-3.342s.384-2.455 1.124-3.342c.739-.858 1.715-1.302 2.957-1.302 1.243 0 2.219.444 2.988 1.302.74.857 1.124 1.981 1.124 3.342 0 1.36-.385 2.484-1.124 3.342zM103.908 16.55c-1.922 0-3.401.65-4.466 1.981l-.325-1.834h-2.544V30.6h2.928v-7.01c0-1.42.326-2.514 1.006-3.342.651-.8 1.568-1.213 2.721-1.213 1.095 0 1.923.355 2.485 1.035.562.68.828 1.686.828 3.017v7.513h2.958v-7.661c0-2.248-.533-3.875-1.568-4.88-1.035-1.006-2.396-1.509-4.023-1.509zM116.331 27.7c-.207-.237-.325-.621-.325-1.153V19.3h3.342v-2.573h-3.342v-3.343h-2.958v13.458c0 1.272.296 2.248.917 2.84.621.62 1.567.917 2.898.917h2.84v-2.574h-2.219c-.562 0-.916-.088-1.153-.325zM144.518 27.7c-.207-.237-.325-.621-.325-1.153V22.76c0-2.16-.473-3.757-1.449-4.733-.947-.976-2.189-1.479-3.727-1.479-1.124 0-2.07.237-2.869.68a5.058 5.058 0 00-1.923 1.864 3.98 3.98 0 00-1.715-1.893c-.74-.414-1.597-.621-2.573-.621-1.716.03-3.076.68-4.082 1.982l-.325-1.834h-2.544v13.901h2.928v-7.453c0-1.243.296-2.248.887-2.988.592-.74 1.391-1.124 2.367-1.124.946 0 1.686.326 2.188.947.503.621.74 1.567.74 2.78v7.838h2.958v-7.512c0-1.243.295-2.219.887-2.958.591-.71 1.39-1.065 2.396-1.065.946 0 1.686.325 2.159.946.473.622.71 1.538.739 2.722v4.11c0 1.273.296 2.249.917 2.84.621.621 1.568.917 2.899.917h1.065v-2.573h-.503c-.533-.03-.888-.118-1.095-.355zM157.414 17.348c-1.035-.532-2.218-.828-3.549-.828s-2.485.296-3.52.887a6.062 6.062 0 00-2.396 2.485c-.562 1.064-.857 2.336-.857 3.756s.295 2.662.887 3.727a6.163 6.163 0 002.514 2.484c1.065.592 2.337.887 3.786.887 1.656 0 3.046-.443 4.17-1.36s1.805-2.07 2.041-3.49h-2.928c-.207.769-.621 1.39-1.213 1.804-.621.414-1.39.65-2.277.65-1.154 0-2.071-.354-2.751-1.064-.68-.71-1.065-1.656-1.153-2.87v-.147h10.5c.059-.384.088-.74.088-1.124-.029-1.33-.325-2.514-.917-3.49a6.712 6.712 0 00-2.425-2.307zm-7.158 4.791c.119-.976.503-1.774 1.213-2.336.71-.592 1.538-.887 2.485-.887 1.035 0 1.892.295 2.573.857.68.562 1.094 1.36 1.212 2.366h-7.483zM173.652 12.142v6.478c-.473-.651-1.094-1.154-1.834-1.538-.769-.385-1.656-.562-2.662-.562-1.242 0-2.366.296-3.372.887-1.005.592-1.774 1.42-2.336 2.514-.562 1.065-.858 2.337-.858 3.727 0 1.45.266 2.721.828 3.786.562 1.065 1.331 1.893 2.337 2.484 1.005.562 2.129.858 3.401.858 1.923 0 3.431-.74 4.526-2.248l.355 2.1h2.543V12.142h-2.928zm-1.094 14.878c-.74.858-1.716 1.271-2.928 1.271-1.213 0-2.189-.443-2.929-1.3-.739-.859-1.124-1.983-1.124-3.343 0-1.36.385-2.455 1.124-3.342.74-.858 1.716-1.302 2.929-1.302 1.212 0 2.188.444 2.928 1.302.739.857 1.124 1.981 1.124 3.371s-.355 2.515-1.124 3.343z",
    fill: "#fff"
  })), _path2$1 || (_path2$1 = /*#__PURE__*/createElement("path", {
    d: "M12.16 5.606a20.817 20.817 0 00-7.602 7.601c-2.81 4.821-3.55 10.44-2.13 15.824A20.658 20.658 0 0012.13 41.72a2.667 2.667 0 003.638-.976 2.663 2.663 0 00-.976-3.638 15.433 15.433 0 01-7.217-9.465c-1.065-4.023-.503-8.193 1.567-11.802a15.383 15.383 0 015.68-5.678 2.663 2.663 0 00-1.332-4.97 3.85 3.85 0 00-1.33.415z",
    fill: "url(#prontmed-logo-dark-bg_svg__paint0_linear)"
  })), _path3$1 || (_path3$1 = /*#__PURE__*/createElement("path", {
    d: "M24.434 14.124c1.508 0 2.84.296 3.963.858 1.154.562 2.041 1.36 2.662 2.425.621 1.035.947 2.248.947 3.638 0 1.39-.326 2.603-.947 3.638-.621 1.035-1.508 1.834-2.662 2.425-1.153.562-2.455.858-3.963.858h-3.135v6.152h-5.265V14.124h8.4z",
    fill: "#fff"
  })), _path4$1 || (_path4$1 = /*#__PURE__*/createElement("path", {
    d: "M38.158 23.677c0 8.578-6.98 15.558-15.558 15.558-2.721 0-5.413-.71-7.75-2.07a2.663 2.663 0 00-3.637.976 2.663 2.663 0 00.976 3.638 21.02 21.02 0 0010.411 2.78c11.506 0 20.882-9.376 20.882-20.881a2.65 2.65 0 00-2.662-2.663 2.67 2.67 0 00-2.662 2.662z",
    fill: "url(#prontmed-logo-dark-bg_svg__paint1_linear)"
  })), _path5$1 || (_path5$1 = /*#__PURE__*/createElement("path", {
    d: "M20.411 6.789a2.663 2.663 0 003.638.976 2.663 2.663 0 10-2.662-4.614c-1.271.74-1.686 2.366-.976 3.638zM29.344 9.185a2.663 2.663 0 104.614-2.662 2.663 2.663 0 10-4.614 2.662zM36.087 15.899a2.663 2.663 0 104.614-2.662 2.663 2.663 0 10-4.614 2.662zM38.513 25.009a2.663 2.663 0 003.638.976 2.663 2.663 0 10-2.662-4.614 2.663 2.663 0 00-.976 3.638z",
    fill: "#00C2BC"
  })), _defs$1 || (_defs$1 = /*#__PURE__*/createElement("defs", null, /*#__PURE__*/createElement("linearGradient", {
    id: "prontmed-logo-dark-bg_svg__paint0_linear",
    x1: 4.092,
    y1: 10.643,
    x2: 21.077,
    y2: 37.824,
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/createElement("stop", {
    stopColor: "#00C2BC"
  }), /*#__PURE__*/createElement("stop", {
    offset: 0.656,
    stopColor: "#00C2BC",
    stopOpacity: 0.5
  }), /*#__PURE__*/createElement("stop", {
    offset: 0.698,
    stopColor: "#04C3BD",
    stopOpacity: 0.44
  }), /*#__PURE__*/createElement("stop", {
    offset: 0.741,
    stopColor: "#11C6C0",
    stopOpacity: 0.377
  }), /*#__PURE__*/createElement("stop", {
    offset: 0.784,
    stopColor: "#25CBC6",
    stopOpacity: 0.314
  }), /*#__PURE__*/createElement("stop", {
    offset: 0.829,
    stopColor: "#43D2CD",
    stopOpacity: 0.25
  }), /*#__PURE__*/createElement("stop", {
    offset: 0.873,
    stopColor: "#68DBD7",
    stopOpacity: 0.185
  }), /*#__PURE__*/createElement("stop", {
    offset: 0.918,
    stopColor: "#96E6E3",
    stopOpacity: 0.119
  }), /*#__PURE__*/createElement("stop", {
    offset: 0.962,
    stopColor: "#CBF3F1",
    stopOpacity: 0.055
  }), /*#__PURE__*/createElement("stop", {
    offset: 1,
    stopColor: "#fff",
    stopOpacity: 0
  })), /*#__PURE__*/createElement("linearGradient", {
    id: "prontmed-logo-dark-bg_svg__paint1_linear",
    x1: 16.191,
    y1: 46.056,
    x2: 42.029,
    y2: 21.105,
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/createElement("stop", {
    stopColor: "#00C2BC"
  }), /*#__PURE__*/createElement("stop", {
    offset: 0.651,
    stopColor: "#00C2BC",
    stopOpacity: 0.5
  }), /*#__PURE__*/createElement("stop", {
    offset: 0.693,
    stopColor: "#04C3BD",
    stopOpacity: 0.44
  }), /*#__PURE__*/createElement("stop", {
    offset: 0.737,
    stopColor: "#11C6C0",
    stopOpacity: 0.377
  }), /*#__PURE__*/createElement("stop", {
    offset: 0.781,
    stopColor: "#25CBC6",
    stopOpacity: 0.314
  }), /*#__PURE__*/createElement("stop", {
    offset: 0.826,
    stopColor: "#43D2CD",
    stopOpacity: 0.25
  }), /*#__PURE__*/createElement("stop", {
    offset: 0.871,
    stopColor: "#68DBD7",
    stopOpacity: 0.185
  }), /*#__PURE__*/createElement("stop", {
    offset: 0.917,
    stopColor: "#96E6E3",
    stopOpacity: 0.119
  }), /*#__PURE__*/createElement("stop", {
    offset: 0.962,
    stopColor: "#CBF3F1",
    stopOpacity: 0.055
  }), /*#__PURE__*/createElement("stop", {
    offset: 1,
    stopColor: "#fff",
    stopOpacity: 0
  })))));
}

var _path$3, _path2, _path3, _path4, _path5, _defs;

function _extends$3() { _extends$3 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$3.apply(this, arguments); }

function SvgProntmedLogoLightBg(props) {
  return /*#__PURE__*/createElement("svg", _extends$3({
    width: 176,
    height: 43,
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _path$3 || (_path$3 = /*#__PURE__*/createElement("path", {
    d: "M63.156 15.407c-1.005-.562-2.13-.858-3.401-.858-1.893 0-3.402.74-4.526 2.219l-.354-2.07H52.33V34.04h2.928v-7.394a4.463 4.463 0 001.834 1.538c.769.384 1.656.562 2.691.562 1.272 0 2.396-.296 3.402-.888 1.006-.591 1.774-1.42 2.336-2.514.563-1.065.829-2.337.829-3.727 0-1.449-.296-2.72-.829-3.786-.591-1.035-1.36-1.863-2.366-2.425zm-.946 9.583c-.74.858-1.745 1.302-2.958 1.302s-2.189-.444-2.928-1.302c-.74-.858-1.124-2.011-1.124-3.401 0-1.36.384-2.455 1.124-3.313.74-.828 1.715-1.272 2.928-1.272 1.213 0 2.189.414 2.958 1.272.74.858 1.124 1.952 1.124 3.342 0 1.39-.355 2.514-1.124 3.372zM75.106 15.26a4.503 4.503 0 00-1.538 1.537l-.326-2.1H67.77V17.3h2.87v8.725h-2.87v2.603h9.051v-2.603h-3.253v-4.377c0-1.213.266-2.218.828-3.017.532-.799 1.42-1.183 2.632-1.183h1.301v-2.75h-.65c-1.094 0-1.952.206-2.573.561zM89.805 15.437c-1.064-.592-2.306-.888-3.697-.888-1.39 0-2.632.296-3.697.888a6.422 6.422 0 00-2.514 2.514c-.592 1.064-.887 2.307-.887 3.697 0 1.42.295 2.662.887 3.727.592 1.064 1.42 1.922 2.514 2.514 1.094.591 2.307.887 3.697.887 1.39 0 2.633-.296 3.697-.887 1.065-.592 1.923-1.42 2.515-2.514.591-1.065.887-2.337.887-3.727 0-1.39-.296-2.633-.887-3.697-.592-1.065-1.42-1.923-2.514-2.514zm-.71 9.553c-.739.858-1.744 1.302-2.987 1.302-1.242 0-2.218-.444-2.957-1.302-.74-.858-1.124-1.982-1.124-3.342s.384-2.455 1.124-3.342c.739-.858 1.715-1.302 2.957-1.302 1.243 0 2.219.444 2.988 1.302.74.857 1.124 1.981 1.124 3.342 0 1.36-.385 2.484-1.124 3.342zM102.908 14.55c-1.922 0-3.401.65-4.466 1.981l-.325-1.834h-2.544V28.6h2.928v-7.01c0-1.42.326-2.514 1.006-3.342.651-.8 1.568-1.213 2.721-1.213 1.095 0 1.923.355 2.485 1.035.562.68.828 1.686.828 3.017v7.513h2.958v-7.661c0-2.248-.533-3.875-1.568-4.88-1.035-1.006-2.396-1.509-4.023-1.509zM115.331 25.7c-.207-.237-.325-.621-.325-1.153V17.3h3.342v-2.573h-3.342v-3.343h-2.958v13.458c0 1.272.296 2.248.917 2.84.621.62 1.567.917 2.898.917h2.84v-2.574h-2.219c-.562 0-.916-.088-1.153-.325zM143.518 25.7c-.207-.237-.325-.621-.325-1.153V20.76c0-2.16-.473-3.757-1.449-4.733-.947-.976-2.189-1.479-3.727-1.479-1.124 0-2.07.237-2.869.68a5.058 5.058 0 00-1.923 1.864 3.98 3.98 0 00-1.715-1.893c-.74-.414-1.597-.621-2.573-.621-1.716.03-3.076.68-4.082 1.982l-.325-1.834h-2.544v13.901h2.928v-7.453c0-1.243.296-2.248.887-2.988.592-.74 1.391-1.124 2.367-1.124.946 0 1.686.326 2.188.947.503.621.74 1.567.74 2.78v7.838h2.958v-7.512c0-1.243.295-2.219.887-2.958.591-.71 1.39-1.065 2.396-1.065.946 0 1.686.325 2.159.946.473.622.71 1.538.739 2.722v4.11c0 1.273.296 2.249.917 2.84.621.621 1.568.917 2.899.917h1.065v-2.573h-.503c-.533-.03-.888-.118-1.095-.355zM156.414 15.348c-1.035-.533-2.218-.828-3.549-.828s-2.485.296-3.52.887a6.062 6.062 0 00-2.396 2.485c-.562 1.064-.857 2.336-.857 3.756s.295 2.662.887 3.727a6.163 6.163 0 002.514 2.484c1.065.592 2.337.887 3.786.887 1.656 0 3.046-.443 4.17-1.36s1.805-2.07 2.041-3.49h-2.928c-.207.769-.621 1.39-1.213 1.804-.621.414-1.39.65-2.277.65-1.154 0-2.071-.354-2.751-1.064-.68-.71-1.065-1.656-1.153-2.87v-.147h10.5c.059-.384.088-.74.088-1.124-.029-1.33-.325-2.514-.917-3.49a6.712 6.712 0 00-2.425-2.307zm-7.158 4.791c.119-.976.503-1.774 1.213-2.336.71-.592 1.538-.887 2.485-.887 1.035 0 1.892.295 2.573.857.68.562 1.094 1.36 1.212 2.366h-7.483zM172.652 10.142v6.478c-.473-.651-1.094-1.154-1.834-1.538-.769-.385-1.656-.562-2.662-.562-1.242 0-2.366.296-3.372.887-1.005.592-1.774 1.42-2.336 2.514-.562 1.065-.858 2.337-.858 3.727 0 1.45.266 2.721.828 3.786.562 1.065 1.331 1.893 2.337 2.484 1.005.562 2.129.858 3.401.858 1.923 0 3.431-.74 4.526-2.248l.355 2.1h2.543V10.142h-2.928zm-1.094 14.878c-.74.858-1.716 1.271-2.928 1.271-1.213 0-2.189-.443-2.929-1.3-.739-.859-1.124-1.983-1.124-3.343 0-1.36.385-2.455 1.124-3.342.74-.858 1.716-1.302 2.929-1.302 1.212 0 2.188.444 2.928 1.302.739.857 1.124 1.981 1.124 3.371s-.355 2.515-1.124 3.343z",
    fill: "#3D5C86"
  })), _path2 || (_path2 = /*#__PURE__*/createElement("path", {
    d: "M11.16 3.606a20.817 20.817 0 00-7.602 7.601c-2.81 4.821-3.55 10.44-2.13 15.824A20.658 20.658 0 0011.13 39.72a2.667 2.667 0 003.638-.976 2.663 2.663 0 00-.976-3.638 15.433 15.433 0 01-7.217-9.465c-1.065-4.023-.503-8.193 1.567-11.802a15.384 15.384 0 015.68-5.678 2.663 2.663 0 00-1.332-4.97 3.85 3.85 0 00-1.33.415z",
    fill: "url(#prontmed-logo-light-bg_svg__paint0_linear)"
  })), _path3 || (_path3 = /*#__PURE__*/createElement("path", {
    d: "M23.434 12.124c1.508 0 2.84.296 3.963.858 1.154.562 2.041 1.36 2.662 2.425.621 1.035.947 2.248.947 3.638 0 1.39-.326 2.603-.947 3.638-.621 1.035-1.508 1.834-2.662 2.425-1.153.562-2.455.858-3.963.858h-3.135v6.152h-5.265V12.124h8.4z",
    fill: "#3D5C86"
  })), _path4 || (_path4 = /*#__PURE__*/createElement("path", {
    d: "M37.158 21.677c0 8.578-6.98 15.558-15.558 15.558-2.721 0-5.413-.71-7.75-2.07a2.663 2.663 0 00-3.637.976 2.663 2.663 0 00.976 3.638 21.02 21.02 0 0010.411 2.78c11.506 0 20.882-9.376 20.882-20.881a2.65 2.65 0 00-2.662-2.663 2.67 2.67 0 00-2.662 2.662z",
    fill: "url(#prontmed-logo-light-bg_svg__paint1_linear)"
  })), _path5 || (_path5 = /*#__PURE__*/createElement("path", {
    d: "M19.411 4.789a2.663 2.663 0 003.638.976 2.663 2.663 0 10-2.662-4.614c-1.271.74-1.686 2.366-.976 3.638zM28.344 7.185a2.663 2.663 0 104.614-2.662 2.663 2.663 0 10-4.614 2.662zM35.087 13.899a2.663 2.663 0 10.976-3.638 2.663 2.663 0 00-.976 3.638zM37.513 23.009a2.663 2.663 0 003.638.976 2.663 2.663 0 10-2.662-4.614 2.663 2.663 0 00-.976 3.638z",
    fill: "#00C2BC"
  })), _defs || (_defs = /*#__PURE__*/createElement("defs", null, /*#__PURE__*/createElement("linearGradient", {
    id: "prontmed-logo-light-bg_svg__paint0_linear",
    x1: 3.092,
    y1: 8.643,
    x2: 20.077,
    y2: 35.824,
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/createElement("stop", {
    stopColor: "#00C2BC"
  }), /*#__PURE__*/createElement("stop", {
    offset: 0.656,
    stopColor: "#00C2BC",
    stopOpacity: 0.5
  }), /*#__PURE__*/createElement("stop", {
    offset: 0.698,
    stopColor: "#04C3BD",
    stopOpacity: 0.44
  }), /*#__PURE__*/createElement("stop", {
    offset: 0.741,
    stopColor: "#11C6C0",
    stopOpacity: 0.377
  }), /*#__PURE__*/createElement("stop", {
    offset: 0.784,
    stopColor: "#25CBC6",
    stopOpacity: 0.314
  }), /*#__PURE__*/createElement("stop", {
    offset: 0.829,
    stopColor: "#43D2CD",
    stopOpacity: 0.25
  }), /*#__PURE__*/createElement("stop", {
    offset: 0.873,
    stopColor: "#68DBD7",
    stopOpacity: 0.185
  }), /*#__PURE__*/createElement("stop", {
    offset: 0.918,
    stopColor: "#96E6E3",
    stopOpacity: 0.119
  }), /*#__PURE__*/createElement("stop", {
    offset: 0.962,
    stopColor: "#CBF3F1",
    stopOpacity: 0.055
  }), /*#__PURE__*/createElement("stop", {
    offset: 1,
    stopColor: "#fff",
    stopOpacity: 0
  })), /*#__PURE__*/createElement("linearGradient", {
    id: "prontmed-logo-light-bg_svg__paint1_linear",
    x1: 15.191,
    y1: 44.056,
    x2: 41.029,
    y2: 19.105,
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/createElement("stop", {
    stopColor: "#00C2BC"
  }), /*#__PURE__*/createElement("stop", {
    offset: 0.651,
    stopColor: "#00C2BC",
    stopOpacity: 0.5
  }), /*#__PURE__*/createElement("stop", {
    offset: 0.693,
    stopColor: "#04C3BD",
    stopOpacity: 0.44
  }), /*#__PURE__*/createElement("stop", {
    offset: 0.737,
    stopColor: "#11C6C0",
    stopOpacity: 0.377
  }), /*#__PURE__*/createElement("stop", {
    offset: 0.781,
    stopColor: "#25CBC6",
    stopOpacity: 0.314
  }), /*#__PURE__*/createElement("stop", {
    offset: 0.826,
    stopColor: "#43D2CD",
    stopOpacity: 0.25
  }), /*#__PURE__*/createElement("stop", {
    offset: 0.871,
    stopColor: "#68DBD7",
    stopOpacity: 0.185
  }), /*#__PURE__*/createElement("stop", {
    offset: 0.917,
    stopColor: "#96E6E3",
    stopOpacity: 0.119
  }), /*#__PURE__*/createElement("stop", {
    offset: 0.962,
    stopColor: "#CBF3F1",
    stopOpacity: 0.055
  }), /*#__PURE__*/createElement("stop", {
    offset: 1,
    stopColor: "#fff",
    stopOpacity: 0
  })))));
}

var _path$2;

function _extends$2() { _extends$2 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$2.apply(this, arguments); }

function SvgSpinner(props) {
  return /*#__PURE__*/createElement("svg", _extends$2({
    xmlns: "http://www.w3.org/2000/svg",
    width: 25,
    height: 25,
    viewBox: "0 0 50 50",
    style: {
      margin: "auto",
      background: "0 0"
    },
    display: "block"
  }, props), _path$2 || (_path$2 = /*#__PURE__*/createElement("path", {
    d: "M43.935 25.145c0-10.318-8.364-18.683-18.683-18.683-10.318 0-18.683 8.365-18.683 18.683h4.068c0-8.071 6.543-14.615 14.615-14.615s14.615 6.543 14.615 14.615h4.068z"
  })));
}

var _path$1;

function _extends$1() { _extends$1 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$1.apply(this, arguments); }

function SvgUser(props) {
  return /*#__PURE__*/createElement("svg", _extends$1({
    width: 20,
    height: 20,
    fill: "#4C5867",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _path$1 || (_path$1 = /*#__PURE__*/createElement("path", {
    d: "M10 0a10 10 0 100 20 10 10 0 000-20zm0 6.39A9.973 9.973 0 0015.42 8c.78 0 1.53-.09 2.25-.26.21.71.33 1.47.33 2.26 0 4.41-3.59 8-8 8-3 0-5.61-1.66-7-4.11L4.75 12v-1a1.25 1.25 0 012.5 0v1H10V6.39zm4 3.36a1.25 1.25 0 100 2.5 1.25 1.25 0 000-2.5z"
  })));
}

var _path;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function SvgEyeVisible(props) {
  return /*#__PURE__*/createElement("svg", _extends({
    width: 24,
    height: 24,
    fill: "#4C5867",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _path || (_path = /*#__PURE__*/createElement("path", {
    d: "M12 9a3 3 0 110 6 3 3 0 010-6zm0-4.5c5 0 9.27 3.11 11 7.5-1.73 4.39-6 7.5-11 7.5S2.73 16.39 1 12c1.73-4.39 6-7.5 11-7.5zM3.18 12a9.821 9.821 0 0017.64 0 9.821 9.821 0 00-17.64 0z"
  })));
}

var iconDictionary = {
    'arrow-down': SvgArrowDown,
    'arrow-left': SvgArrowLeft,
    'arrow-right': SvgArrowRight,
    'arrow-up': SvgArrowUp,
    close: SvgClose,
    config: SvgConfig,
    'doc-check': SvgDocCheck,
    doc: SvgDoc,
    gift: SvgGift,
    lifeboat: SvgLifeboat,
    lock: SvgLock,
    logout: SvgLogout,
    hidden: SvgEyeHidden,
    notification: SvgNotification,
    patients: SvgPatients,
    print: SvgPrint,
    'prontmed-logo-dark-bg': SvgProntmedLogoDarkBg,
    'prontmed-logo-light-bg': SvgProntmedLogoLightBg,
    spinner: SvgSpinner,
    user: SvgUser,
    visible: SvgEyeVisible,
};

var Icon$1 = (function (_a) {
    var name = _a.name, fill = _a.fill, height = _a.height, width = _a.width, _b = _a.color, color = _b === void 0 ? 'darkestgrey' : _b, _c = _a.size, size = _c === void 0 ? 24 : _c, rest = __rest(_a, ["name", "fill", "height", "width", "color", "size"]);
    var Icon = iconDictionary[name];
    var colorToFill = findColorInTheme(color);
    return Icon ? (React.createElement(Icon, __assign({ role: "img", "aria-label": name, fill: fill ? fill : colorToFill, width: width || size, height: height || size }, rest))) : null;
});

var rotate = keyframes(templateObject_1$8 || (templateObject_1$8 = __makeTemplateObject(["\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n"], ["\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n"])));
var Spinner = styled(Icon$1).attrs({ name: 'spinner' })(templateObject_2$7 || (templateObject_2$7 = __makeTemplateObject(["\n  animation: ", " 1s linear infinite;\n"], ["\n  animation: ", " 1s linear infinite;\n"])), rotate);
var templateObject_1$8, templateObject_2$7;

var Loading = function (_a) {
    var _b = _a.color, color = _b === void 0 ? 'darkestgrey' : _b, _c = _a.size, size = _c === void 0 ? 24 : _c, rest = __rest(_a, ["color", "size"]);
    return React.createElement(Spinner, __assign({ color: color, size: size }, rest));
};

var handleBGColor$1 = function (_a) {
    var variant = _a.variant, outlined = _a.outlined, disabled = _a.disabled, theme = _a.theme;
    if (outlined) {
        return 'transparent';
    }
    if (disabled) {
        switch (variant) {
            case 'primary':
                return theme.colors.primary.green40;
            case 'secondary':
                return theme.colors.primary.grey40;
            default:
                return theme.colors.neutrals.lightergrey;
        }
    }
    switch (variant) {
        case 'primary':
            return theme.colors.primary.green;
        case 'secondary':
            return theme.colors.primary.grey;
        default:
            return theme.colors.neutrals.lightgrey;
    }
};
var handleTextColor = function (_a) {
    var variant = _a.variant, outlined = _a.outlined, disabled = _a.disabled, theme = _a.theme;
    if (disabled) {
        switch (variant) {
            case 'primary':
                return theme.colors.primary.green40;
            case 'secondary':
                return theme.colors.primary.grey40;
            default:
                return theme.colors.neutrals.lightgrey;
        }
    }
    if (outlined) {
        switch (variant) {
            case 'primary':
                return theme.colors.primary.green;
            case 'secondary':
                return theme.colors.primary.grey;
            default:
                return theme.colors.neutrals.darkestgrey;
        }
    }
    return !variant
        ? theme.colors.neutrals.darkestgrey
        : theme.colors.neutrals.white;
};
var handleBorderColor = function (_a) {
    var variant = _a.variant, disabled = _a.disabled, theme = _a.theme;
    if (disabled) {
        return 'transparent';
    }
    switch (variant) {
        case 'primary':
            return theme.colors.primary.green;
        case 'secondary':
            return theme.colors.primary.grey;
        default:
            return theme.colors.neutrals.lightgrey;
    }
};
var Button$2 = styled.button(templateObject_2$6 || (templateObject_2$6 = __makeTemplateObject(["\n  ", "\n"], ["\n  ",
    "\n"])), function (_a) {
    var variant = _a.variant, outlined = _a.outlined, disabled = _a.disabled, theme = _a.theme, size = _a.size;
    return css(templateObject_1$7 || (templateObject_1$7 = __makeTemplateObject(["\n    ", ";\n\n    background-color: ", ";\n    border: ", ";\n    border-radius: ", ";\n    box-shadow: ", ";\n    color: ", ";\n    cursor: ", ";\n    font-size: ", "px;\n    position: relative;\n    overflow: hidden;\n    height: ", ";\n    width: ", ";\n\n    &:hover {\n      background-color: ", ";\n    }\n    &:focus,\n    &:active {\n      outline: none;\n    }\n  "], ["\n    ", ";\n\n    background-color: ", ";\n    border: ",
        ";\n    border-radius: ", ";\n    box-shadow: ", ";\n    color: ", ";\n    cursor: ", ";\n    font-size: ",
        "px;\n    position: relative;\n    overflow: hidden;\n    height: ",
        ";\n    width: ",
        ";\n\n    &:hover {\n      background-color: ",
        ";\n    }\n    &:focus,\n    &:active {\n      outline: none;\n    }\n  "])), function (_a) {
        var theme = _a.theme;
        return theme.fonts.button;
    }, handleBGColor$1({ variant: variant, outlined: outlined, disabled: disabled, theme: theme }), "2px solid " + handleBorderColor({
        variant: variant,
        outlined: outlined,
        disabled: disabled,
        theme: theme,
    }), theme.borderRadius.square, !disabled && theme.shadows.button, handleTextColor({ variant: variant, outlined: outlined, disabled: disabled, theme: theme }), disabled ? 'not-allowed' : 'pointer', function () {
        if (size === 'small') {
            return theme.fonts.body2.fontSize;
        }
        else if (size === 'large') {
            return theme.fonts.heading5.fontSize;
        }
        return theme.fonts.button.fontSize;
    }, function () {
        if (size === 'small') {
            return '25px';
        }
        else if (size === 'large') {
            return '48px';
        }
        return '35px';
    }, function () {
        if (size === 'small') {
            return '60px';
        }
        else if (size === 'large') {
            return '240px;';
        }
        return '120px';
    }, handleBGColor$1({
        variant: variant,
        outlined: outlined,
        disabled: disabled,
        theme: theme,
    }));
});
var LoadingContainer = styled.div(templateObject_3$3 || (templateObject_3$3 = __makeTemplateObject(["\n  position: absolute;\n  left: calc(50% - 12px);\n  top: calc(50% - 12px);\n"], ["\n  position: absolute;\n  left: calc(50% - 12px);\n  top: calc(50% - 12px);\n"])));
var templateObject_1$7, templateObject_2$6, templateObject_3$3;

var Button$1 = function (_a) {
    var children = _a.children, disabled = _a.disabled, isLoading = _a.isLoading, outlined = _a.outlined, _b = _a.type, type = _b === void 0 ? 'button' : _b, _c = _a.size, size = _c === void 0 ? 'medium' : _c, variant = _a.variant, rest = __rest(_a, ["children", "disabled", "isLoading", "outlined", "type", "size", "variant"]);
    return (React.createElement(Button$2, __assign({ type: type, role: "button", disabled: isLoading || disabled, size: size, outlined: outlined, variant: variant }, rest),
        children,
        isLoading ? (React.createElement(LoadingContainer, null,
            React.createElement(Loading, { color: "darkestgrey" }))) : null,
        !isLoading && !disabled && React.createElement(Ripple, null)));
};

var handleBGColor = function (_a) {
    var variant = _a.variant, disabled = _a.disabled, theme = _a.theme;
    if (disabled) {
        switch (variant) {
            case 'primary':
                return theme.colors.primary.green40;
            case 'secondary':
                return theme.colors.primary.grey40;
            default:
                return theme.colors.neutrals.lightergrey;
        }
    }
    switch (variant) {
        case 'primary':
            return theme.colors.primary.green;
        case 'secondary':
            return theme.colors.primary.grey;
        default:
            return theme.colors.neutrals.lightgrey;
    }
};
var Link = styled.button(templateObject_2$5 || (templateObject_2$5 = __makeTemplateObject(["\n  ", "\n"], ["\n  ",
    "\n"])), function (_a) {
    var theme = _a.theme, disabled = _a.disabled, variant = _a.variant;
    return css(templateObject_1$6 || (templateObject_1$6 = __makeTemplateObject(["\n    background-color: transparent;\n    border: none;\n    color: ", ";\n    cursor: pointer;\n    padding: 0;\n    text-decoration: underline;\n\n    ", ";\n    &:focus,\n    &:active {\n      border: none;\n      outline: none;\n    }\n  "], ["\n    background-color: transparent;\n    border: none;\n    color: ", ";\n    cursor: pointer;\n    padding: 0;\n    text-decoration: underline;\n\n    ", ";\n    &:focus,\n    &:active {\n      border: none;\n      outline: none;\n    }\n  "])), handleBGColor({ variant: variant, disabled: disabled, theme: theme }), theme.fonts.body1);
});
var templateObject_1$6, templateObject_2$5;

var ButtonLink = function (_a) {
    var children = _a.children; _a.to; var _b = _a.element, element = _b === void 0 ? 'button' : _b, _c = _a.variant, variant = _c === void 0 ? 'primary' : _c, rest = __rest(_a, ["children", "to", "element", "variant"]);
    return (React.createElement(Link, __assign({ as: element, type: "button", variant: variant }, rest), children));
};

var ReferenceContainer = styled.div(templateObject_1$5 || (templateObject_1$5 = __makeTemplateObject(["\n  display: flex;\n"], ["\n  display: flex;\n"])));
var PopperContainer = styled.div(templateObject_2$4 || (templateObject_2$4 = __makeTemplateObject(["\n  display: flex;\n  z-index: 1;\n"], ["\n  display: flex;\n  z-index: 1;\n"])));
var DropdownItemsContainer = styled.div(templateObject_4$2 || (templateObject_4$2 = __makeTemplateObject(["\n  ", "\n"], ["\n  ",
    "\n"])), function (_a) {
    var theme = _a.theme, visible = _a.visible;
    return css(templateObject_3$2 || (templateObject_3$2 = __makeTemplateObject(["\n    box-shadow: ", ";\n    background-color: ", ";\n    display: ", ";\n    flex-direction: column;\n    position: relative;\n    z-index: 1;\n  "], ["\n    box-shadow: ", ";\n    background-color: ", ";\n    display: ", ";\n    flex-direction: column;\n    position: relative;\n    z-index: 1;\n  "])), theme.shadows.popper, theme.colors.neutrals.white, visible ? 'flex' : 'none');
});
var DropdownItem = styled.div(templateObject_5$1 || (templateObject_5$1 = __makeTemplateObject([""], [""])));
var templateObject_1$5, templateObject_2$4, templateObject_3$2, templateObject_4$2, templateObject_5$1;

var initialOffset = {
    horizontal: 0,
    vertical: 0,
};
/**
 * # Props #
 * anchorElement: the element that it will trigger the dropdown. dropdown it'll be created using this element as reference
 * placement: 'bottom-start' || 'bottom' || 'bottom-end' || 'top-start' || 'top' || 'top-end'
 *
 * # Using the component #
 *  <Dropdown anchorElement={<Button>Click here to open dropdown</Button>}>
 *    <p>Item 1</p>
 *    <p>Item 2</p>
 *  </Dropdown>
 */
var Dropdown = function (_a) {
    var children = _a.children, anchorElement = _a.anchorElement, open = _a.open, toggleOpen = _a.toggleOpen, trigger = _a.trigger, _b = _a.placement, placement = _b === void 0 ? 'bottom-start' : _b, _c = _a.offset, _d = _c === void 0 ? initialOffset : _c, horizontal = _d.horizontal, vertical = _d.vertical, rest = __rest(_a, ["children", "anchorElement", "open", "toggleOpen", "trigger", "placement", "offset"]);
    var containerElement = document.getElementById('root');
    var referenceElement = useRef(null);
    var popperElement = useRef(null);
    var _e = usePopper(referenceElement === null || referenceElement === void 0 ? void 0 : referenceElement.current, popperElement === null || popperElement === void 0 ? void 0 : popperElement.current, {
        placement: placement,
        strategy: 'absolute',
        modifiers: [
            {
                name: 'offset',
                enabled: true,
                options: {
                    offset: [horizontal, vertical],
                },
            },
        ],
    }), styles = _e.styles, attributes = _e.attributes, update = _e.update;
    useEffect(function () {
        var handleDocumentClick = function (_a) {
            var _b, _c;
            var target = _a.target;
            // (if trigger is 'click' and mouse click's outside anchorElement: hide dropdown)
            // if trigger is 'hover' and mouse outside achorElement/dropdown: hide dropdown.
            if (((_b = referenceElement.current) === null || _b === void 0 ? void 0 : _b.contains(target)) ||
                ((_c = popperElement.current) === null || _c === void 0 ? void 0 : _c.contains(target))) {
                return;
            }
            toggleOpen(false);
        };
        var eventListener = trigger === 'hover' ? 'mousemove' : 'mousedown';
        document.addEventListener(eventListener, handleDocumentClick);
        return function () {
            document.removeEventListener(eventListener, handleDocumentClick);
        };
    }, []);
    var updatePopperPosition = function () { return update && update(); };
    useLayoutEffect(function () {
        updatePopperPosition();
    }, [open]);
    var actions = function () {
        switch (trigger) {
            case 'click': {
                return {
                    onClick: function () {
                        toggleOpen(!open);
                    },
                };
            }
            case 'hover':
                return {
                    onMouseEnter: function () {
                        toggleOpen(true);
                    },
                };
        }
    };
    return (React.createElement(ReferenceContainer, __assign({ ref: referenceElement }, actions()),
        anchorElement,
        ReactDOM.createPortal(React.createElement(PopperContainer, __assign({ ref: popperElement, style: styles.popper }, attributes.popper),
            React.createElement(DropdownItemsContainer, __assign({ style: styles.offset, visible: open }, rest), React.Children.map(children, function (child) {
                return (React.createElement(DropdownItem, { onClick: function () { return toggleOpen(false); } }, child));
            }))), containerElement)));
};

var Text = styled.p(templateObject_2$3 || (templateObject_2$3 = __makeTemplateObject(["\n  ", "\n"], ["\n  ",
    "\n"])), function (_a) {
    var theme = _a.theme, type = _a.type, color = _a.color, bold = _a.bold;
    return css(templateObject_1$4 || (templateObject_1$4 = __makeTemplateObject(["\n    color: ", ";\n    margin: 0;\n\n    ", ";\n    ", ";\n  "], ["\n    color: ", ";\n    margin: 0;\n\n    ", ";\n    ", ";\n  "])), findColorInTheme(color), theme.fonts[type], bold && "font-weight: 700");
});
var templateObject_1$4, templateObject_2$3;

var Typography = function (_a) {
    var children = _a.children, _b = _a.color, color = _b === void 0 ? "darkestgrey" : _b, _c = _a.type, type = _c === void 0 ? "body1" : _c, _d = _a.variant, variant = _d === void 0 ? "p" : _d, rest = __rest(_a, ["children", "color", "type", "variant"]);
    return (React.createElement(Text, __assign({ as: variant, color: color, type: type }, rest), children));
};

var Label = styled(Typography).attrs(function () { return ({
    variant: 'label',
    type: 'caption',
}); })(templateObject_1$3 || (templateObject_1$3 = __makeTemplateObject([""], [""])));
var InputContent = styled.div(templateObject_2$2 || (templateObject_2$2 = __makeTemplateObject(["\n  display: flex;\n  flex: 1;\n  flex-direction: column;\n  min-width: 50px;\n"], ["\n  display: flex;\n  flex: 1;\n  flex-direction: column;\n  min-width: 50px;\n"])));
var Container$1 = styled.div(templateObject_4$1 || (templateObject_4$1 = __makeTemplateObject(["\n  ", "\n"], ["\n  ",
    "\n"])), function (_a) {
    var theme = _a.theme, color = _a.color, outlined = _a.outlined;
    return css(templateObject_3$1 || (templateObject_3$1 = __makeTemplateObject(["\n    align-items: center;\n    border: ", ";\n    background-color: ", ";\n    border-radius: ", ";\n    color: ", ";\n    display: inline-flex;\n    padding: ", "px ", "px;\n    width: 400px;\n\n    svg {\n      fill: ", ";\n    }\n    ", " {\n      color: ", ";\n    }\n    * {\n      box-sizing: border-box;\n    }\n    input:-webkit-autofill,\n    input:-webkit-autofill:hover,\n    input:-webkit-autofill:focus {\n      background-color: transparent !important;\n      color: inherit;\n    }\n  "], ["\n    align-items: center;\n    border: ", ";\n    background-color: ", ";\n    border-radius: ", ";\n    color: ",
        ";\n    display: inline-flex;\n    padding: ", "px ", "px;\n    width: 400px;\n\n    svg {\n      fill: ",
        ";\n    }\n    ", " {\n      color: ",
        ";\n    }\n    * {\n      box-sizing: border-box;\n    }\n    input:-webkit-autofill,\n    input:-webkit-autofill:hover,\n    input:-webkit-autofill:focus {\n      background-color: transparent !important;\n      color: inherit;\n    }\n  "])), outlined && "1px solid " + findColorInTheme(color, 0.4), !outlined && findColorInTheme(color), theme.borderRadius.square, outlined
        ? findColorInTheme(color)
        : theme.colors.neutrals.darkestgrey, theme.spacing(1), theme.spacing(2), outlined
        ? findColorInTheme(color)
        : theme.colors.neutrals.darkestgrey, Label, outlined
        ? findColorInTheme(color)
        : theme.colors.neutrals.darkestgrey);
});
var PrefixContainer = styled.div(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  align-items: center;\n  color: inherit;\n  display: flex;\n  justify-content: center;\n  margin-right: ", "px;\n"], ["\n  align-items: center;\n  color: inherit;\n  display: flex;\n  justify-content: center;\n  margin-right: ", "px;\n"])), function (_a) {
    var theme = _a.theme;
    return theme.spacing(1);
});
var SuffixContainer = styled.div(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n  align-items: center;\n  display: flex;\n  justify-content: center;\n  margin-left: ", "px;\n"], ["\n  align-items: center;\n  display: flex;\n  justify-content: center;\n  margin-left: ", "px;\n"])), function (_a) {
    var theme = _a.theme;
    return theme.spacing(1);
});
var Input = styled.input(templateObject_8 || (templateObject_8 = __makeTemplateObject(["\n  ", "\n"], ["\n  ",
    "\n"])), function (_a) {
    var theme = _a.theme;
    return css(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n    background-color: transparent;\n    border: none;\n    color: inherit;\n    height: 22px;\n    outline: none;\n    ", ";\n\n    &:focus,\n    &:active {\n      border: none;\n      outline: none;\n    }\n    ::placeholder {\n      color: inherit;\n      opacity: 0.4;\n    }\n    :-ms-input-placeholder {\n      color: inherit;\n      opacity: 0.4;\n    }\n    :-ms-input-placeholder {\n      color: inherit;\n      opacity: 0.4;\n    }\n  "], ["\n    background-color: transparent;\n    border: none;\n    color: inherit;\n    height: 22px;\n    outline: none;\n    ", ";\n\n    &:focus,\n    &:active {\n      border: none;\n      outline: none;\n    }\n    ::placeholder {\n      color: inherit;\n      opacity: 0.4;\n    }\n    :-ms-input-placeholder {\n      color: inherit;\n      opacity: 0.4;\n    }\n    :-ms-input-placeholder {\n      color: inherit;\n      opacity: 0.4;\n    }\n  "])), theme.fonts.body1);
});
var templateObject_1$3, templateObject_2$2, templateObject_3$1, templateObject_4$1, templateObject_5, templateObject_6, templateObject_7, templateObject_8;

var TextField = function (_a) {
    var className = _a.className, label = _a.label, outlined = _a.outlined, Prefix = _a.prefix, Suffix = _a.suffix, style = _a.style, _b = _a.color, color = _b === void 0 ? 'white' : _b, rest = __rest(_a, ["className", "label", "outlined", "prefix", "suffix", "style", "color"]);
    return (React.createElement(Container$1, { className: className, style: style, color: color, outlined: outlined },
        !!Prefix && React.createElement(PrefixContainer, null, Prefix),
        React.createElement(InputContent, null,
            label && React.createElement(Label, null, label),
            React.createElement(Input, __assign({}, rest))),
        !!Suffix && React.createElement(SuffixContainer, null, Suffix)));
};

var Icon = styled(Icon$1)(templateObject_1$2 || (templateObject_1$2 = __makeTemplateObject(["\n  cursor: pointer;\n"], ["\n  cursor: pointer;\n"])));
var templateObject_1$2;

var Password = function (_a) {
    var _b = _a.color, color = _b === void 0 ? 'white' : _b, outlined = _a.outlined, rest = __rest(_a, ["color", "outlined"]);
    var _c = useState(false), isVisible = _c[0], setVisibility = _c[1];
    return (React.createElement(TextField, __assign({ type: isVisible ? 'text' : 'password', color: color, outlined: outlined, suffix: React.createElement(Icon, { name: isVisible ? 'visible' : 'hidden', color: outlined ? color : 'darkestgrey', width: 24, height: 24, onClick: function () { return setVisibility(function (currentState) { return !currentState; }); } }) }, rest)));
};

var Container = styled.div(templateObject_1$1 || (templateObject_1$1 = __makeTemplateObject(["\n  display: inline-flex;\n"], ["\n  display: inline-flex;\n"])));
styled.div(templateObject_2$1 || (templateObject_2$1 = __makeTemplateObject(["\n  position: absolute;\n  top: -24px;\n  z-index: 0;\n"], ["\n  position: absolute;\n  top: -24px;\n  z-index: 0;\n"])));
var PopoverContent = styled.div(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  ", "\n"], ["\n  ",
    "\n"])), function (_a) {
    var theme = _a.theme, visible = _a.visible;
    return css(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n    background-color: ", ";\n    border-radius: ", ";\n    box-shadow: ", ";\n    display: ", ";\n    flex-direction: column;\n    position: relative;\n    z-index: 1;\n\n    :after {\n      content: '';\n      height: 0;\n      position: absolute;\n      width: 0;\n    }\n    &[data-popper-placement^='top']:after {\n      /* box-shadow: ", "; */\n      top: 100%;\n      left: calc(50% - 8px);\n      border-left: 8px solid transparent;\n      border-right: 8px solid transparent;\n      border-top: 6px solid white;\n    }\n    &[data-popper-placement^='bottom']:after {\n      top: -6px;\n      left: calc(50% - 8px);\n      border-left: 8px solid transparent;\n      border-right: 8px solid transparent;\n      border-bottom: 6px solid white;\n    }\n  "], ["\n    background-color: ", ";\n    border-radius: ", ";\n    box-shadow: ", ";\n    display: ", ";\n    flex-direction: column;\n    position: relative;\n    z-index: 1;\n\n    :after {\n      content: '';\n      height: 0;\n      position: absolute;\n      width: 0;\n    }\n    &[data-popper-placement^='top']:after {\n      /* box-shadow: ", "; */\n      top: 100%;\n      left: calc(50% - 8px);\n      border-left: 8px solid transparent;\n      border-right: 8px solid transparent;\n      border-top: 6px solid white;\n    }\n    &[data-popper-placement^='bottom']:after {\n      top: -6px;\n      left: calc(50% - 8px);\n      border-left: 8px solid transparent;\n      border-right: 8px solid transparent;\n      border-bottom: 6px solid white;\n    }\n  "])), theme.colors.neutrals.white, theme.borderRadius.square, theme.shadows.popper, visible ? 'flex' : 'none', theme.shadows.popper);
});
var templateObject_1$1, templateObject_2$1, templateObject_3, templateObject_4;

var Popover = function (_a) {
    var children = _a.children, content = _a.content, open = _a.open, toggleOpen = _a.toggleOpen, _b = _a.placement, placement = _b === void 0 ? 'top' : _b, _c = _a.trigger, trigger = _c === void 0 ? 'hover' : _c, _d = _a.offset, _e = _d === void 0 ? { horizontal: 0, vertical: 0 } : _d, horizontal = _e.horizontal, vertical = _e.vertical, rest = __rest(_a, ["children", "content", "open", "toggleOpen", "placement", "trigger", "offset"]);
    var referenceElement = useRef(null);
    var popperElement = useRef(null);
    var arrowElement = useRef(null);
    var _f = usePopper(referenceElement === null || referenceElement === void 0 ? void 0 : referenceElement.current, popperElement === null || popperElement === void 0 ? void 0 : popperElement.current, {
        placement: placement,
        modifiers: [
            {
                name: 'arrow',
                options: {
                    element: arrowElement.current,
                },
            },
            {
                name: 'offset',
                enabled: true,
                options: {
                    offset: [horizontal, vertical],
                },
            },
        ],
    }), styles = _f.styles, attributes = _f.attributes, update = _f.update;
    useEffect(function () {
        var handleDocumentClick = function (_a) {
            var _b, _c;
            var target = _a.target;
            // (if trigger is 'click' and mouse click's outside anchorElement: hide dropdown)
            // if trigger is 'hover' and mouse outside achorElement/dropdown: hide dropdown.
            if (((_b = referenceElement.current) === null || _b === void 0 ? void 0 : _b.contains(target)) ||
                ((_c = popperElement.current) === null || _c === void 0 ? void 0 : _c.contains(target))) {
                return;
            }
            toggleOpen(false);
        };
        var eventListener = trigger === 'hover' ? 'mousemove' : 'mousedown';
        document.addEventListener(eventListener, handleDocumentClick);
        return function () {
            document.removeEventListener(eventListener, handleDocumentClick);
        };
    }, []);
    var updatePopperPosition = function () { return update && update(); };
    useLayoutEffect(function () {
        updatePopperPosition();
    }, [open]);
    var actions = function () {
        if (trigger === 'click') {
            return {
                onClick: function () {
                    toggleOpen(!open);
                },
            };
        }
        return {
            onMouseEnter: function () {
                toggleOpen(true);
            },
        };
    };
    return (React.createElement(React.Fragment, null,
        React.createElement(Container, __assign({ ref: referenceElement }, actions(), rest), children),
        ReactDOM.createPortal(React.createElement(PopoverContent, __assign({ ref: popperElement, style: __assign(__assign({}, styles.popper), styles.offset) }, attributes.popper, { visible: open }), content), document.getElementById('root'))));
};

var Button = styled.button(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  ", "\n"], ["\n  ",
    "\n"])), function (_a) {
    var theme = _a.theme, padding = _a.padding;
    return css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    background-color: transparent;\n    border: 1px solid ", ";\n    border-radius: ", ";\n    height: 27px;\n    cursor: pointer;\n    padding: ", ";\n    position: relative;\n    width: 28px;\n\n    &:disabled {\n      cursor: block;\n    }\n\n    &:active,\n    &:focus {\n      outline: none;\n    }\n  "], ["\n    background-color: transparent;\n    border: 1px solid ", ";\n    border-radius: ", ";\n    height: 27px;\n    cursor: pointer;\n    padding: ", ";\n    position: relative;\n    width: 28px;\n\n    &:disabled {\n      cursor: block;\n    }\n\n    &:active,\n    &:focus {\n      outline: none;\n    }\n  "])), theme.colors.neutrals.lightgrey, theme.borderRadius.square, padding ? padding : '5px 8px');
});
var templateObject_1, templateObject_2;

var defaultProperties = {
    'arrow-left': {
        iconProperties: { style: { width: '78%', height: '72%' } },
        padding: '5px 8px 0',
    },
    'arrow-right': {
        iconProperties: { style: { width: '78%', height: '72%' } },
        padding: '5px 8px 0',
    },
    'arrow-down': {
        iconProperties: { style: { width: '78%', height: '72%' } },
        padding: '6px 5px',
    },
    'arrow-up': {
        iconProperties: { style: { width: '78%', height: '72%' } },
        padding: '6px 5px',
    },
    close: {
        padding: '5px 4px 0',
        iconProperties: { style: { width: '78%', height: '83%' } },
    },
    visible: {
        padding: '0px',
        iconProperties: { style: { width: '92%', height: '100%' } },
    },
    notification: {
        padding: '3px 3px 0',
        iconProperties: { style: { width: '82%', height: '89%' } },
    },
    patients: {
        padding: '4px 0 0',
        iconProperties: { style: { width: '85%', height: '68%' } },
    },
    print: {
        padding: '4px 0 0',
        iconProperties: { style: { width: '78%', height: '100%' } },
    },
};
var IconButton = function (_a) {
    var disabled = _a.disabled, padding = _a.padding, name = _a.name, iconProperties = _a.iconProperties, rest = __rest(_a, ["disabled", "padding", "name", "iconProperties"]);
    var defaultProperty = defaultProperties[name] || {};
    return (React.createElement(Button, __assign({ padding: padding || defaultProperty.padding }, rest),
        React.createElement(Icon$1, __assign({ name: name }, defaultProperty.iconProperties, iconProperties)),
        !disabled && React.createElement(Ripple, null)));
};

export { Avatar, Button$1 as Button, ButtonLink, Dropdown, Icon$1 as Icon, IconButton, Loading, Password, Popover, TextField, Typography, index as theme };
//# sourceMappingURL=index.esm.js.map
