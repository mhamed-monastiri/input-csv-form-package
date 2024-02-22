import { DialogProps } from "@mui/material";
import * as React from "react";
export interface Props extends DialogProps {
    variants?: Record<string, unknown>;
    onClose?: VoidFunction;
}
export default function DialogAnimate({ open, variants, onClose, children, sx, ...other }: Props): React.JSX.Element;
