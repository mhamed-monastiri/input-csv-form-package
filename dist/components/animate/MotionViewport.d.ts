import { BoxProps } from "@mui/material";
import { MotionProps } from "framer-motion";
import * as React from "react";
type IProps = BoxProps & MotionProps;
interface Props extends IProps {
    children: React.ReactNode;
    disableAnimatedMobile?: boolean;
}
export default function MotionViewport({ children, disableAnimatedMobile, ...other }: Props): React.JSX.Element;
export {};
