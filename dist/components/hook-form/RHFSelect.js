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
exports.RHFSelect = void 0;
const material_1 = require("@mui/material");
const React = __importStar(require("react"));
const react_hook_form_1 = require("react-hook-form");
const iconify_1 = __importDefault(require("../iconify"));
function RHFSelect(_a) {
    var { name, label, native, maxHeight = 220, helperText, children, multiple } = _a, other = __rest(_a, ["name", "label", "native", "maxHeight", "helperText", "children", "multiple"]);
    const { control, register } = (0, react_hook_form_1.useFormContext)();
    return (React.createElement(react_hook_form_1.Controller, { name: name, control: control, render: ({ field, fieldState: { error } }) => (React.createElement(material_1.Stack, { sx: helperText || label
                ? {
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    gap: "10px",
                    width: "100%",
                }
                : {} },
            React.createElement(material_1.TextField, Object.assign({}, field, { select: true, fullWidth: true, label: label, inputRef: field.ref }, register(name), { SelectProps: {
                    native,
                    MenuProps: {
                        PaperProps: {
                            sx: Object.assign({}, (!native && {
                                px: 1,
                                maxHeight: typeof maxHeight === "number" ? maxHeight : "unset",
                                "& .MuiMenuItem-root": {
                                    px: 1,
                                    borderRadius: 0.75,
                                    typography: "body2",
                                    textTransform: "capitalize",
                                },
                            })),
                        },
                    },
                    sx: { textTransform: "capitalize" },
                }, error: !!error, helperText: error ? error === null || error === void 0 ? void 0 : error.message : helperText }, other), children),
            (helperText || label) && (React.createElement(material_1.Tooltip, { title: helperText || label || field.value, placement: "right-start" },
                React.createElement(iconify_1.default, { icon: "ri:information-line", width: 23, sx: {
                        cursor: "help",
                        color: "#9AA6B2",
                        marginTop: error ? "-24px" : "",
                    } }))))) }));
}
exports.RHFSelect = RHFSelect;
