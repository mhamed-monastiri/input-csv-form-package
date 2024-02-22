import * as React from "react";
import { UseFormReturn } from "react-hook-form";
type Props = {
    children: React.ReactNode;
    methods: UseFormReturn<any>;
    onSubmit?: VoidFunction;
    className?: string;
    style?: React.CSSProperties;
};
export default function FormProvider({ children, onSubmit, methods, className, style, }: Props): React.JSX.Element;
export {};
