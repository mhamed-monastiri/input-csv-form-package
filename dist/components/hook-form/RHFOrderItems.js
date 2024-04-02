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
const React = __importStar(require("react"));
// eslint-disable-next-line import/no-extraneous-dependencies
const react_beautiful_dnd_1 = require("react-beautiful-dnd");
const react_hook_form_1 = require("react-hook-form");
const camelToFlat_1 = require("../../utils/camelToFlat");
const iconify_1 = __importDefault(require("../iconify"));
function RHFOrderItems({ fields, name, label, helperText, }) {
    const { control, setValue } = (0, react_hook_form_1.useFormContext)();
    const labelledby = label ? `${name}-${label}` : "";
    const reorder = (list, startIndex, endIndex) => {
        const result = Array.from(list);
        const [removed] = result.splice(startIndex, 1);
        result.splice(endIndex, 0, removed);
        return result;
    };
    const onDragEnd = (result) => {
        if (!result.destination) {
            return;
        }
        const reorderedFields = reorder(fields, result.source.index, result.destination.index);
        setValue(name, reorderedFields);
    };
    return (React.createElement(react_hook_form_1.Controller, { name: name, control: control, render: ({ field, fieldState: { error } }) => (React.createElement(material_1.FormControl, { component: "fieldset" },
            label && (React.createElement(material_1.FormLabel, { component: "legend", id: labelledby, sx: { typography: "body2" } }, label)),
            React.createElement(material_1.Stack, { sx: {
                    mt: 1,
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    gap: "10px",
                    width: "100%",
                } },
                React.createElement(react_beautiful_dnd_1.DragDropContext, Object.assign({}, field, { onDragEnd: onDragEnd }),
                    React.createElement(react_beautiful_dnd_1.Droppable, { droppableId: "droppable" }, (provided, snapshot) => (React.createElement(material_1.Paper, Object.assign({ variant: "outlined" }, provided.droppableProps, { ref: provided.innerRef, sx: {
                            p: 1,
                            borderRadius: 2,
                            borderStyle: snapshot.isDraggingOver ? "dashed" : "solid",
                            maxWidth: "800px",
                            width: "100%",
                        } }), fields === null || fields === void 0 ? void 0 :
                        fields.map((item, index) => (React.createElement(react_beautiful_dnd_1.Draggable, { key: `item-${index}`, draggableId: `item-${index}`, index: index }, (providedd, snapshott) => (React.createElement(material_1.Stack, Object.assign({ ref: providedd.innerRef }, providedd.draggableProps, providedd.dragHandleProps, { sx: Object.assign({ p: 1, mb: 1, display: "flex", flexDirection: "row", gap: 1, alignItems: "center", border: "solid 1px #86939e", borderRadius: 1, userSelect: "none", background: snapshott.isDragging
                                    ? "#e6e9ec"
                                    : "#f4f6f8" }, providedd.draggableProps.style) }),
                            React.createElement(material_1.Stack, { sx: { color: "#86939e" } },
                                React.createElement(iconify_1.default, { icon: "icon-park-outline:drag" })),
                            (0, camelToFlat_1.camelToFlat)(item.label)))))),
                        provided.placeholder)))),
                React.createElement(material_1.Tooltip, { title: helperText || label, placement: "right-start" },
                    React.createElement(iconify_1.default, { icon: "ri:information-line", width: 23, sx: { cursor: "help", color: "#9AA6B2" } }))),
            !!error && (React.createElement(material_1.FormHelperText, { error: !!error }, error === null || error === void 0 ? void 0 : error.message)))) }));
}
exports.default = RHFOrderItems;
