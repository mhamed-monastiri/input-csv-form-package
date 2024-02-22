import { Box, BoxProps } from "@mui/material";
import { MotionProps, m } from "framer-motion";
import * as React from "react";
import { varFade } from "./variants";

// ----------------------------------------------------------------------
type Props = BoxProps & MotionProps;

interface TextAnimateProps extends Props {
  text: string;
}

export default function TextAnimate({
  text,
  variants,
  sx,
  ...other
}: TextAnimateProps) {
  return (
    <Box
      component={m.div}
      sx={{
        m: 0,
        typography: "h1",
        overflow: "hidden",
        display: "inline-flex",
        ...sx,
      }}
      {...other}
    >
      {text.split("").map((letter, index) => (
        <m.span key={index} variants={variants || varFade().inUp}>
          {letter}
        </m.span>
      ))}
    </Box>
  );
}
