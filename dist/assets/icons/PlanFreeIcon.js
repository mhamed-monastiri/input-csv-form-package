"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
const material_1 = require("@mui/material");
const styles_1 = require("@mui/material/styles");
const React = __importStar(require("react"));
const react_1 = require("react");
// ----------------------------------------------------------------------
function PlanFreeIcon(_a) {
    var other = __rest(_a, []);
    const theme = (0, styles_1.useTheme)();
    const PRIMARY_MAIN = theme.palette.primary.main;
    const PRIMARY_DARK = theme.palette.primary.dark;
    const PRIMARY_DARKER = "#005249";
    return (React.createElement(material_1.Box, Object.assign({}, other),
        React.createElement("svg", { width: "100%", height: "100%", viewBox: "0 0 80 80", xmlns: "http://www.w3.org/2000/svg" },
            React.createElement("g", { transform: "translate(9.167 20)" },
                React.createElement("path", { fill: PRIMARY_DARK, d: "M53.333 17.5H61.666V25H53.333z" }),
                React.createElement("path", { fill: PRIMARY_DARKER, d: "M.935 20.489l25.028-12.46a5.044 5.044 0 014.52.012L60.74 23.307a1.69 1.69 0 01.015 3.007l-25.338 13.12a5.044 5.044 0 01-4.694-.028L.893 23.49a1.69 1.69 0 01.042-3.001z" }),
                React.createElement("path", { fill: PRIMARY_DARK, d: "M32.5 34.268v4.193a1.134 1.134 0 01-1.566 1.049l-.1-.047v-7.551a2.498 2.498 0 011.666 2.356zM.833 15.962l30 15.95v7.55l-30-15.952v-.02l-.115-.066A1.571 1.571 0 010 22.104v-7.937l.833 1.795z" }),
                React.createElement("path", { fill: PRIMARY_MAIN, fillRule: "nonzero", d: "M.935 12.989L25.963.529a5.044 5.044 0 014.52.012L60.74 15.807a1.69 1.69 0 01.015 3.007l-25.338 13.12a5.044 5.044 0 01-4.694-.028L.893 15.99a1.69 1.69 0 01.042-3.001z" })))));
}
exports.default = (0, react_1.memo)(PlanFreeIcon);
