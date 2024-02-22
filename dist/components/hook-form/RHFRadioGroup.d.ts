import { RadioGroupProps } from "@mui/material";
import * as React from "react";
type Props = RadioGroupProps & {
    name: string;
    options: {
        label: string;
        value: any;
    }[];
    label?: string;
    spacing?: number;
    helperText?: React.ReactNode;
};
export default function RHFRadioGroup({ row, name, label, options, spacing, helperText, ...other }: Props): React.JSX.Element;
export {};
