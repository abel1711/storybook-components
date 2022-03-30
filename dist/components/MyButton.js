"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MyButton = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var MyButton = function (_a) {
    var label = _a.label, colorFont = _a.colorFont, backgroundColor = _a.backgroundColor, size = _a.size, _b = _a.border, border = _b === void 0 ? false : _b;
    return ((0, jsx_runtime_1.jsx)("button", __assign({ style: {
            color: colorFont,
            backgroundColor: backgroundColor,
            fontSize: size,
            borderRadius: border ? '15px' : '',
            border: 'none'
        } }, { children: label })));
};
exports.MyButton = MyButton;
