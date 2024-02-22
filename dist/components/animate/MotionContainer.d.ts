import { BoxProps } from "@mui/material";
import { MotionProps } from "framer-motion";
import * as React from "react";
type IProps = BoxProps & MotionProps;
export interface Props extends IProps {
    animate?: boolean;
    action?: boolean;
}
export default function MotionContainer({ animate, action, children, ...other }: Props): React.JSX.Element;
export {};
