import { TextFieldProps } from "@mui/material";
import * as React from "react";
type Props = TextFieldProps & {
    name: string;
    min?: number;
};
export default function RHFTextField({ name, helperText, multiline, rows, type, inputRef, id, label, ...other }: Props): React.JSX.Element;
export {};
