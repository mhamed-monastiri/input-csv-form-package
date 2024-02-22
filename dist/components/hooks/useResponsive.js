"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.useWidth = void 0;
const styles_1 = require("@mui/material/styles");
const useMediaQuery_1 = __importDefault(require("@mui/material/useMediaQuery"));
function useResponsive(query, start, end) {
    const theme = (0, styles_1.useTheme)();
    const mediaUp = (0, useMediaQuery_1.default)(theme.breakpoints.up(start));
    const mediaDown = (0, useMediaQuery_1.default)(theme.breakpoints.down(start));
    const mediaBetween = (0, useMediaQuery_1.default)(theme.breakpoints.between(start, end));
    const mediaOnly = (0, useMediaQuery_1.default)(theme.breakpoints.only(start));
    if (query === "up") {
        return mediaUp;
    }
    if (query === "down") {
        return mediaDown;
    }
    if (query === "between") {
        return mediaBetween;
    }
    return mediaOnly;
}
exports.default = useResponsive;
function useWidth() {
    const theme = (0, styles_1.useTheme)();
    const keys = [...theme.breakpoints.keys].reverse();
    return ((keys === null || keys === void 0 ? void 0 : keys.reduce((output, key) => {
        // eslint-disable-next-line react-hooks/rules-of-hooks
        const matches = (0, useMediaQuery_1.default)(theme.breakpoints.up(key));
        return !output && matches ? key : output;
    }, null)) || "xs");
}
exports.useWidth = useWidth;
