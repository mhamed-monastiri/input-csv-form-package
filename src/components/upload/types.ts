import { DropzoneOptions } from 'react-dropzone';
// @mui
import { SxProps } from '@mui/material';
import { Theme } from '@mui/material/styles';

// ----------------------------------------------------------------------

export interface CustomFile extends File {
  path?: string;
  preview?: string;
  lastModifiedDate?: Date;
}

export interface UploadProps extends DropzoneOptions {
  error?: boolean;
  sx?: SxProps<Theme>;
  hideInput?: boolean;
  thumbnail?: boolean;
  placeholder?: React.ReactNode;
  helperText?: React.ReactNode;
  disableMultiple?: boolean;
  previewFileAsFiles?: boolean;
  //
  file?: CustomFile | string | null | undefined;
  onDelete?: VoidFunction;
  onChange?: (...event: any[]) => void;
  //
  // image:File | undefined,
  files?: (File | string)[];
  onUpload?: VoidFunction;
  onRemove?: (file: CustomFile | string) => void;
  onRemoveAll?: VoidFunction;
  ModelImage?: string;
}
