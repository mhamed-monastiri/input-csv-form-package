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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const material_1 = require("@mui/material");
const styles_1 = require("@mui/material/styles");
const React = __importStar(require("react"));
const cssStyles_1 = require("../../utils/cssStyles");
const iconify_1 = __importDefault(require("../iconify"));
function DownloadButton({ onDownload }) {
    const theme = (0, styles_1.useTheme)();
    return (React.createElement(material_1.IconButton, { onClick: onDownload, sx: {
            p: 0,
            top: 0,
            right: 0,
            width: 1,
            height: 1,
            zIndex: 9,
            opacity: 0,
            position: "absolute",
            borderRadius: "unset",
            justifyContent: "center",
            bgcolor: "grey.800",
            color: "common.white",
            transition: theme.transitions.create("opacity"),
            "&:hover": Object.assign({ opacity: 1 }, (0, cssStyles_1.bgBlur)({
                opacity: 0.64,
                color: theme.palette.grey[900],
            })),
        } },
        React.createElement(iconify_1.default, { icon: "eva:arrow-circle-down-fill", width: 24 })));
}
exports.default = DownloadButton;
