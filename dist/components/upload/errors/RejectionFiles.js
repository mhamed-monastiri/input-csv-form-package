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
Object.defineProperty(exports, "__esModule", { value: true });
const material_1 = require("@mui/material");
const styles_1 = require("@mui/material/styles");
const React = __importStar(require("react"));
const formatNumber_1 = require("../../../utils/formatNumber");
const file_thumbnail_1 = require("../../file-thumbnail");
function RejectionFiles({ fileRejections }) {
    if (!fileRejections.length) {
        return null;
    }
    return (React.createElement(material_1.Paper, { variant: "outlined", sx: {
            py: 1,
            px: 2,
            mt: 3,
            bgcolor: (theme) => (0, styles_1.alpha)(theme.palette.error.main, 0.08),
            borderColor: (theme) => (0, styles_1.alpha)(theme.palette.error.main, 0.24),
        } }, fileRejections.map(({ file, errors }) => {
        const { path, size } = (0, file_thumbnail_1.fileData)(file);
        return (React.createElement(material_1.Box, { key: path, sx: { my: 1 } },
            React.createElement(material_1.Typography, { variant: "subtitle2", noWrap: true },
                path,
                " - ",
                size ? (0, formatNumber_1.fData)(size) : ""),
            errors.map((error) => (React.createElement(material_1.Box, { key: error.code, component: "span", sx: { typography: "caption" } },
                "- ",
                error.message)))));
    })));
}
exports.default = RejectionFiles;
