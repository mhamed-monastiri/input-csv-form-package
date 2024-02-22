import CloseIcon from "@mui/icons-material/Close";
import { Box, Dialog, DialogProps, IconButton, Paper } from "@mui/material";
import { AnimatePresence, m } from "framer-motion";
import * as React from "react";
import { varFade } from "./variants";

// ----------------------------------------------------------------------

export interface Props extends DialogProps {
  variants?: Record<string, unknown>;
  onClose?: VoidFunction;
}

export default function DialogAnimate({
  open = false,
  variants,
  onClose,
  children,
  sx,
  ...other
}: Props) {
  return (
    <AnimatePresence>
      {open && (
        <Dialog
          fullWidth
          maxWidth="xs"
          open={open}
          onClose={onClose}
          PaperComponent={(props) => (
            <Box
              component={m.div}
              {...(variants ||
                varFade({
                  distance: 120,
                  durationIn: 0.32,
                  durationOut: 0.24,
                  easeIn: "easeInOut",
                }).inUp)}
              sx={{
                width: "100%",
                height: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Box
                onClick={onClose}
                sx={{ width: "100%", height: "100%", position: "fixed" }}
              />
              <Paper sx={sx} {...props}>
                {props.children}
              </Paper>
            </Box>
          )}
          {...other}
        >
          {onClose && (
            <IconButton
              aria-label="close"
              onClick={onClose}
              sx={{
                position: "absolute",
                right: 8,
                top: 8,
                color: (theme) => theme.palette.grey[500],
              }}
            >
              <CloseIcon />
            </IconButton>
          )}
          {children}
        </Dialog>
      )}
    </AnimatePresence>
  );
}
