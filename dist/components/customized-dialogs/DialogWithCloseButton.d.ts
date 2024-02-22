import * as React from 'react';
import { DialogProps } from '@mui/material';
export interface Props extends DialogProps {
    variants?: Record<string, unknown>;
    onClose?: VoidFunction;
}
export default function DialogWithCloseButton({ open, variants, onClose, children, sx, ...other }: Props): React.JSX.Element;
