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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
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
const material_1 = require("@mui/material");
const React = __importStar(require("react"));
const react_hook_form_1 = require("react-hook-form");
const iconify_1 = __importDefault(require("../iconify"));
function RHFTextField(_a) {
    var { name, helperText, multiline, rows, type, inputRef, id, label } = _a, other = __rest(_a, ["name", "helperText", "multiline", "rows", "type", "inputRef", "id", "label"]);
    const { control, setValue } = (0, react_hook_form_1.useFormContext)();
    const handleWheel = (event) => {
        event.preventDefault();
    };
    return (React.createElement(react_hook_form_1.Controller, { name: name, control: control, defaultValue: "", render: ({ field, fieldState: { error } }) => (React.createElement(material_1.Stack, { sx: {
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                gap: "10px",
                width: "100%",
            } },
            React.createElement(material_1.TextField, Object.assign({ sx: { width: "100%" } }, field, { name: name, label: label, onBlur: field.onBlur, InputProps: {
                    onWheel: handleWheel,
                }, fullWidth: true, onWheel: handleWheel, value: field.value === null ? "" : field.value, inputRef: field.ref, multiline: multiline !== undefined && true, rows: rows, onChange: (e) => __awaiter(this, void 0, void 0, function* () {
                    field.onChange(e);
                }), error: !!error, helperText: error && (error === null || error === void 0 ? void 0 : error.message) }, other, { type: type })),
            React.createElement(material_1.Tooltip, { title: helperText || label, placement: "right-start" },
                React.createElement(iconify_1.default, { icon: "ri:information-line", width: 23, sx: {
                        cursor: "help",
                        color: "#9AA6B2",
                        marginTop: error ? "-24px" : "0px",
                    } })))) }));
}
exports.default = RHFTextField;
