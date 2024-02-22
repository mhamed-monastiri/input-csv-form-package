import { FormControlLabelProps } from "@mui/material";
import * as React from "react";
interface RHFCheckboxProps extends Omit<FormControlLabelProps, "control"> {
    name: string;
    helperText?: React.ReactNode;
}
export declare function RHFCheckbox({ name, helperText, label, ...other }: RHFCheckboxProps): React.JSX.Element;
export {};
