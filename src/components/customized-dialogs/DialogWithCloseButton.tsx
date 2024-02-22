import * as React from 'react';
import CloseIcon from '@mui/icons-material/Close';
import { Dialog, DialogProps, IconButton } from '@mui/material';

// ----------------------------------------------------------------------

export interface Props extends DialogProps {
  variants?: Record<string, unknown>;
  onClose?: VoidFunction;
}

export default function DialogWithCloseButton({
  open = false,
  variants,
  onClose,
  children,
  sx,
  ...other
}: Props) {
  return (
    <Dialog open={open} onClose={onClose} {...other}>
      {onClose && (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            m: 2,
            position: 'absolute',
            right: 1,
            top: 1,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      )}
      {children}
    </Dialog>
  );
}
