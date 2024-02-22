import { Breakpoint } from "@mui/material/styles";
type ReturnType = boolean;
type Query = "up" | "down" | "between" | "only";
type Value = Breakpoint | number;
export default function useResponsive(query: Query, start?: Value, end?: Value): ReturnType;
export declare function useWidth(): "xs" | "sm" | "md" | "lg" | "xl";
export {};
