import { TextFieldProps } from "@mui/material";
import * as React from "react";
type RHFSelectProps = TextFieldProps & {
    name: string;
    native?: boolean;
    multiple?: boolean;
    maxHeight?: boolean | number;
    children: React.ReactNode;
};
export declare function RHFSelect({ name, label, native, maxHeight, helperText, children, multiple, ...other }: RHFSelectProps): React.JSX.Element;
export {};
