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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const styles_1 = require("@mui/material/styles");
const React = __importStar(require("react"));
const react_dropzone_1 = require("react-dropzone");
const iconify_1 = __importDefault(require("../iconify"));
// ----------------------------------------------------------------------
const StyledDropZone = (0, styles_1.styled)("div")(({ theme }) => ({
    width: 64,
    height: 64,
    fontSize: 24,
    display: "flex",
    flexShrink: 0,
    cursor: "pointer",
    alignItems: "center",
    justifyContent: "center",
    margin: theme.spacing(0.5),
    color: theme.palette.text.disabled,
    borderRadius: theme.shape.borderRadius,
    border: `dashed 1px ${theme.palette.divider}`,
    backgroundColor: (0, styles_1.alpha)(theme.palette.grey[500], 0.08),
    "&:hover": {
        opacity: 0.72,
    },
}));
// ----------------------------------------------------------------------
function UploadBox(_a) {
    var { placeholder, error, disabled, sx } = _a, other = __rest(_a, ["placeholder", "error", "disabled", "sx"]);
    const { getRootProps, getInputProps, isDragActive, isDragReject } = (0, react_dropzone_1.useDropzone)(Object.assign({ disabled }, other));
    const isError = isDragReject || error;
    return (React.createElement(StyledDropZone, Object.assign({}, getRootProps(), { sx: Object.assign(Object.assign(Object.assign(Object.assign({}, (isDragActive && {
            opacity: 0.72,
        })), (isError && {
            color: "error.main",
            bgcolor: "error.lighter",
            borderColor: "error.light",
        })), (disabled && {
            opacity: 0.48,
            pointerEvents: "none",
        })), sx) }),
        React.createElement("input", Object.assign({}, getInputProps())),
        placeholder || React.createElement(iconify_1.default, { icon: "eva:cloud-upload-fill", width: 28 })));
}
exports.default = UploadBox;
